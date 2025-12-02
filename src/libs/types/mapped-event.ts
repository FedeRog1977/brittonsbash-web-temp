import { GenericDataContent } from './generic-data-content.js';
import { Event } from './event.js';

export type MappedEvent = {
  prefix?: Event['prefix'];
  names: string[];
  startDate: Event['startDate'];
  endDate?: Event['endDate'];
  features?: (Omit<GenericDataContent, 'content'> & { content: string[] })[];
  description: Event['description'];
  images: Event['images'];
  distance?: string;
  elevation?: string;
  times?: string;
  islands?: string;
  munros?: string;
  munroTops?: string;
  corbetts?: string;
  corbettTops?: string;
  grahams?: string;
  subTwos?: string;
  donalds?: string;
  showSport: boolean;
};
