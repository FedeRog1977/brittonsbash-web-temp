import { Event as ClientEvent, EventTag } from '~/types';

export type EventNamesByTag = {
  tag: EventTag;
  events: Array<Pick<ClientEvent, 'id' | 'tags' | 'prefix' | 'names'>>;
};
