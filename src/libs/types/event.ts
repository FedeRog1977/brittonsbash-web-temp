import { EventTag } from './event-tag.js';
import { Features } from './features.js';
import { GenericDataContent } from './generic-data-content.js';
import { Img } from './img.js';
import { MappedEventProject } from './mapped-event-project.js';

type EventBasics = {
  id: string;
  tags: EventTag[];
  projectIds?: string[];
  prefix?: string;
  names: string[];
  startDate: string;
  endDate?: string;
  description: string | string[];
  images: Img[];
};

type UnmappedEvent = EventBasics & {
  type: 'unmapped';
  features?: Features;
};

type MappedEvent = EventBasics & {
  type: 'mapped';
  features?: GenericDataContent[];
  sport?: MappedEventProject;
};

export type Event = UnmappedEvent | MappedEvent;
