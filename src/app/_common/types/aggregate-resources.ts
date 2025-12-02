import { AcademiaResources } from './academia-resources.js';
import { HomeResources } from './home-resources.js';
import { InstantGramResources } from './instant-gram-resources.js';

export type AggregateResources = {
  home: HomeResources;
  academia: AcademiaResources;
  instantGram: InstantGramResources;
};
