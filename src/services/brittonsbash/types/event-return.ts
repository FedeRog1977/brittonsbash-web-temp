import { Event } from '~/libs/types';

export type EventReturn = Extract<Event, { type: 'mapped' }>;
