import { EventYear } from './event-year.js';

type BaseUnique<T extends string | string[] | number> = {
  type: 'unique';
  total: T;
  unique: T;
};

type BaseSansUnique<T extends string | string[] | number> = {
  type: 'sansUnique';
  total: T;
};

type Base<T extends string | string[] | number> = BaseUnique<T> | BaseSansUnique<T>;

export type EventAggregation<T extends string | string[] | number> = Base<T> & {
  [K in EventYear]: T;
};
