import { EventAggregation } from './event-aggregation.js';
import { HillType } from './hill-type.js';
import { Projects } from './projects.js';

type MappedHills = {
  [K in HillType]: {
    // TODO: update to `instances`
    names: Extract<EventAggregation<string | string[]>, { type: 'unique' }>;
    number: Extract<EventAggregation<number>, { type: 'unique' }>;
  };
};

export type MappedProjects = MappedHills & {
  projects: Projects;
  instances: Extract<EventAggregation<number>, { type: 'sansUnique' }>;
  distance: Extract<EventAggregation<string | string[]>, { type: 'sansUnique' }>;
  elevation: Extract<EventAggregation<string | string[]>, { type: 'sansUnique' }>;
};
