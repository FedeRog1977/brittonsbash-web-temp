import { GenericDataContent, Img, JSONSchema, MappedEventProject } from '~/types';
import { EventReturn } from '../types/event-return.js';

const imgValidationSchema: JSONSchema<Img> = {
  type: 'object',
  properties: {
    url: { type: 'string' },
    alt: { type: 'string' },
    description: { type: 'string' },
  },
  required: ['url', 'alt'],
};

const genericDataContentValidationSchema: JSONSchema<GenericDataContent> = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    content: {
      oneOf: [
        // @ts-expect-error: support `string | string[] | object[]`
        { type: 'string' },
        {
          type: 'array',
          // @ts-expect-error: support `string | string[] | object[]`
          items: { oneOf: [{ type: 'string' }, { type: 'object', properties: {} }] },
        },
      ],
    },
    description: { type: 'string' },
    href: { type: 'string' },
    tags: { type: 'array', items: { type: 'string' } },
  },
  required: ['title'],
};

const mappedEventProjectValidationSchema: JSONSchema<MappedEventProject> = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    distance: { type: 'string' },
    elevation: { type: 'string' },
    time: { type: 'string' },
    companionship: { type: 'string' },
    features: {
      type: 'array',
      items: genericDataContentValidationSchema,
    },
  },
  required: ['name', 'distance', 'elevation', 'time', 'companionship', 'features'],
};

export const eventReturnValidationSchema: JSONSchema<EventReturn> = {
  type: 'object',
  properties: {
    type: { type: 'string' },
    id: { type: 'string' },
    tags: { type: 'array', items: { type: 'string' } },
    projectIds: { type: 'array', items: { type: 'string' } },
    prefix: { type: 'string' },
    names: { type: 'array', items: { type: 'string' } },
    startDate: { type: 'string' },
    endDate: { type: 'string' },
    description: { oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
    images: {
      type: 'array',
      items: imgValidationSchema,
    },
    features: {
      type: 'array',
      items: genericDataContentValidationSchema,
    },
    sport: mappedEventProjectValidationSchema,
  },
  required: ['type', 'id', 'tags', 'names', 'startDate', 'description', 'images'],
};
