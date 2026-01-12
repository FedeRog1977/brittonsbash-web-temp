import { Event, EventTag, EventYear, HillType } from '~/libs/types';
import { ProjectsEvent } from '../_schema/types/projects-event.js';
import { ProjectsHills } from '../_schema/types/projects-hills.js';
import { ProjectsStats } from '../_schema/types/projects-stats.js';
import { ProjectsSummary } from '../_schema/types/projects-summary.js';

export interface Interface {
  getEventNames: (year: string) => Promise<Array<Pick<Event, 'id' | 'tags' | 'prefix' | 'names'>>>;
  getEventTags: () => Promise<EventTag[]>;
  getEventYears: () => Promise<string[]>;
  getEvent: (year: string, event: string) => Promise<Extract<Event, { type: 'mapped' }>>;
  getProjectsEvents: (year: EventYear) => Promise<ProjectsEvent[]>;
  getProjectsHills: (hillType: HillType) => Promise<ProjectsHills>;
  getProjectsStats: () => Promise<ProjectsStats>;
  getProjectsSummary: () => Promise<ProjectsSummary>;
  // TODO: add CMS, and this
  // getResources: () => Promise<Resources>;
}
