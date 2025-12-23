import { JSONSchema } from '~/libs/types';
import { ProjectsEventsData } from '../types/projects-events-data.js';

export const projectsEventsDataValidationSchema: JSONSchema<ProjectsEventsData> = {
  type: 'object',
  title: 'Projects Pages Data - Events',
  description: 'Page data for Projects Events form.',
  properties: {
    year: { type: 'string' },
  },
  required: ['year'],
};
