import { JSONSchema } from '~/libs/types';
import { ProjectsEventsData } from '../types/projects-events-data.js';

export const projectsEventsDataValidationSchema: JSONSchema<ProjectsEventsData> = {
  type: 'object',
  title: 'Projects Pages Data - Events',
  description: 'Page data for Projects pages.',
  properties: {
    year: { type: 'string' },
  },
  required: ['year'],
};
