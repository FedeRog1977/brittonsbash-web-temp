import { Features, Img, JSONSchema } from '~/types';
import { EventResponse } from '../types/event-response.js';

const imgValidationSchema: JSONSchema<Img> = {
  type: 'object',
  properties: {
    url: { type: 'string' },
    alt: { type: 'string' },
    description: { type: 'string' },
  },
  required: ['url', 'alt'],
};

const featuresValidationSchema: JSONSchema<Features> = {
  type: 'object',
  properties: {
    countries: { type: 'array', items: { type: 'string' } },
    cities: { type: 'array', items: { type: 'string' } },
    airports: { type: 'array', items: { type: 'string' } },
    transportation: { type: 'array', items: { type: 'string' } },
    accommodation: { type: 'array', items: { type: 'string' } },
    districts: { type: 'array', items: { type: 'string' } },
    attractions: { type: 'array', items: { type: 'string' } },
    parks: { type: 'array', items: { type: 'string' } },
    food: { type: 'array', items: { type: 'string' } },
    drink: { type: 'array', items: { type: 'string' } },
    restaurants: { type: 'array', items: { type: 'string' } },
    bars: { type: 'array', items: { type: 'string' } },
    cafes: { type: 'array', items: { type: 'string' } },
    bakeries: { type: 'array', items: { type: 'string' } },
    chocolatiers: { type: 'array', items: { type: 'string' } },
    gelaterias: { type: 'array', items: { type: 'string' } },
    markets: { type: 'array', items: { type: 'string' } },
    supermarkets: { type: 'array', items: { type: 'string' } },
    departmentStores: { type: 'array', items: { type: 'string' } },
    clothingStores: { type: 'array', items: { type: 'string' } },
    interiorDesignStores: { type: 'array', items: { type: 'string' } },
    technologyStores: { type: 'array', items: { type: 'string' } },
    audioStores: { type: 'array', items: { type: 'string' } },
    kitchenStores: { type: 'array', items: { type: 'string' } },
    stationeryStores: { type: 'array', items: { type: 'string' } },
    bookStores: { type: 'array', items: { type: 'string' } },
    japaneseStores: { type: 'array', items: { type: 'string' } },
    bicycleStores: { type: 'array', items: { type: 'string' } },
    outdoorStores: { type: 'array', items: { type: 'string' } },
    tennisStores: { type: 'array', items: { type: 'string' } },
    uniqueElements: { type: 'array', items: { type: 'string' } },
    nostalgiaEffect: { type: 'array', items: { type: 'string' } },
  },
  required: [],
};

export const eventResponseValidationSchema: JSONSchema<EventResponse> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    tags: { type: 'array', items: { type: 'string' } },
    projectIds: { type: 'array', items: { type: 'string' } },
    prefix: { type: 'string' },
    names: { type: 'array', items: { type: 'string' } },
    startDate: { type: 'string' },
    endDate: { type: 'string' },
    description: { oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
    images: { type: 'array', items: imgValidationSchema },
    features: featuresValidationSchema,
  },
  required: [
    'id',
    // TODO: reintroduce as required when fully populated in API
    // 'tags',
    'names',
    'startDate',
    'description',
    'images',
  ],
};
