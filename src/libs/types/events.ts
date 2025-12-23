import { EventYear } from './event-year.js';
import { Event } from './event.js';

export type Events = {
  [K in EventYear]: Extract<Event, { type: 'unmapped' }>[];
};
