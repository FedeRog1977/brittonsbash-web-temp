import { Event, Features, Img, MappedProjects, Project, EventTag } from '~/libs/types';

export interface Interface {
  getEventNames: (year: string) => Promise<Array<Pick<Event, 'id' | 'tags' | 'prefix' | 'names'>>>;
  getEventTags: () => Promise<EventTag[]>;
  getEventYears: () => Promise<string[]>;
  getEvent: (year: string, event: string) => Promise<Extract<Event, { type: 'mapped' }>>;
  getMappedEventFeatures: () => Promise<Features>;
  getMappedEventImages: () => Promise<Img[]>;
  getMappedEventSports: () => Promise<Project[]>;
  getMappedEvents: () => Promise<Event[]>;
  getMappedProjects: () => Promise<MappedProjects>;
  getProject: (year: string, projectId: string) => Promise<Project>;
}
