import {
  Event,
  Events,
  Features,
  Img,
  MappedProjects,
  Project,
  EventTag,
  Projects,
  EventYear,
} from '~/libs/types';
import { Interface } from './interface.js';
import { mapEventFeaturesReadable } from './utils/map-event-features-readable.js';
import { mapEventFeatures } from './utils/map-event-features.js';
import { mapEventImages } from './utils/map-event-images.js';
import { mapEventProject } from './utils/map-event-project.js';
import { mapProjects } from './utils/map-projects.js';

export class Implementation implements Interface {
  private readonly baseUrl: string;

  private get eventTagsUrl(): string {
    return `${this.baseUrl}/events/tags.json`;
  }

  private get eventYearsUrl(): string {
    return `${this.baseUrl}/events/years.json`;
  }

  private get eventsUrl(): string {
    return `${this.baseUrl}/events/:year/:eventId.json`;
  }

  private get projectsUrl(): string {
    return `${this.baseUrl}/projects/:year/:projectId.json`;
  }

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async getAllProjects(): Promise<MappedProjects> {
    const years = await this.getEventYears();
    const parsedProjects: Projects = {
      2020: [],
      2021: [],
      2022: [],
      2023: [],
      2024: [],
      2025: [],
      2026: [],
    };

    for await (const year of years) {
      const projectNames = await this.getProjectNames(year);

      for await (const projectName of projectNames) {
        const project = await this.getProject(year, projectName.id.toLowerCase());

        parsedProjects[year].push(project);
      }
    }

    const mappedParsedProjects: MappedProjects = mapProjects(parsedProjects);

    try {
      return mappedParsedProjects;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid sport data received');
    }
  }

  public async getEventNames(
    year: string,
  ): Promise<Array<Pick<Event, 'id' | 'tags' | 'prefix' | 'names'>>> {
    const apiUrl = this.eventsUrl.replace(':year', year).replace(':eventId.json', 'names.json');

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

  public async getEventYears(): Promise<EventYear[]> {
    const apiUrl = this.eventYearsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Replace with AJV validation
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedResponse: EventYear[] = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid event names data received');
    }
  }

  public async getEvent(
    year: string,
    eventId: string,
  ): Promise<Extract<Event, { type: 'mapped' }>> {
    const apiUrl = this.eventsUrl.replace(':year', year).replace(':eventId', eventId);

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

          // TODO: remove this temporary workaround for the spacing issue (1/3)
          if (mappedParsedMappedMultipleSportResponse.description === '') {
            return {
              ...mappedParsedMappedMultipleSportResponse,
              description: mappedParsedMappedMultipleSportResponse.description.replace(
                /[\s\S]*/,
                'TODO: write a valid description for this event. The string is bloody required in the FE, so if an empty string is returned from the service, it will be replaced by this to amend the horrific spacing issue.',
              ),
            };
          }

          // TODO: remove this temporary workaround for for missing tags (1/3)
          let tagsTemp: EventTag[] = [];
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          if (mappedParsedMappedMultipleSportResponse.tags === undefined) {
            tagsTemp = [];
          } else {
            tagsTemp = mappedParsedMappedMultipleSportResponse.tags;
          }

          return { ...mappedParsedMappedMultipleSportResponse, tags: tagsTemp };
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

        // TODO: remove this temporary workaround for the spacing issue (2/3)
        if (mappedParsedMappedSingleSportResponse.description === '') {
          return {
            ...mappedParsedMappedSingleSportResponse,
            description: mappedParsedMappedSingleSportResponse.description.replace(
              /[\s\S]*/,
              'TODO: write a valid description for this event. The string is bloody required in the FE, so if an empty string is returned from the service, it will be replaced by this to amend the horrific spacing issue.',
            ),
          };
        }

        // TODO: remove this temporary workaround for for missing tags (2/3)
        let tagsTemp: EventTag[] = [];
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (mappedParsedMappedSingleSportResponse.tags === undefined) {
          tagsTemp = [];
        } else {
          tagsTemp = mappedParsedMappedSingleSportResponse.tags;
        }

        return { ...mappedParsedMappedSingleSportResponse, tags: tagsTemp };
      } catch {
        const mappedParsedUnmappedNullSportResponse: Extract<Event, { type: 'mapped' }> = {
          ...parsedResponse,
          type: 'mapped',
          features: mappedFeatures,
        };

        // TODO: remove this temporary workaround for the spacing issue (3/3)
        if (mappedParsedUnmappedNullSportResponse.description === '') {
          return {
            ...mappedParsedUnmappedNullSportResponse,
            description: mappedParsedUnmappedNullSportResponse.description.replace(
              /[\s\S]*/,
              'TODO: write a valid description for this event. The string is bloody required in the FE, so if an empty string is returned from the service, it will be replaced by this to amend the horrific spacing issue.',
            ),
          };
        }

        // TODO: remove this temporary workaround for for missing tags (3/3)
        let tagsTemp: EventTag[] = [];
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (mappedParsedUnmappedNullSportResponse.tags === undefined) {
          tagsTemp = [];
        } else {
          tagsTemp = mappedParsedUnmappedNullSportResponse.tags;
        }

        return { ...mappedParsedUnmappedNullSportResponse, tags: tagsTemp };
      }
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid event data received');
    }
  }

  public async getMappedEventFeatures(): Promise<Features> {
    // TODO: correctly implement this method

    const apiUrl = '';

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
    // TODO: correctly implement this method

    const apiUrl = '';

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

  public async getProjectNames(year: string): Promise<Array<Pick<Project, 'id' | 'name'>>> {
    const apiUrl = this.projectsUrl.replace(':year', year).replace(':projectId.json', 'names.json');

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Replace with AJV validation
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsedResponse: Array<Pick<Project, 'id' | 'name'>> = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid event names data received');
    }
  }

  public async getProject(year: string, projectId: string): Promise<Project> {
    const apiUrl = this.projectsUrl.replace(':year', year).replace(':projectId', projectId);

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
