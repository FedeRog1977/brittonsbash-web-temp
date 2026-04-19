import { EventTag } from './event-tag.js';
import { Features } from './features.js';
import { GenericDataContent } from './generic-data-content.js';
import { Img } from './img.js';
import { MappedEventProject } from './mapped-event-project.js';

type EventBase = {
  id: string;
  projectIds?: string[];
  tags: EventTag[];
  prefix?: string;
  names: string[];
  startDate: string;
  endDate?: string;
  description: string | string[];
  images: Img[];
};

type UnmappedEvent = EventBase & {
  type: 'unmapped';
  features?: Features;
};

type MappedEvent = EventBase & {
  type: 'mapped';
  features?: GenericDataContent[];
  sport?: MappedEventProject;
};

export type Event = UnmappedEvent | MappedEvent;
