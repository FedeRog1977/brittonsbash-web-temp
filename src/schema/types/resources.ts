import { InstantGramResources } from './instant-gram-resources.js';
import { ProjectsResources } from './projects-resources.js';
import { StaticResources } from './static-resources.js';

export type Resources = {
  home: StaticResources;
  academia: StaticResources;
  employment: StaticResources;
  library: StaticResources;
  instantGram: InstantGramResources;
  projects: ProjectsResources;
  // TODO: populate
  // projectsHills: object;
  // TODO: populate
  // projectsEvents: object;
};
