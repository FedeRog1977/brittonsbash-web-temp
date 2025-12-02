import { Event, Events } from '~/libs/types';

export const mapEvents = (events: Events): Event[] =>
  events[2025]
    .concat(events[2024])
    .concat(events[2023])
    .concat(events[2022])
    .concat(events[2021])
    .concat(events[2020]);
