import { JSONSchema } from '~/types';
import { Resources } from '../types/resources.js';
import { instantGramResourcesValidationSchema } from './instant-gram-resources-validation-schema.js';
import { projectsResourcesValidationSchema } from './projects-resources-validation-schema.js';
import { staticResourcesValidationSchema } from './static-resources-validation-schema.js';

export const resourcesValidationSchema: JSONSchema<Resources> = {
  type: 'object',
  title: 'Aggregate Page Resources',
  description: 'Static resources for all pages.',
  properties: {
    home: staticResourcesValidationSchema,
    academia: staticResourcesValidationSchema,
    employment: staticResourcesValidationSchema,
    library: staticResourcesValidationSchema,
    instantGram: instantGramResourcesValidationSchema,
    projects: projectsResourcesValidationSchema,
  },
  required: ['home', 'academia', 'instantGram', 'projects'],
};
