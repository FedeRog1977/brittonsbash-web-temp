import { JSONSchema } from '~/libs/types';
import { ProjectsResources } from '../types/projects-resources.js';

export const projectsResourcesValidationSchema: JSONSchema<ProjectsResources> = {
  type: 'object',
  title: 'Projects Pages Resources',
  description: 'Static resources for Projects pages.',
  properties: {},
  required: [],
};
