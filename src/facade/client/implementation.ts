import { ProjectsEvent, ProjectsHills, ProjectsStats, ProjectsSummary } from '~/schema/types';
import { BrittonsbashService } from '~/services/brittonsbash';
import { Event, EventId, EventTag, EventYear, HillType } from '~/types';
import { mapKeyValue, removeDuplicates, toFeet, toMiles } from '~/utils';
import { Interface } from '../interface.js';

type Config = {
  brittonsbashService: BrittonsbashService;
};

export class Implementation implements Interface {
  private readonly brittonsbashService: BrittonsbashService;

  public constructor(config: Config) {
    this.brittonsbashService = config.brittonsbashService;
  }

  public async getEventNames(
    year: EventYear,
  ): Promise<Array<Pick<Event, 'id' | 'tags' | 'prefix' | 'names'>>> {
    return this.brittonsbashService.getEventNames(year);
  }

  public async getEventTags(): Promise<EventTag[]> {
    return this.brittonsbashService.getEventTags();
  }

  public async getEventYears(): Promise<EventYear[]> {
    return this.brittonsbashService.getEventYears();
  }

  public async getEvent(
    year: EventYear,
    event: EventId,
  ): Promise<Extract<Event, { type: 'mapped' }>> {
    return this.brittonsbashService.getEvent(year, event);
  }

  public async getProjectsEvents(year: EventYear): Promise<ProjectsEvent[]> {
    const allProjects = await this.brittonsbashService.getAllProjects();

    const projectsEvents = allProjects.projects[year].reverse().map((project) => ({
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
    const allProjects = await this.brittonsbashService.getAllProjects();
    const hills: string[] = [];

    for (const hill of allProjects[hillType].names.total) {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const count = (allProjects[hillType].names.total as string[]).reduce(
        (index, value) => (value === hill ? index + 1 : index),
        0,
      );

      const countReadable = count > 1 ? ` [${count}]` : '';

      hills.push(`${hill}${countReadable}`);
    }

    const projectsHills = {
      total: allProjects[hillType].instances.total,
      unique: allProjects[hillType].instances.unique,
      // Already `sort()`ed in `getAllProjects()`
      hills: removeDuplicates(hills),
    };

    return projectsHills;
  }

  public async getProjectsStats(): Promise<ProjectsStats> {
    const allProjects = await this.brittonsbashService.getAllProjects();

    const labels: string[] = [];
    const islands: string[] = [];
    const munros: string[] = [];
    const munroTops: string[] = [];
    const corbetts: string[] = [];
    const corbettTops: string[] = [];
    const grahams: string[] = [];
    const donalds: string[] = [];
    const subTwos: string[] = [];

    // @ts-expect-error safely remove type key
    delete allProjects.islands.instances.type;
    // @ts-expect-error safely remove type key
    delete allProjects.munros.instances.type;
    // @ts-expect-error safely remove type key
    delete allProjects.munroTops.instances.type;
    // @ts-expect-error safely remove type key
    delete allProjects.corbetts.instances.type;
    // @ts-expect-error safely remove type key
    delete allProjects.corbettTops.instances.type;
    // @ts-expect-error safely remove type key
    delete allProjects.grahams.instances.type;
    // @ts-expect-error safely remove type key
    delete allProjects.subTwos.instances.type;
    // @ts-expect-error safely remove type key
    delete allProjects.donalds.instances.type;

    mapKeyValue('key', allProjects.islands.instances, labels);
    mapKeyValue('value', allProjects.islands.instances, islands);
    mapKeyValue('value', allProjects.munros.instances, munros);
    mapKeyValue('value', allProjects.munroTops.instances, munroTops);
    mapKeyValue('value', allProjects.corbetts.instances, corbetts);
    mapKeyValue('value', allProjects.corbettTops.instances, corbettTops);
    mapKeyValue('value', allProjects.grahams.instances, grahams);
    mapKeyValue('value', allProjects.subTwos.instances, subTwos);
    mapKeyValue('value', allProjects.donalds.instances, donalds);

    const projectsHills = {
      labels: labels.reverse(),
      islands: islands.reverse(),
      munros: munros.reverse(),
      munroTops: munroTops.reverse(),
      corbetts: corbetts.reverse(),
      corbettTops: corbettTops.reverse(),
      grahams: grahams.reverse(),
      donalds: donalds.reverse(),
      subTwos: subTwos.reverse(),
    };

    return projectsHills;
  }

  public async getProjectsSummary(): Promise<ProjectsSummary> {
    const allProjects = await this.brittonsbashService.getAllProjects();

    const labels: string[] = [];
    const instances: string[] = [];
    const distances: string[] = [];
    const elevations: string[] = [];

    // @ts-expect-error safely remove type key
    delete allProjects.instances.type;
    // @ts-expect-error safely remove type key
    delete allProjects.distance.type;
    // @ts-expect-error safely remove type key
    delete allProjects.elevation.type;

    mapKeyValue('key', allProjects.instances, labels);
    mapKeyValue('value', allProjects.instances, instances);
    mapKeyValue('value', allProjects.distance, distances);
    mapKeyValue('value', allProjects.elevation, elevations);

    const projectsSummary = {
      labels: labels.reverse(),
      instances: instances.reverse(),
      distances: distances.reverse(),
      elevations: elevations.reverse(),
    };

    return projectsSummary;
  }

  // TODO: add CMS, and this
  // public async getResources(): Promise<Resources> {
  //   return this.brittonsbashService.getCmsResources(...)
  // }
}
