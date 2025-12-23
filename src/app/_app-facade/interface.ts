import { Event, EventYear, HillType, MappedProjects, Project } from '~/libs/types';
import { ParsedProject } from '../_app-schema/types/parsed-project.js';
import { ProjectsHills } from '../_app-schema/types/projects-hills.js';
import { ProjectsSummary } from '../_app-schema/types/projects-summary.js';
import { ProjectsStats } from '../_app-schema/types/projects-stats.js';

export interface Interface {
  getEventNames: (year: string) => Promise<Array<Pick<Event, 'id' | 'prefix' | 'names'>>>;
  getEventYears: () => Promise<string[]>;
  getEvent: (year: string, event: string) => Promise<Extract<Event, { type: 'mapped' }>>;
  getProjectsEvents(year: EventYear): Promise<ParsedProject[]>;
  getProjectsHills(hillType: HillType): Promise<ProjectsHills>;
  getProjectsStats(): Promise<ProjectsStats>;
  getProjectsSummary(): Promise<ProjectsSummary>;
  // TODO: add CMS, and this
  // getResources: () => Promise<Resources>;
}
