import { facade } from '~/facade';
import { EventNamesByYear } from '~/schema/types';
import { EventYear } from '~/types';

export const getEventNamesByYear = async (years: EventYear[]): Promise<EventNamesByYear[]> => {
  'use server';

  const events: EventNamesByYear[] = [];

  for await (const year of years) {
    const names = await facade.getEventNames(year);

    events.push({ year, events: names });
  }

  return events;
};
