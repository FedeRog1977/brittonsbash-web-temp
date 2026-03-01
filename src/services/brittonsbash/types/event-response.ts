import { Event } from '~/libs/types';

export type EventResponse = Omit<Extract<Event, { type: 'unmapped' }>, 'type'>;
