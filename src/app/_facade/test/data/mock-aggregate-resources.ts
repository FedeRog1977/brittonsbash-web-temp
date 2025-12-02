import { AggregateResources } from '../../../_common/types/aggregate-resources.js';
import { mockAcademiaResources } from './mock-academia-resources.js';
import { mockHomeResources } from './mock-home-resources.js';

export const mockAggregateResources: AggregateResources = {
  home: mockHomeResources,
  academia: mockAcademiaResources,
  instantGram: {},
};
