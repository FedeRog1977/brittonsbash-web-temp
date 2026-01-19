import { Event, Features, MappedProjects, Project, EventTag } from '~/libs/types';

export interface Interface {
  getAllProjects: () => Promise<MappedProjects>;
  getEventNames: (year: string) => Promise<Array<Pick<Event, 'id' | 'tags' | 'prefix' | 'names'>>>;
  getEventTags: () => Promise<EventTag[]>;
  getEventYears: () => Promise<string[]>;
  getEvent: (year: string, eventId: string) => Promise<Extract<Event, { type: 'mapped' }>>;
  getMappedEventFeatures: () => Promise<Features>;
  getProject: (year: string, projectId: string) => Promise<Project>;
}
