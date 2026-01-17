import { CustomErrors } from '~/libs/components-basics/form';
import { InstantGramData } from '../types/instant-gram-data.js';

export const instantGramCustomErrors: CustomErrors<InstantGramData> = {
  properties: {
    tag: {
      required: 'Tag or year required, input a value',
      // pattern: 'Does not match pattern',
      enum: 'Tag or year required, input a value',
    },
    year: {
      required: 'Tag or year required, input a value',
      // pattern: 'Does not match pattern',
      enum: 'Tag or year required, input a value',
    },
    event: {
      required: 'Required field, input a value',
      // pattern: 'Does not match pattern',
      enum: 'Required field, input a value',
      // const: 'Does not match `...` field',
    },
  },
};
