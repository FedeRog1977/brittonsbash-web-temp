import { EventTag } from './event-tag.js';
import { Features } from './features.js';
import { GenericDataContent } from './generic-data-content.js';
import { Img } from './img.js';
import { MappedEventProject } from './mapped-event-project.js';
import { Project } from './project.js';

type EventBasics = {
  id: string;
  tags: EventTag[];
  projectId: string | string[];
  prefix?: string;
  // TODO: make `string | string[]` and amend in the API and page template
  names: string[];
  startDate: string;
  endDate?: string;
  description: string | string[];
  images: Img[];
};

type UnmappedEvent = EventBasics & {
  type: 'unmapped';
  features?: Features;
  sport?: Project | Project[];
};

type MappedEvent = EventBasics & {
  type: 'mapped';
  features?: GenericDataContent[];
  sport?: MappedEventProject;
};

export type Event = UnmappedEvent | MappedEvent;
