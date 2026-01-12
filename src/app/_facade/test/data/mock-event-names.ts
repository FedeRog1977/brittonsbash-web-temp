import { Event } from '~/libs/types';

export const mockEventNames: Array<Pick<Event, 'id' | 'tags' | 'prefix' | 'names'>> = [
  {
    id: 'E2025003',
    tags: ['general'],
    names: ['PMB GigaWasted'],
  },
  {
    id: 'E2025002',
    tags: ['projects'],
    names: ['Live Free Or Die Hard'],
  },
  {
    id: 'E2025001',
    tags: ['general'],
    names: ['Tease'],
  },
];
