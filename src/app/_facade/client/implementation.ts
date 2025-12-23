import { Event, EventYear, HillType } from '~/libs/types';
import { mapKeyValue, toFeet, toMiles } from '~/libs/utils';
import { BrittonsBashContentServiceClient } from '~/services/brittonsbash-content';
import { ProjectsEvent } from '../../_schema/types/projects-event.js';
import { ProjectsHills } from '../../_schema/types/projects-hills.js';
import { ProjectsStats } from '../../_schema/types/projects-stats.js';
import { ProjectsSummary } from '../../_schema/types/projects-summary.js';
import { Interface } from '../interface.js';

type Config = {
  brittonsBashContentServiceClient: BrittonsBashContentServiceClient;
};

export class Implementation implements Interface {
  private readonly brittonsBashContentServiceClient: BrittonsBashContentServiceClient;

  public constructor(config: Config) {
    this.brittonsBashContentServiceClient = config.brittonsBashContentServiceClient;
  }

  public async getEventNames(year: string): Promise<Array<Pick<Event, 'id' | 'prefix' | 'names'>>> {
    return this.brittonsBashContentServiceClient.getEventNames(year);
  }

  public async getEventYears(): Promise<string[]> {
    return this.brittonsBashContentServiceClient.getEventYears();
  }

  public async getEvent(year: string, event: string): Promise<Extract<Event, { type: 'mapped' }>> {
    return this.brittonsBashContentServiceClient.getEvent(year, event);
  }

  public async getProjectsEvents(year: EventYear): Promise<ProjectsEvent[]> {
    const mappedProjects = await this.brittonsBashContentServiceClient.getMappedProjects();

    const projectsEvents = mappedProjects.projects[year].reverse().map((project) => ({
      ...project,
      distance: toMiles(project.distance),
      elevation: toFeet(project.elevation),
      companionship: `${project.companionship}`,
      islands: project.islands ? `${project.islands.join(', ')}` : undefined,
      munros: project.munros ? `${project.munros.join(', ')}` : undefined,
      munroTops: project.munroTops ? `${project.munroTops.join(', ')}` : undefined,
      corbetts: project.corbetts ? `${project.corbetts.join(', ')}` : undefined,
      corbettTops: project.corbettTops ? `${project.corbettTops.join(', ')}` : undefined,
      grahams: project.grahams ? `${project.grahams.join(', ')}` : undefined,
      subTwos: project.subTwos ? `${project.subTwos.join(', ')}` : undefined,
      donalds: project.donalds ? `${project.donalds.join(', ')}` : undefined,
    }));

    return projectsEvents;
  }

  public async getProjectsHills(hillType: HillType): Promise<ProjectsHills> {
    const mappedProjects = await this.brittonsBashContentServiceClient.getMappedProjects();
    const hills: string[] = [];

    // We can be confident in this assertion due to `HillType` typesetting
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const hill of mappedProjects[hillType].names.unique!) {
      hills.push(hill);
    }

    const projectsHills = {
      total: mappedProjects[hillType].number.total,
      // `unique` will always exist on the object it is acquired from, just not some others
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      unique: mappedProjects[hillType].number.unique!,
      hills,
    };

    return projectsHills;
  }

  public async getProjectsStats(): Promise<ProjectsStats> {
    const mappedProjects = await this.brittonsBashContentServiceClient.getMappedProjects();
    const labels: string[] = [];
    const islands: string[] = [];
    const munros: string[] = [];
    const munroTops: string[] = [];
    const corbetts: string[] = [];
    const corbettTops: string[] = [];
    const grahams: string[] = [];
    const subTwos: string[] = [];
    const donalds: string[] = [];

    mapKeyValue('key', mappedProjects.islands.number, labels);
    mapKeyValue('value', mappedProjects.islands.number, islands);
    mapKeyValue('value', mappedProjects.munros.number, munros);
    mapKeyValue('value', mappedProjects.munroTops.number, munroTops);
    mapKeyValue('value', mappedProjects.corbetts.number, corbetts);
    mapKeyValue('value', mappedProjects.corbettTops.number, corbettTops);
    mapKeyValue('value', mappedProjects.grahams.number, grahams);
    mapKeyValue('value', mappedProjects.subTwos.number, subTwos);
    mapKeyValue('value', mappedProjects.donalds.number, donalds);

    const projectsHills = {
      labels: labels.reverse(),
      islands: islands.reverse(),
      munros: munros.reverse(),
      munroTops: munroTops.reverse(),
      corbetts: corbetts.reverse(),
      corbettTops: corbettTops.reverse(),
      grahams: grahams.reverse(),
      subTwos: subTwos.reverse(),
      donalds: donalds.reverse(),
    };

    return projectsHills;
  }

  public async getProjectsSummary(): Promise<ProjectsSummary> {
    const mappedProjects = await this.brittonsBashContentServiceClient.getMappedProjects();
    const labels: string[] = [];
    const occurrences: string[] = [];
    const distances: string[] = [];
    const elevations: string[] = [];

    mapKeyValue('key', mappedProjects.number, labels);
    mapKeyValue('value', mappedProjects.number, occurrences);
    mapKeyValue('value', mappedProjects.distance, distances);
    mapKeyValue('value', mappedProjects.elevation, elevations);

    const projectsSummary = {
      labels: labels.reverse(),
      occurrences: occurrences.reverse(),
      distances: distances.reverse(),
      elevations: elevations.reverse(),
    };

    return projectsSummary;
  }

  // TODO: add CMS, and this
  // public async getResources(): Promise<Resources> {
  //   return this.brittonsBashContentService.getCmsResources(...)
  // }
}
