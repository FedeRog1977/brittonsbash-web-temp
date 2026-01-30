import { JSONSchema } from '~/libs/types';
import { EventYearsResponse } from '../types/event-years-response.js';

export const eventYearsResponseValidationSchema: JSONSchema<EventYearsResponse> = {
  type: 'array',
  items: {
    type: 'string',
  },
};
