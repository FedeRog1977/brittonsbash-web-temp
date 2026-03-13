import { Event as ClientEvent } from '~/types';

export type EventNamesByYear = {
  year: string;
  events: Array<Pick<ClientEvent, 'id' | 'tags' | 'prefix' | 'names'>>;
};
