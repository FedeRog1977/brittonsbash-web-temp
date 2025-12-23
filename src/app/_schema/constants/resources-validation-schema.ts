import { JSONSchema } from '~/libs/types';
import { Resources } from '../types/resources.js';
import { academiaResourcesValidationSchema } from './academia-resources-validation-schema.js';
import { homeResourcesValidationSchema } from './home-resources-validation-schema.js';
import { instantGramResourcesValidationSchema } from './instant-gram-resources-validation-schema.js';
import { projectsResourcesValidationSchema } from './projects-resources-validation-schema.js';

export const resourcesValidationSchema: JSONSchema<Resources> = {
  type: 'object',
  title: 'Aggregate Page Resources',
  description: 'Static resources for all pages.',
  properties: {
    home: homeResourcesValidationSchema,
    academia: academiaResourcesValidationSchema,
    instantGram: instantGramResourcesValidationSchema,
    projects: projectsResourcesValidationSchema,
  },
  required: ['home', 'academia', 'instantGram', 'projects'],
};
