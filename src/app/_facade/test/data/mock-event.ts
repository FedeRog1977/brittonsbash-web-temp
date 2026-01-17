import { Event } from '~/libs/types';

export const mockEvent: Extract<Event, { type: 'mapped' }> = {
  type: 'mapped',
  tags: ['general', 'projects'],
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
  sport: {
    name: 'Lorem',
    distance: '20 mi',
    elevation: '2,300 ft',
    time: '1:23:59',
    companionship: '1',
    features: [{ title: 'Munros', content: 'Lorem, Ipsum, Dolor, Sit' }],
  },
  description: 'Lorem ipsum dolor sit',
  images: [
    {
      url: 'https://lewisbritton.com/images/general/placeholder.webp',
      alt: 'ipsum',
    },
    {
      url: 'https://lewisbritton.com/images/general/placeholder.webp',
      alt: 'ipsum',
    },
    {
      url: 'https://lewisbritton.com/images/general/placeholder.webp',
      alt: 'ipsum',
    },
  ],
};
