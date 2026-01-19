import { EventYear } from './event-year.js';
import { Project } from './project.js';

export type Projects = {
  [K in EventYear]: Project[];
};
