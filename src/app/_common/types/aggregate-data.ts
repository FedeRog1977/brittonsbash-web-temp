import { AcademiaData } from './academia-data.js';
import { HomeData } from './home-data.js';
import { InstantGramData } from './instant-gram-data.js';

export type AggregateData = {
  home: HomeData;
  academia: AcademiaData;
  instantGram: InstantGramData;
};
