import { JSONSchema } from '~/libs/types';
import { InstantGramData } from '../types/instant-gram-data.js';

export const instantGramDataValidationSchema: JSONSchema<InstantGramData> = {
  type: 'object',
  title: 'Instant Gram Pages Data',
  description: 'Page data for Instant Gram form.',
  properties: {
    tag: { type: 'string' },
    year: { type: 'string' },
    event: {
      type: 'string',
      // Currently this says "`event` filed should equal `tag` field"
      // I want it to say "`event` field required either `tag` or `year` field"
      // // @ts-expect-error allow schema to compare values across fields
      // const: { $data: '1/tag' },
    },
  },
  oneOf: [{ required: ['tag', 'event'] }, { required: ['year', 'event'] }],
};
