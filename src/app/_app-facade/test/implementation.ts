import { Event } from '~/libs/types';
import { Interface } from '../interface.js';
import { mockEventYears } from './data/mock-event-years.js';
import { mockEvent } from './data/mock-event.js';
import { mockEventNames } from './data/mock-event-names.js';
import { ParsedProject } from '../../_app-schema/types/parsed-project.js';
import { ProjectsSummary } from '../../_app-schema/types/projects-summary.js';
import { mockProjectsSummary } from './data/mock-projects-summary.js';
import { mockProjectsEvents } from './data/mock-projects-events.js';
import { ProjectsStats } from '../../_app-schema/types/projects-stats.js';
import { mockProjectsHills } from './data/mock-projects-hills.js';
import { mockProjectsStats } from './data/mock-projects-stats.js';
import { ProjectsHills } from '../../_app-schema/types/projects-hills.js';

export class Implementation implements Interface {
  public async getEventNames(): Promise<Array<Pick<Event, 'id' | 'prefix' | 'names'>>> {
    return mockEventNames;
  }

  public async getEventYears(): Promise<string[]> {
    return mockEventYears;
  }

  public async getEvent(): Promise<Extract<Event, { type: 'mapped' }>> {
    return mockEvent;
  }

  public async getProjectsEvents(): Promise<ParsedProject[]> {
    return mockProjectsEvents;
  }

  public async getProjectsHills(): Promise<ProjectsHills> {
    return mockProjectsHills;
  }

  public async getProjectsStats(): Promise<ProjectsStats> {
    return mockProjectsStats;
  }

  public async getProjectsSummary(): Promise<ProjectsSummary> {
    return mockProjectsSummary;
  }

  // TODO: add CMS, and this
  // public getResources(): Promise<AggregateResources> {
  //   return mockAggregateResources;
  // }
}
