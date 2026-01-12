import { JSONSchema } from '~/libs/types';
import { InstantGramData } from '../types/instant-gram-data.js';

export const instantGramDataValidationSchema: JSONSchema<InstantGramData> = {
  type: 'object',
  title: 'Instant Gram Pages Data',
  description: 'Page data for Instant Gram form.',
  properties: {
    tag: { type: 'string' },
    year: { type: 'string' },
    event: { type: 'string' },
  },
  // One of `tag` or `year`?
  required: ['event'],
};
