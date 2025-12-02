// import { AggregateResources } from '@apps/home-common/types';
import { Event } from '~/libs/types';
import { BrittonsBashContentClient } from '~/services/brittonsbash-content';
import { HomeFacade } from '../interface.js';

type Config = {
  brittonsBashContentService: BrittonsBashContentClient;
};

export class ClientImplementation implements HomeFacade {
  private readonly brittonsBashContentService: BrittonsBashContentClient;

  public constructor(config: Config) {
    this.brittonsBashContentService = config.brittonsBashContentService;
  }

  public async getEventNames(year: string): Promise<Array<Pick<Event, 'id' | 'prefix' | 'names'>>> {
    return this.brittonsBashContentService.getEventNames(year);
  }

  public async getEvent(year: string, event: string): Promise<Extract<Event, { type: 'mapped' }>> {
    return this.brittonsBashContentService.getEvent(year, event);
  }

  // TODO: add CMS, and this
  // public async getResources(): Promise<AggregateResources> {
  //   return this.brittonsBashContentService.getCmsResources(...)
  // }
}
