import { EventYear } from './event-year.js';
import { Event } from './event.js';

export type Events = {
  [K in EventYear]: Array<Extract<Event, { type: 'unmapped' }>>;
};
