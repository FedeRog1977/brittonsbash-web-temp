import { EventYear } from './event-year.js';

type Base<T extends unknown> = {
  total: T;
  unique?: T;
};

export type EventAggregation<T extends unknown> = Base<T> & {
  [K in EventYear]: T;
};
