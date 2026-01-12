import { Event as ClientEvent } from '~/libs/types';

export type Event = {
  year: string;
  events: Array<Pick<ClientEvent, 'id' | 'tags' | 'prefix' | 'names'>>;
};
