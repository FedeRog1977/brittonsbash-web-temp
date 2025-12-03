import {
  Culinary,
  Event,
  Events,
  Features,
  Hills,
  Img,
  MappedProjects,
  Project,
  UrlGroup,
  Regions,
  Sport,
} from '~/libs/types';
import { Interface } from './interface.js';
import { mapEventFeaturesReadable } from './utils/map-event-features-readable.js';
import { mapEventFeatures } from './utils/map-event-features.js';
import { mapEventImages } from './utils/map-event-images.js';
import { mapEventProject } from './utils/map-event-project.js';
import { mapEventSports } from './utils/map-event-sports.js';
import { mapEvents } from './utils/map-events.js';
import { mapProjects } from './utils/map-projects.js';

export class Client implements Interface {
  private readonly baseUrl: string;

  private get culinaryUrl(): string {
    return `${this.baseUrl}/culinary.data.json`;
  }

  private get eventsUrl(): string {
    return `${this.baseUrl}/events.data.json`;
  }

  private get eventUrl(): string {
    return `${this.baseUrl}/events/:year/:event.json`;
  }

  private get hillsUrl(): string {
    return `${this.baseUrl}/hills.data.json`;
  }

  private get linksUrl(): string {
    return `${this.baseUrl}/links.data.json`;
  }

  private get regionsUrl(): string {
    return `${this.baseUrl}/regions.data.json`;
  }

  private get sportsUrl(): string {
    return `${this.baseUrl}/sport.data.json`;
  }

  private get sportUrl(): string {
    return `${this.baseUrl}/sport/:group/:year/:sport.json`;
  }

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async getCulinary(): Promise<Culinary> {
    const apiUrl = this.culinaryUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Culinary = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid events data received');
    }
  }

  // TODO: discontinue in favour of getEvent() when ready
  public async getEvents(): Promise<Events> {
    const apiUrl = this.eventsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Events = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid events data received');
    }
  }

  public async getEventNames(year: string): Promise<Array<Pick<Event, 'id' | 'prefix' | 'names'>>> {
    const apiUrl = this.eventUrl.replace(':year', year).replace('/:event.json', '/names.json');

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Array<Pick<Event, 'id' | 'prefix' | 'names'>> = await response.json();

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

    // TODO: make this type fix
    // const parsedResponse: Omit<Extract<Event, { type: 'unmapped' }>, 'sport' | 'type'> = await response.json();
    const parsedResponse: any = await response.json();

    const mappedFeatures = parsedResponse.features
      ? mapEventFeaturesReadable(parsedResponse.features as Features)
      : undefined;

    try {
      try {
        if (Array.isArray(parsedResponse.projectId)) {
          const sport: Project[] = [];

          for (const id of parsedResponse.projectId) {
            const sportIteration = (await this.getSport(
              'projects',
              parsedResponse.id.split('').slice(1, 5).join(''),
              id.toLowerCase(),
            )) as Project;

            sport.push(sportIteration);
            // console.log('SPORT_INSIDE::', sport);
          }

          // console.log('SPORT_OUTSIDE::', sport);

          const mappedSport = mapEventProject(sport);
          // console.log('MAPPED_SPORT::', mappedSport);

          const mappedParsedMappedMultipleSportResponse: Extract<Event, { type: 'mapped' }> = {
            ...parsedResponse,
            // TODO: make features conditional
            features: mappedFeatures,
            // TODO: make keys of sports conditional based on whether or not the response contains them
            sport: mappedSport,
          };

          return mappedParsedMappedMultipleSportResponse;
        }

        const sport = (await this.getSport(
          'projects',
          parsedResponse.id.split('').slice(1, 5).join(''),
          parsedResponse.projectId.toLowerCase(),
        )) as Project;

        const mappedSport = mapEventProject(sport);

        const mappedParsedMappedSingleSportResponse: Extract<Event, { type: 'mapped' }> = {
          ...parsedResponse,
          // TODO: make features conditional
          features: mappedFeatures,
          // TODO: make keys of sports conditional based on whether or not the response contains them
          sport: mappedSport,
        };

        return mappedParsedMappedSingleSportResponse;
      } catch {
        const mappedParsedUnmappedNullSportResponse: Extract<Event, { type: 'mapped' }> = {
          ...parsedResponse,
          // TODO: make features conditional
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

  public async getHills(): Promise<Hills> {
    const apiUrl = this.hillsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Hills = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid hills data received');
    }
  }

  public async getLinks(): Promise<UrlGroup[]> {
    const apiUrl = this.linksUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: UrlGroup[] = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid links data received');
    }
  }

  public async getMappedEventFeatures(): Promise<Features> {
    const apiUrl = this.eventsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

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
    const apiUrl = this.sportsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

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
    const apiUrl = this.sportsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

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

  public async getRegions(): Promise<Regions> {
    const apiUrl = this.regionsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const parsedResponse: Regions = await response.json();

    try {
      return parsedResponse;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);

      throw new Error('Invalid regions data received');
    }
  }

  public async getSport(group: 'projects', year: string, sport: string): Promise<Project> {
    const apiUrl = this.sportUrl
      .replace(':group', group)
      .replace(':year', year)
      .replace(':sport', sport);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

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
