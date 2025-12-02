// import { AggregateResources } from '@apps/home-common/types';
import {
  // Culinary,
  Event,
  // Events,
  // Features,
  // Hills,
  // Img,
  // MappedProjects,
  // Project,
  // Regions,
  // UrlGroup,
} from '~/libs/types';

export interface HomeFacade {
  // getCulinary: () => Promise<Culinary>;
  // getEvents: () => Promise<Events>;
  getEventNames: (year: string) => Promise<Array<Pick<Event, 'id' | 'prefix' | 'names'>>>;
  getEvent: (year: string, event: string) => Promise<Extract<Event, { type: 'mapped' }>>;
  // getHills: () => Promise<Hills>;
  // getLinks: () => Promise<UrlGroup[]>;
  // getMappedEventFeatures: () => Promise<Features>;
  // getMappedEventImages: () => Promise<Img[]>;
  // getMappedEventSports: () => Promise<Project[]>;
  // getMappedEvents: () => Promise<Event[]>;
  // getMappedProjects: () => Promise<MappedProjects>;
  // getRegions: () => Promise<Regions>;
  // TODO: add CMS, and this
  // getResources: () => Promise<AggregateResources>;
  // getSport: (group: 'projects', year: string, sport: string) => Promise<Project | Project[]>;
}
