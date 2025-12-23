import {
  Culinary,
  Event,
  Events,
  Features,
  Hills,
  Img,
  MappedProjects,
  Project,
  UrlGroup,
  Regions,
} from '~/libs/types';

export interface Interface {
  getCulinary: () => Promise<Culinary>;
  getEventNames: (year: string) => Promise<Array<Pick<Event, 'id' | 'prefix' | 'names'>>>;
  getEventYears: () => Promise<string[]>;
  getEvent: (year: string, event: string) => Promise<Extract<Event, { type: 'mapped' }>>;
  getHills: () => Promise<Hills>;
  getLinks: () => Promise<UrlGroup[]>;
  getMappedEventFeatures: () => Promise<Features>;
  getMappedEventImages: () => Promise<Img[]>;
  getMappedEventSports: () => Promise<Project[]>;
  getMappedEvents: () => Promise<Event[]>;
  getMappedProjects: () => Promise<MappedProjects>;
  getRegions: () => Promise<Regions>;
  getSport: (group: 'projects', year: string, sport: string) => Promise<Project>;
}
