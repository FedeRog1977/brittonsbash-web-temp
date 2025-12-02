import { Img } from './img.js';
import { Features } from './features.js';
import { Project } from './project.js';
import { MappedEventProject } from './mapped-event-project.js';
import { GenericDataContent } from './generic-data-content.js';

type EventBasics = {
  id: string;
  projectId: string | string[];
  prefix?: string;
  names: string[];
  startDate: string;
  endDate?: string;
  description: string;
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
