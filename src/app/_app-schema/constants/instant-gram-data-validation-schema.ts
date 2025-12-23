import { JSONSchema } from '~/libs/types';
import { InstantGramData } from '../types/instant-gram-data.js';

export const instantGramDataValidationSchema: JSONSchema<InstantGramData> = {
  type: 'object',
  title: 'Instant Gram Pages Data',
  description: 'Page data for Instant Gram pages.',
  properties: {
    year: { type: 'string' },
    event: { type: 'string' },
  },
  required: ['year', 'event'],
};
