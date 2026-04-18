import { Resources } from '~/schema/types';
import { mockInstantGramResources } from './mock-instant-gram-resources.js';
import { mockProjectsResources } from './mock-projects-resources.js';
import { mockStaticResources } from './mock-static-resources.js';

export const mockResources: Resources = {
  home: mockStaticResources,
  academia: mockStaticResources,
  employment: mockStaticResources,
  library: mockStaticResources,
  instantGram: mockInstantGramResources,
  projects: mockProjectsResources,
};
