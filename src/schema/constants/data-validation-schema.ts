import { JSONSchema } from '~/types';
import { Data } from '../types/data.js';
import { instantGramDataValidationSchema } from './instant-gram-data-validation-schema.js';
import { projectsEventsDataValidationSchema } from './projects-events-data-validation-schema.js';
import { projectsHillsDataValidationSchema } from './projects-hills-data-validation-schema.js';

export const dataValidationSchema: JSONSchema<Data> = {
  type: 'object',
  title: 'Aggregate Page Data',
  description: 'Page data for all forms.',
  properties: {
    instantGram: instantGramDataValidationSchema,
    projectsEvents: projectsEventsDataValidationSchema,
    projectsHills: projectsHillsDataValidationSchema,
  },
  required: [],
};
