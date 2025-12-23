import { JSONSchema } from '~/libs/types';
import { AcademiaResources } from '../types/academia-resources.js';

export const academiaResourcesValidationSchema: JSONSchema<AcademiaResources> = {
  type: 'object',
  title: 'Academia Page Resources',
  description: 'Static resources for Academia page.',
  properties: {
    title: { type: 'string' },
    heading: { type: 'string' },
    subheading: { type: 'string' },
  },
  required: ['title', 'heading', 'subheading'],
};
