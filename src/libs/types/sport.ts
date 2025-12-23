import { EventYear } from './event-year.js';
import { Project } from './project.js';

export type Sport = {
  [K in EventYear]: {
    projects: Project[];
  };
};
