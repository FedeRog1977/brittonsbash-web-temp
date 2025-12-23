import { AcademiaData } from './academia-data.js';
import { HomeData } from './home-data.js';
import { InstantGramData } from './instant-gram-data.js';
import { ProjectsEventsData } from './projects-events-data.js';
import { ProjectsHillsData } from './projects-hills-data.js';

export type Data = {
  home: HomeData;
  academia: AcademiaData;
  instantGram: InstantGramData;
  projectsEvents: ProjectsEventsData;
  projectsHills: ProjectsHillsData;
};
