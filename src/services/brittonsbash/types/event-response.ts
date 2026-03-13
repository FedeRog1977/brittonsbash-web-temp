import { Event } from '~/types';

export type EventResponse = Omit<Extract<Event, { type: 'unmapped' }>, 'type'>;
