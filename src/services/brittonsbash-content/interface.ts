import {
  Event,
  Features,
  MappedProjects,
  Project,
  EventTag,
  EventYear,
  EventId,
  ProjectId,
} from '~/libs/types';

export interface Interface {
  getAllProjects: () => Promise<MappedProjects>;
  getEventNames: (
    year: EventYear,
  ) => Promise<Array<Pick<Event, 'id' | 'tags' | 'prefix' | 'names'>>>;
  getEventTags: () => Promise<EventTag[]>;
  getEventYears: () => Promise<EventYear[]>;
  getEvent: (year: EventYear, eventId: EventId) => Promise<Extract<Event, { type: 'mapped' }>>;
  getMappedEventFeatures: () => Promise<Features>;
  getProjectNames: (year: EventYear) => Promise<Array<Pick<Project, 'id' | 'name'>>>;
  getProject: (year: EventYear, projectId: ProjectId) => Promise<Project>;
}
