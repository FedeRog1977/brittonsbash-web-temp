import { Event as ClientEvent } from '~/libs/types';

export type EventNamesByYear = {
  year: string;
  events: Array<Pick<ClientEvent, 'id' | 'tags' | 'prefix' | 'names'>>;
};
