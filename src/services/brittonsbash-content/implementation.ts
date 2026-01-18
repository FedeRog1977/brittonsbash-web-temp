import {
  Event,
  Events,
  Features,
  Img,
  MappedProjects,
  Project,
  Sport,
  EventTag,
} from '~/libs/types';
import { Interface } from './interface.js';
import { mapEventFeaturesReadable } from './utils/map-event-features-readable.js';
import { mapEventFeatures } from './utils/map-event-features.js';
import { mapEventImages } from './utils/map-event-images.js';
import { mapEventProject } from './utils/map-event-project.js';
import { mapEventSports } from './utils/map-event-sports.js';
import { mapEvents } from './utils/map-events.js';
import { mapProjects } from './utils/map-projects.js';

export class Implementation implements Interface {
  private readonly baseUrl: string;

  private get eventsUrl(): string {
    return `${this.baseUrl}/events.data.json`;
  }

  private get eventTagsUrl(): string {
    return `${this.baseUrl}/events/tags.json`;
  }

  private get eventYearsUrl(): string {
    return `${this.baseUrl}/events/years.json`;
  }

  private get eventUrl(): string {
    return `${this.baseUrl}/events/:year/:event.json`;
  }

  private get projectsUrl(): string {
    return `${this.baseUrl}/projects/:year/:project.json`;
  }

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async getEventNames(
    year: string,
  ): Promise<Array<Pick<Event, 'id' | 'tags' | 'prefix' | 'names'>>> {
    const apiUrl = this.eventUrl.replace(':year', year).replace('/:event.json', '/names.json');

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Replace with AJV validation
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedResponse: Array<Pick<Event, 'id' | 'tags' | 'prefix' | 'names'>> =
      await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid event names data received');
    }
  }

  public async getEventTags(): Promise<EventTag[]> {
    const apiUrl = this.eventTagsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Replace with AJV validation
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedResponse: EventTag[] = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid event tags data received');
    }
  }

  public async getEventYears(): Promise<string[]> {
    const apiUrl = this.eventYearsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Replace with AJV validation
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedResponse: string[] = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid event names data received');
    }
  }

  public async getEvent(year: string, event: string): Promise<Extract<Event, { type: 'mapped' }>> {
    const apiUrl = this.eventUrl.replace(':year', year).replace(':event', event);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Replace with AJV validation
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedResponse: Omit<
      Extract<Event, { type: 'unmapped' }>,
      'sport' | 'type'
    > = await response.json();

    const mappedFeatures = parsedResponse.features
      ? mapEventFeaturesReadable(parsedResponse.features)
      : undefined;

    try {
      try {
        if (Array.isArray(parsedResponse.projectId)) {
          const sport: Project[] = [];

          for await (const id of parsedResponse.projectId) {
            const sportIteration = await this.getProject(
              parsedResponse.id.split('').slice(1, 5).join(''),
              id.toLowerCase(),
            );

            sport.push(sportIteration);
          }

          const mappedSport = mapEventProject(sport);

          const mappedParsedMappedMultipleSportResponse: Extract<Event, { type: 'mapped' }> = {
            ...parsedResponse,
            type: 'mapped',
            features: mappedFeatures,
            sport: mappedSport,
          };

          // TODO: remove this temporary workaround for the spacing issue
          if (mappedParsedMappedMultipleSportResponse.description === '') {
            return {
              ...mappedParsedMappedMultipleSportResponse,
              description: mappedParsedMappedMultipleSportResponse.description.replace(
                /[\s\S]*/,
                'TODO: write a valid description for this event. The string is bloody required in the FE, so if an empty string is returned from the service, it will be replaced by this to amend the horrific spacing issue.',
              ),
            };
          }

          return mappedParsedMappedMultipleSportResponse;
        }

        const sport = await this.getProject(
          parsedResponse.id.split('').slice(1, 5).join(''),
          parsedResponse.projectId.toLowerCase(),
        );

        const mappedSport = mapEventProject(sport);

        const mappedParsedMappedSingleSportResponse: Extract<Event, { type: 'mapped' }> = {
          ...parsedResponse,
          type: 'mapped',
          features: mappedFeatures,
          sport: mappedSport,
        };

        return mappedParsedMappedSingleSportResponse;
      } catch {
        const mappedParsedUnmappedNullSportResponse: Extract<Event, { type: 'mapped' }> = {
          ...parsedResponse,
          type: 'mapped',
          features: mappedFeatures,
        };

        return mappedParsedUnmappedNullSportResponse;
      }
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid event data received');
    }
  }

  public async getMappedEventFeatures(): Promise<Features> {
    const apiUrl = this.eventsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Replace with AJV validation
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedResponse: Events = await response.json();

    const mappedParsedResponse: Features = mapEventFeatures(parsedResponse);

    try {
      return mappedParsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid event data received');
    }
  }

  public async getMappedEventImages(): Promise<Img[]> {
    const apiUrl = this.eventsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Replace with AJV validation
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedResponse: Events = await response.json();

    const mappedParsedResponse: Img[] = mapEventImages(parsedResponse);

    try {
      return mappedParsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid event data received');
    }
  }

  public async getMappedEventSports(): Promise<Project[]> {
    // TODO: correctly amend this method

    const apiUrl = '';

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Replace with AJV validation
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedResponse: Sport = await response.json();

    const mappedParsedResponse: Project[] = mapEventSports(parsedResponse);

    try {
      return mappedParsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid sport data received');
    }
  }

  public async getMappedEvents(): Promise<Event[]> {
    const apiUrl = this.eventsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Replace with AJV validation
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedResponse: Events = await response.json();

    const mappedParsedResponse: Event[] = mapEvents(parsedResponse);

    try {
      return mappedParsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid event data received');
    }
  }

  public async getMappedProjects(): Promise<MappedProjects> {
    // TODO: correctly amend this method
    const apiUrl = '';

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Replace with AJV validation
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedResponse: Sport = await response.json();

    const mappedParsedResponse: MappedProjects = mapProjects(parsedResponse);

    try {
      return mappedParsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid sport data received');
    }
  }

  public async getProject(year: string, projectId: string): Promise<Project> {
    const apiUrl = this.projectsUrl.replace(':year', year).replace(':project', projectId);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Replace with AJV validation
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedResponse: Project = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid sport data received');
    }
  }
}
