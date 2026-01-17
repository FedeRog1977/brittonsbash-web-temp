import { facade } from '../../_facade/index.js';
import { EventNamesByYear } from '../../_schema/types/event-names-by-year.js';

export const getEventNamesByYear = async (years: string[]): Promise<EventNamesByYear[]> => {
  'use server';

  const events: EventNamesByYear[] = [];

  for await (const year of years) {
    const names = await facade.getEventNames(year);

    events.push({ year, events: names });
  }

  return events;
};
