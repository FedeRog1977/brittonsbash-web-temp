import { JSONSchema } from '~/libs/types';
import { AggregateResources } from '../types/aggregate-resources.js';
import { academiaResourcesValidationSchema } from './academia-resources-validation-schema.js';
import { homeResourcesValidationSchema } from './home-resources-validation-schema.js';
import { instantGramResourcesValidationSchema } from './instant-gram-resources-validation-schema.js';

export const aggregateResourcesValidationSchema: JSONSchema<AggregateResources> = {
  type: 'object',
  title: 'Aggregate Page Resources',
  description: 'Static resources for all pages.',
  properties: {
    home: homeResourcesValidationSchema,
    academia: academiaResourcesValidationSchema,
    instantGram: instantGramResourcesValidationSchema,
  },
  required: ['home', 'academia'],
};
