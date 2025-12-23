import { AcademiaResources } from './academia-resources.js';
import { HomeResources } from './home-resources.js';
import { InstantGramResources } from './instant-gram-resources.js';
import { ProjectsResources } from './projects-resources.js';

export type Resources = {
  home: HomeResources;
  academia: AcademiaResources;
  instantGram: InstantGramResources;
  projects: ProjectsResources;
};
