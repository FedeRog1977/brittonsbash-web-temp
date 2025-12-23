import { JSONSchema } from '~/libs/types';
import { AcademiaData } from '../types/academia-data.js';

export const academiaDataValidationSchema: JSONSchema<AcademiaData> = {
  type: 'object',
  title: 'Academia Page Data',
  description: 'Page data for Academia form.',
  properties: {},
};
