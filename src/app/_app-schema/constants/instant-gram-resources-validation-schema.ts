import { JSONSchema } from '~/libs/types';
import { InstantGramResources } from '../types/instant-gram-resources.js';

export const instantGramResourcesValidationSchema: JSONSchema<InstantGramResources> = {
  type: 'object',
  title: 'Instant Gram Pages Resources',
  description: 'Static resources for Instant Gram pages.',
  properties: {},
  required: [],
};
