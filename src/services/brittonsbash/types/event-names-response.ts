import { Event } from '~/libs/types';

export type EventNamesResponse = Array<Pick<Event, 'id' | 'tags' | 'prefix' | 'names'>>;
