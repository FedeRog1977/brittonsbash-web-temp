import { EventYear } from './event-year.js';

export type Events = {
  [K in EventYear]: Extract<Event, { type: 'unmapped' }>[];
};
