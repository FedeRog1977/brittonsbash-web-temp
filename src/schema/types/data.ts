import { InstantGramData } from './instant-gram-data.js';
import { ProjectsEventsData } from './projects-events-data.js';
import { ProjectsHillsData } from './projects-hills-data.js';

export type Data = {
  instantGram: InstantGramData;
  // TODO: this is misleading as both forms are on the `projects` page, fix
  projectsEvents: ProjectsEventsData;
  projectsHills: ProjectsHillsData;
};
