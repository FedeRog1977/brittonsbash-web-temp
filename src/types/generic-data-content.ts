import { Img } from './img.js';

export type GenericDataContent = {
  title: string;
  content?: string | string[] | object[];
  description?: string;
  href?: string;
  tags?: string[];
  imgs?: Img[];
};
