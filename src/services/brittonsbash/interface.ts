import { MappedProjects, EventYear, EventId, ProjectId } from '~/types';
import { EventNamesResponse } from './types/event-names-response.js';
import { EventReturn } from './types/event-return.js';
import { EventTagsResponse } from './types/event-tags-response.js';
import { EventYearsResponse } from './types/event-years-response.js';
import { ProjectNamesResponse } from './types/project-names-response.js';
import { ProjectResponse } from './types/project-response.js';

export interface Interface {
  getAllEventFeatures: () => Promise<void>;
  getAllEventImages: () => Promise<void>;
  getAllProjects: () => Promise<MappedProjects>;
  getEventNames: (year: EventYear) => Promise<EventNamesResponse>;
  getEventTags: () => Promise<EventTagsResponse>;
  getEventYears: () => Promise<EventYearsResponse>;
  getEvent: (year: EventYear, eventId: EventId) => Promise<EventReturn>;
  getProjectNames: (year: EventYear) => Promise<ProjectNamesResponse>;
  getProject: (year: EventYear, projectId: ProjectId) => Promise<ProjectResponse>;
}
