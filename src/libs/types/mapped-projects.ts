import { EventAggregation } from './event-aggregation.js';
import { EventYear } from './event-year.js';
import { Project } from './project.js';

export type MappedProjects = {
  projects: {
    [K in EventYear]: Project[];
  };
  number: Extract<EventAggregation<number>, { type: 'sansUnique' }>;
  distance: Extract<EventAggregation<string | string[]>, { type: 'sansUnique' }>;
  elevation: Extract<EventAggregation<string | string[]>, { type: 'sansUnique' }>;
  islands: {
    names: Extract<EventAggregation<string | string[]>, { type: 'unique' }>;
    number: Extract<EventAggregation<number>, { type: 'unique' }>;
  };
  munros: {
    names: Extract<EventAggregation<string | string[]>, { type: 'unique' }>;
    number: Extract<EventAggregation<number>, { type: 'unique' }>;
  };
  munroTops: {
    names: Extract<EventAggregation<string | string[]>, { type: 'unique' }>;
    number: Extract<EventAggregation<number>, { type: 'unique' }>;
  };
  corbetts: {
    names: Extract<EventAggregation<string | string[]>, { type: 'unique' }>;
    number: Extract<EventAggregation<number>, { type: 'unique' }>;
  };
  corbettTops: {
    names: Extract<EventAggregation<string | string[]>, { type: 'unique' }>;
    number: Extract<EventAggregation<number>, { type: 'unique' }>;
  };
  grahams: {
    names: Extract<EventAggregation<string | string[]>, { type: 'unique' }>;
    number: Extract<EventAggregation<number>, { type: 'unique' }>;
  };
  subTwos: {
    names: Extract<EventAggregation<string | string[]>, { type: 'unique' }>;
    number: Extract<EventAggregation<number>, { type: 'unique' }>;
  };
  donalds: {
    names: Extract<EventAggregation<string | string[]>, { type: 'unique' }>;
    number: Extract<EventAggregation<number>, { type: 'unique' }>;
  };
};
