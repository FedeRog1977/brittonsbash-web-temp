import { ProjectsEvent, ProjectsHills, ProjectsStats, ProjectsSummary } from '~/schema/types';
import { Event, EventId, EventTag, EventYear, HillType } from '~/types';

export interface Interface {
  getEventNames: (
    year: EventYear,
  ) => Promise<Array<Pick<Event, 'id' | 'tags' | 'prefix' | 'names'>>>;
  getEventTags: () => Promise<EventTag[]>;
  getEventYears: () => Promise<EventYear[]>;
  getEvent: (year: EventYear, event: EventId) => Promise<Extract<Event, { type: 'mapped' }>>;
  getProjectsEvents: (year: EventYear) => Promise<ProjectsEvent[]>;
  getProjectsHills: (hillType: HillType) => Promise<ProjectsHills>;
  getProjectsStats: () => Promise<ProjectsStats>;
  getProjectsSummary: () => Promise<ProjectsSummary>;
  // TODO: add CMS, and this
  // getResources: () => Promise<Resources>;
}
