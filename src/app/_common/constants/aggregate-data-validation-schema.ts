import { JSONSchema } from '~/libs/types';
import { AggregateData } from '../types/aggregate-data.js';
import { academiaDataValidationSchema } from './academia-data-validation-schema.js';
import { homeDataValidationSchema } from './home-data-validation-schema.js';
import { instantGramDataValidationSchema } from './instant-gram-data-validation-schema.js';

export const aggregateDataValidationSchema: JSONSchema<AggregateData> = {
  type: 'object',
  title: 'Aggregate Page Data',
  description: 'Page data for all pages.',
  properties: {
    home: homeDataValidationSchema,
    academia: academiaDataValidationSchema,
    instantGram: instantGramDataValidationSchema,
  },
  required: [],
};
