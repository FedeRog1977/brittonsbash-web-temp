import { Event, EventTag } from '~/libs/types';
import { removeDuplicates } from '~/libs/utils';
import { facade } from '../../_facade/index.js';
import { EventNamesByTag } from '../../_schema/types/event-names-by-tag.js';

export const getEventNamesByTag = async (
  years: string[],
  tags: EventTag[],
): Promise<EventNamesByTag[]> => {
  'use server';

  const eventNamesFlat: Array<Pick<Event, 'id' | 'prefix' | 'names' | 'tags'>> = [];

  for await (const year of years) {
    const eventNames = await facade.getEventNames(year);

    for (const eventName of eventNames) {
      eventNamesFlat.push(eventName);
    }
  }

  const events: EventNamesByTag[] = [];

  for (const tag of tags) {
    const eventNamesByTagNames = [];

    for (const eventNameFlat of eventNamesFlat) {
      if (eventNameFlat.tags.includes(tag)) {
        eventNamesByTagNames.push(eventNameFlat);
      }
    }

    // TODO: remove this cheat `removeDuplicates()`
    events.push({ tag, events: removeDuplicates(eventNamesByTagNames) });
  }

  return events;
};
