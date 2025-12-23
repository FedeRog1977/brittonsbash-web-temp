import { Resources } from '../../../_app-schema/types/resources.js';
import { mockAcademiaResources } from './mock-academia-resources.js';
import { mockHomeResources } from './mock-home-resources.js';
import { mockInstantGramResources } from './mock-instant-gram-resources.js';

export const mockResources: Resources = {
  home: mockHomeResources,
  academia: mockAcademiaResources,
  instantGram: mockInstantGramResources,
};
