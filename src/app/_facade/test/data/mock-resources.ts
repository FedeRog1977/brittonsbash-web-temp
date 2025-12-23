import { Resources } from '../../../_schema/types/resources.js';
import { mockAcademiaResources } from './mock-academia-resources.js';
import { mockHomeResources } from './mock-home-resources.js';
import { mockInstantGramResources } from './mock-instant-gram-resources.js';
import { mockProjectsResources } from './mock-projects-resources.js';

export const mockResources: Resources = {
  home: mockHomeResources,
  academia: mockAcademiaResources,
  instantGram: mockInstantGramResources,
  projects: mockProjectsResources,
};
