import { Event as ClientEvent } from '~/libs/types';

export type Event = {
  year: string;
  events: Pick<ClientEvent, 'id' | 'prefix' | 'names'>[];
};
