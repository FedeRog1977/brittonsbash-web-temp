import { JSONSchema } from '~/libs/types';
import { HomeData } from '../types/home-data.js';

export const homeDataValidationSchema: JSONSchema<HomeData> = {
  type: 'object',
  title: 'Home Page Data',
  description: 'Page data for Home form.',
  properties: {},
};
