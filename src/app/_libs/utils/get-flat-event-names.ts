import { Event } from '~/libs/types';
import { facade } from '../../_facade/index.js';

export const getFlatEventNames = async (
  years: string[],
): Promise<Array<Pick<Event, 'id' | 'tags' | 'prefix' | 'names'>>> => {
  'use server';

  const events: Array<Pick<Event, 'id' | 'tags' | 'prefix' | 'names'>> = [];

  for await (const year of years) {
    const names = await facade.getEventNames(year);

    for (const name of names) {
      events.push(name);
    }
  }

  return events;
};
