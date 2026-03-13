import { Event } from '~/types';

export type EventReturn = Extract<Event, { type: 'mapped' }>;
