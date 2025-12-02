import { Event } from '../../_common/types/event.js';
import { facade } from '../constants/facade.js';

export const getEventNames = async (years: string[]) => {
  let events: Event[] = [];

  for (const year of years) {
    const names = await facade.getEventNames(year);

    events.push({ year, events: names });
  }

  return events;
};
