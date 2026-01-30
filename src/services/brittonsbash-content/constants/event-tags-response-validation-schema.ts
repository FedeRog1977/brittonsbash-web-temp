import { JSONSchema } from '~/libs/types';
import { EventTagsResponse } from '../types/event-tags-response.js';

export const eventTagsResponseValidationSchema: JSONSchema<EventTagsResponse> = {
  type: 'array',
  items: {
    type: 'string',
  },
};
