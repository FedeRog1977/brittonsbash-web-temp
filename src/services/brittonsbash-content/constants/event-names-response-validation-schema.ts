import { JSONSchema } from '~/libs/types';
import { EventNamesResponse } from '../types/event-names-response.js';

export const eventNamesResponseValidationSchema: JSONSchema<EventNamesResponse> = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      tags: { type: 'array', items: { type: 'string' } },
      prefix: { type: 'string' },
      names: { type: 'array', items: { type: 'string' } },
    },
    required: [
      'id',
      // TODO: reintroduce as required when fully populated in API
      // 'tags',
      'names',
    ],
  },
};
