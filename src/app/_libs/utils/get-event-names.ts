import { facade } from '../../_facade/index.js';
import { Event } from '../../_schema/types/event.js';

export const getEventNames = async (years: string[]): Promise<Event[]> => {
  'use server';

  const events: Event[] = [];

  for await (const year of years) {
    const names = await facade.getEventNames(year);

    events.push({ year, events: names });
  }

  return events;
};
