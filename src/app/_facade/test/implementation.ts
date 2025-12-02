import { Event } from '~/libs/types';
import { HomeFacade } from '../interface.js';

// TODO: mock this class
export class TestImplementation implements HomeFacade {
  public async getEventNames(): Promise<Array<Pick<Event, 'id' | 'prefix' | 'names'>>> {
    return [];
  }

  public async getEvent(): Promise<Extract<Event, { type: 'mapped' }>> {
    const mockEvent = {
      id: '',
      projectId: '',
      prefix: '',
      names: [''],
      startDate: '',
      endDate: '',
      description: '',
      images: [
        {
          url: '',
          alt: '',
          description: '',
        },
      ],
    };

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return Promise.resolve(mockEvent as Extract<Event, { type: 'mapped' }>);
  }

  // TODO: add CMS, and this
  // public getResources(): Promise<AggregateResources> {
  //   return mockAggregateResources;
  // }
}
