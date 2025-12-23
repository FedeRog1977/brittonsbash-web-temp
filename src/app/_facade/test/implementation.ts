import { Event } from '~/libs/types';
import { ProjectsEvent } from '../../_schema/types/projects-event.js';
import { ProjectsHills } from '../../_schema/types/projects-hills.js';
import { ProjectsStats } from '../../_schema/types/projects-stats.js';
import { ProjectsSummary } from '../../_schema/types/projects-summary.js';
import { Interface } from '../interface.js';
import { mockEventNames } from './data/mock-event-names.js';
import { mockEventYears } from './data/mock-event-years.js';
import { mockEvent } from './data/mock-event.js';
import { mockProjectsEvents } from './data/mock-projects-events.js';
import { mockProjectsHills } from './data/mock-projects-hills.js';
import { mockProjectsStats } from './data/mock-projects-stats.js';
import { mockProjectsSummary } from './data/mock-projects-summary.js';

export class Implementation implements Interface {
  public async getEventNames(): Promise<Array<Pick<Event, 'id' | 'prefix' | 'names'>>> {
    return Promise.resolve(mockEventNames);
  }

  public async getEventYears(): Promise<string[]> {
    return Promise.resolve(mockEventYears);
  }

  public async getEvent(): Promise<Extract<Event, { type: 'mapped' }>> {
    return Promise.resolve(mockEvent);
  }

  public async getProjectsEvents(): Promise<ProjectsEvent[]> {
    return Promise.resolve(mockProjectsEvents);
  }

  public async getProjectsHills(): Promise<ProjectsHills> {
    return Promise.resolve(mockProjectsHills);
  }

  public async getProjectsStats(): Promise<ProjectsStats> {
    return Promise.resolve(mockProjectsStats);
  }

  public async getProjectsSummary(): Promise<ProjectsSummary> {
    return Promise.resolve(mockProjectsSummary);
  }

  // TODO: add CMS, and this
  // public getResources(): Promise<AggregateResources> {
  //   return mockAggregateResources;
  // }
}
