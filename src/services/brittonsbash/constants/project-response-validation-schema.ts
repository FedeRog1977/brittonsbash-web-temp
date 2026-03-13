import { JSONSchema } from '~/types';
import { ProjectResponse } from '../types/project-response.js';

export const projectResponseValidationSchema: JSONSchema<ProjectResponse> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    distance: { type: 'number' },
    elevation: { type: 'number' },
    time: { type: 'string' },
    companionship: { type: 'number' },
    islands: { type: 'array', items: { type: 'string' } },
    munros: { type: 'array', items: { type: 'string' } },
    munroTops: { type: 'array', items: { type: 'string' } },
    corbetts: { type: 'array', items: { type: 'string' } },
    corbettTops: { type: 'array', items: { type: 'string' } },
    grahams: { type: 'array', items: { type: 'string' } },
    donalds: { type: 'array', items: { type: 'string' } },
    subTwos: { type: 'array', items: { type: 'string' } },
  },
  required: ['id', 'name', 'distance', 'elevation', 'time', 'companionship'],
};
