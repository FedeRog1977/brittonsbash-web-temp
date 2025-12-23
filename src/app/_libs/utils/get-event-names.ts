import { Event } from '../../_app-schema/types/event.js';
import { facade } from '../constants/facade.js';

export const getEventNames = async (years: string[]) => {
  'use server';

  let events: Event[] = [];

  for (const year of years) {
    const names = await facade.getEventNames(year);

    events.push({ year, events: names });
  }

  return events;
};
