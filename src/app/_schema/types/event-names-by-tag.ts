import { Event as ClientEvent, EventTag } from '~/libs/types';

export type EventNamesByTag = {
  tag: EventTag;
  events: Array<Pick<ClientEvent, 'id' | 'tags' | 'prefix' | 'names'>>;
};
