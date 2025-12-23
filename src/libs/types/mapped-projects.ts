import { EventAggregation } from './event-aggregation.js';
import { EventYear } from './event-year.js';
import { Project } from './project.js';

export type MappedProjects = {
  projects: {
    [K in EventYear]: Project[];
  };
  number: EventAggregation<number>;
  distance: EventAggregation<string | string[]>;
  elevation: EventAggregation<string | string[]>;
  islands: {
    names: EventAggregation<string | string[]>;
    number: EventAggregation<number>;
  };
  munros: {
    names: EventAggregation<string | string[]>;
    number: EventAggregation<number>;
  };
  munroTops: {
    names: EventAggregation<string | string[]>;
    number: EventAggregation<number>;
  };
  corbetts: {
    names: EventAggregation<string | string[]>;
    number: EventAggregation<number>;
  };
  corbettTops: {
    names: EventAggregation<string | string[]>;
    number: EventAggregation<number>;
  };
  grahams: {
    names: EventAggregation<string | string[]>;
    number: EventAggregation<number>;
  };
  subTwos: {
    names: EventAggregation<string | string[]>;
    number: EventAggregation<number>;
  };
  donalds: {
    names: EventAggregation<string | string[]>;
    number: EventAggregation<number>;
  };
};
