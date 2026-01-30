import { JSONSchema } from '~/libs/types';
import { ProjectNamesResponse } from '../types/project-names-response.js';

export const projectNamesResponseValidationSchema: JSONSchema<ProjectNamesResponse> = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
    },
    required: ['id', 'name'],
  },
};
