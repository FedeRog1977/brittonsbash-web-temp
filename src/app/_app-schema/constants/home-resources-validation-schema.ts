import { JSONSchema } from '~/libs/types';
import { HomeResources } from '../types/home-resources.js';

export const homeResourcesValidationSchema: JSONSchema<HomeResources> = {
  type: 'object',
  title: 'Home Page Resources',
  description: 'Static resources for Home page.',
  properties: {
    title: { type: 'string' },
    heading: { type: 'string' },
    subheading: { type: 'string' },
  },
  required: ['title', 'heading', 'subheading'],
};
