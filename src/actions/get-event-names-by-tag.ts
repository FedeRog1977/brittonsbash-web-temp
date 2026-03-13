import { facade } from '~/facade';
import { EventNamesByTag } from '~/schema/types';
import { Event, EventTag, EventYear } from '~/types';
import { removeDuplicates } from '~/utils';

export const getEventNamesByTag = async (
  years: EventYear[],
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
      // TODO: remove this temporary workaround for for missing tags
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (eventNameFlat.tags !== undefined) {
        if (eventNameFlat.tags.includes(tag)) {
          eventNamesByTagNames.push(eventNameFlat);
        }
      }
    }

    // TODO: remove this cheat `removeDuplicates()`
    events.push({ tag, events: removeDuplicates(eventNamesByTagNames) });
  }

  return events;
};
