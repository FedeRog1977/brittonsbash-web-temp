import { JSONSchema } from '~/libs/types';
import { ProjectsHillsData } from '../types/projects-hills-data.js';

export const projectsHillsDataValidationSchema: JSONSchema<ProjectsHillsData> = {
  type: 'object',
  title: 'Projects Pages Data - Hills',
  description: 'Page data for Projects Hills form.',
  properties: {
    type: { type: 'string' },
  },
  required: ['type'],
};
