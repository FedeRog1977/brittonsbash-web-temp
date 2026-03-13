import { Event } from '~/types';

export type EventNamesResponse = Array<Pick<Event, 'id' | 'tags' | 'prefix' | 'names'>>;
