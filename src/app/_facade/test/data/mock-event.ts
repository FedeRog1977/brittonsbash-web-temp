import { Event } from '~/libs/types';

export const mockEvent: Extract<Event, { type: 'mapped' }> = {
  type: 'mapped',
  id: 'E2025003',
  projectId: ['P2025001'],
  prefix: 'Lorem Ipsum',
  names: ['Dolor', 'Sit'],
  startDate: 'Lorem of Ipsum',
  endDate: 'Dolor of Sit',
  features: [
    {
      title: 'Lorem',
      content: 'Ipsum dolor sit',
    },
  ],
  description: 'Lorem ipsum dolor sit',
  images: [
    {
      url: '/lorem',
      alt: 'ipsum',
    },
  ],
  sport: undefined,
};
