/* eslint-disable @typescript-eslint/prefer-reduce-type-parameter, @typescript-eslint/consistent-type-assertions, no-console */
import fetch from 'node-fetch';
import { Validator } from '~/services/validator-ajv';
import {
  MappedProjects,
  Projects,
  Project,
  EventYear,
  Features,
  GenericDataContent,
  MappedEventProject,
} from '~/types';
import { removeDuplicates, toMiles, toFeet, toSum } from '~/utils';
import { eventNamesResponseValidationSchema } from './constants/event-names-response-validation-schema.js';
import { eventResponseValidationSchema } from './constants/event-response-validation-schema.js';
import { eventReturnValidationSchema } from './constants/event-return-validation-schema.js';
import { eventTagsResponseValidationSchema } from './constants/event-tags-response-validation-schema.js';
import { eventYearsResponseValidationSchema } from './constants/event-years-response-validation-schema.js';
import { projectNamesResponseValidationSchema } from './constants/project-names-response-validation-schema.js';
import { projectResponseValidationSchema } from './constants/project-response-validation-schema.js';
import { Interface } from './interface.js';
import { EventNamesResponse } from './types/event-names-response.js';
import { EventReturn } from './types/event-return.js';
import { EventTagsResponse } from './types/event-tags-response.js';
import { EventYearsResponse } from './types/event-years-response.js';
import { ProjectNamesResponse } from './types/project-names-response.js';
import { ProjectResponse } from './types/project-response.js';

type Config = {
  baseUrl: string;
  validator: Validator;
};

export class Implementation implements Interface {
  private readonly baseUrl: string;

  private readonly validator: Validator;

  public constructor(config: Config) {
    this.baseUrl = config.baseUrl;
    this.validator = config.validator;
  }

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

  public async getAllEventFeatures(): Promise<void> {
    // TODO: implement method
  }

  public async getAllEventImages(): Promise<void> {
    // TODO: implement method
  }

  /**
   * This method contains no network call, hence
   * the lack of a `Response`-affixed return type
   */
  public async getAllProjects(): Promise<MappedProjects> {
    const eventYears = await this.getEventYears();

    // For some reason, this causes a loop bug, so cannot be generic
    // const generateObject = <K extends PropertyKey, T>(type: T, ...keys: K[]): Record<K, T> =>
    //   Object.fromEntries(keys.map((key) => [key, type])) as Record<K, T>;

    // const projectsByYear = generateObject<EventYear, Project[]>([], ...eventYears);

    const generateObject = <K extends PropertyKey>(...keys: K[]): Record<K, Project[]> =>
      Object.fromEntries(keys.map((key) => [key, []])) as unknown as Record<K, Project[]>;

    const projectsByYear = generateObject<EventYear>(...eventYears);

    for await (const eventYear of eventYears) {
      const projectNames = await this.getProjectNames(eventYear);

      for await (const projectName of projectNames) {
        const project = await this.getProject(eventYear, projectName.id.toLowerCase());

        projectsByYear[eventYear].push(project);
      }
    }

    const mappedProjects = this.mapProjects(projectsByYear);

    try {
      return mappedProjects;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid sport data received');
    }
  }

  public async getEventNames(year: string): Promise<EventNamesResponse> {
    const apiUrl = this.eventsUrl.replace(':year', year).replace(':eventId.json', 'names.json');

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      eventNamesResponseValidationSchema,
    );

    try {
      return validResponseData;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid event names data received');
    }
  }

  public async getEventTags(): Promise<EventTagsResponse> {
    const apiUrl = this.eventTagsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      eventTagsResponseValidationSchema,
    );

    try {
      return validResponseData;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid event tags data received');
    }
  }

  public async getEventYears(): Promise<EventYearsResponse> {
    const apiUrl = this.eventYearsUrl;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      eventYearsResponseValidationSchema,
    );

    try {
      return validResponseData;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid event years data received');
    }
  }

  public async getEvent(year: string, eventId: string): Promise<EventReturn> {
    const apiUrl = this.eventsUrl.replace(':year', year).replace(':eventId', eventId);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      eventResponseValidationSchema,
    );

    const mappedFeatures = validResponseData.features
      ? this.mapEventFeaturesReadable(validResponseData.features)
      : undefined;

    try {
      if (validResponseData.projectIds) {
        const eventProjects: Project[] = [];

        for await (const projectId of validResponseData.projectIds) {
          const project = await this.getProject(
            validResponseData.id.split('').slice(1, 5).join(''),
            projectId.toLowerCase(),
          );

          eventProjects.push(project);
        }

        const mappedEventProject = this.mapEventProject(eventProjects);

        const returnDataSport = {
          ...validResponseData,
          type: 'mapped',
          features: mappedFeatures,
          sport: mappedEventProject,
        };

        const validReturnData = await this.validator.validate(
          {
            ...returnDataSport,
            // TODO: remove temporary fix for zero-character `description`s
            description:
              returnDataSport.description === ''
                ? 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
                : returnDataSport.description,
          },
          eventReturnValidationSchema,
        );

        return validReturnData;
      }

      const returnDataSansSport = {
        ...validResponseData,
        type: 'mapped',
        features: mappedFeatures,
      };

      const validReturnData = await this.validator.validate(
        {
          ...returnDataSansSport,
          // TODO: remove temporary fix for zero-character `description`s
          description:
            returnDataSansSport.description === ''
              ? 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
              : returnDataSansSport.description,
        },
        eventReturnValidationSchema,
      );

      return validReturnData;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid event data received');
    }
  }

  public async getProjectNames(year: string): Promise<ProjectNamesResponse> {
    const apiUrl = this.projectsUrl.replace(':year', year).replace(':projectId.json', 'names.json');

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      projectNamesResponseValidationSchema,
    );

    try {
      return validResponseData;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid project names data received');
    }
  }

  public async getProject(year: string, projectId: string): Promise<ProjectResponse> {
    const apiUrl = this.projectsUrl.replace(':year', year).replace(':projectId', projectId);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    const validResponseData = await this.validator.validate(
      responseData,
      projectResponseValidationSchema,
    );

    try {
      return validResponseData;
    } catch (error: unknown) {
      console.log(error);

      throw new Error('Invalid sport data received');
    }
  }

  private mapEventFeaturesReadable(features: Features): GenericDataContent[] {
    return [
      {
        title: 'Countries',
        content: features.countries?.sort().join(', '),
      },
      {
        title: 'Cities',
        content: features.cities?.sort().join(', '),
      },
      {
        title: 'Airports',
        content: features.airports?.sort().join(', '),
      },
      {
        title: 'Transportation',
        content: features.transportation?.sort().join(', '),
      },
      {
        title: 'Accommodation',
        content: features.accommodation?.sort().join(', '),
      },
      {
        title: 'Districts And Neighborhoods',
        content: features.districts?.sort().join(', '),
      },
      {
        title: 'Attractions',
        content: features.attractions?.sort().join(', '),
      },
      {
        title: 'Parks',
        content: features.parks?.sort().join(', '),
      },
      {
        title: 'Food',
        content: features.food?.sort().join(', '),
      },
      {
        title: 'Drink',
        content: features.drink?.sort().join(', '),
      },
      {
        title: 'Restaurants',
        content: features.restaurants?.sort().join(', '),
      },
      {
        title: 'Bars',
        content: features.bars?.sort().join(', '),
      },
      {
        title: 'Cafés',
        content: features.cafes?.sort().join(', '),
      },
      {
        title: 'Bakeries And Patisseries',
        content: features.bakeries?.sort().join(', '),
      },
      {
        title: 'Chocolatiers',
        content: features.chocolatiers?.sort().join(', '),
      },
      {
        title: 'Gelaterias',
        content: features.gelaterias?.sort().join(', '),
      },
      {
        title: 'Markets',
        content: features.markets?.sort().join(', '),
      },
      {
        title: 'Supermarkets',
        content: features.supermarkets?.sort().join(', '),
      },
      {
        title: 'Department Stores',
        content: features.departmentStores?.sort().join(', '),
      },
      {
        title: 'Clothing And Accessory Stores',
        content: features.clothingStores?.sort().join(', '),
      },
      {
        title: 'Interior Design Stores',
        content: features.interiorDesignStores?.sort().join(', '),
      },
      {
        title: 'Technology Stores',
        content: features.technologyStores?.sort().join(', '),
      },
      {
        title: 'Audio Stores',
        content: features.audioStores?.sort().join(', '),
      },
      {
        title: 'Kitchen Stores',
        content: features.kitchenStores?.sort().join(', '),
      },
      {
        title: 'Stationery Stores',
        content: features.stationeryStores?.sort().join(', '),
      },
      {
        title: 'Book Stores',
        content: features.bookStores?.sort().join(', '),
      },
      {
        title: 'Japanese Stores',
        content: features.japaneseStores?.sort().join(', '),
      },
      {
        title: 'Bicycle Stores',
        content: features.bicycleStores?.sort().join(', '),
      },
      {
        title: 'Outdoor Stores',
        content: features.outdoorStores?.sort().join(', '),
      },
      {
        title: 'Tennis Stores',
        content: features.tennisStores?.sort().join(', '),
      },
      {
        title: 'Unique Elements',
        content: features.uniqueElements?.sort().join(', '),
      },
      {
        title: 'Nostalgia Effect',
        content: features.nostalgiaEffect?.sort().join(', '),
      },
    ];
  }

  private mapEventProjectFeaturesReadable(
    islands?: string[],
    munros?: string[],
    munroTops?: string[],
    corbetts?: string[],
    corbettTops?: string[],
    grahams?: string[],
    donalds?: string[],
    subTwos?: string[],
  ): GenericDataContent[] {
    return [
      {
        title: 'Islands',
        content: islands && islands.length > 0 ? islands.sort().join(', ') : undefined,
      },
      {
        title: 'Munros',
        content: munros && munros.length > 0 ? munros.sort().join(', ') : undefined,
      },
      {
        title: 'Munro Tops',
        content: munroTops && munroTops.length > 0 ? munroTops.sort().join(', ') : undefined,
      },
      {
        title: 'Corbetts',
        content: corbetts && corbetts.length > 0 ? corbetts.sort().join(', ') : undefined,
      },
      {
        title: 'Corbett Tops',
        content: corbettTops && corbettTops.length > 0 ? corbettTops.sort().join(', ') : undefined,
      },
      {
        title: 'Grahams',
        content: grahams && grahams.length > 0 ? grahams.sort().join(', ') : undefined,
      },
      {
        title: 'SubTwos',
        content: subTwos && subTwos.length > 0 ? subTwos.sort().join(', ') : undefined,
      },
      {
        title: 'Donalds',
        content: donalds && donalds.length > 0 ? donalds.sort().join(', ') : undefined,
      },
    ];
  }

  private mapEventProject(projects: Project[]): MappedEventProject {
    const distances: number[] = [];
    const elevations: number[] = [];
    const times: string[] = [];
    const companionships: number[] = [];
    const islands: string[] = [];
    const munros: string[] = [];
    const munroTops: string[] = [];
    const corbetts: string[] = [];
    const corbettTops: string[] = [];
    const grahams: string[] = [];
    const donalds: string[] = [];
    const subTwos: string[] = [];

    for (const project of projects) {
      distances.push(project.distance);
      elevations.push(project.elevation);
      times.push(project.time);
      companionships.push(project.companionship);

      if (project.islands) {
        for (const island of project.islands) {
          islands.push(island);
        }
      }

      if (project.munros) {
        for (const munro of project.munros) {
          munros.push(munro);
        }
      }

      if (project.munroTops) {
        for (const munroTop of project.munroTops) {
          munroTops.push(munroTop);
        }
      }

      if (project.corbetts) {
        for (const corbett of project.corbetts) {
          corbetts.push(corbett);
        }
      }

      if (project.corbettTops) {
        for (const corbettTop of project.corbettTops) {
          corbettTops.push(corbettTop);
        }
      }

      if (project.grahams) {
        for (const graham of project.grahams) {
          grahams.push(graham);
        }
      }

      if (project.donalds) {
        for (const donald of project.donalds) {
          donalds.push(donald);
        }
      }

      if (project.subTwos) {
        for (const subTwo of project.subTwos) {
          subTwos.push(subTwo);
        }
      }
    }

    const mappedFeatures = this.mapEventProjectFeaturesReadable(
      islands,
      munros,
      munroTops,
      corbetts,
      corbettTops,
      grahams,
      donalds,
      subTwos,
    );

    const mappedEventProjects = {
      name: projects.map(({ name: projectName }) => `${projectName}`).join(', '),
      distance: toMiles(distances.reduce(toSum)),
      elevation: toFeet(elevations.reduce(toSum)),
      time: times.join(', '),
      // Currently unused
      companionship: companionships.join(', '),
      features: mappedFeatures,
    };

    return mappedEventProjects;
  }

  /**
   * Typescript will always return `string[]` from `Object.keys()`, hence the type assertion on line 589.
   *
   * In this case `reduce()` isn't adhering to https://typescript-eslint.io/rules/prefer-reduce-type-parameter/
   * due to the unknown keys of `projects`, hence the combination of both `reduce-type-parameter` as assertions
   * at the end of each map.
   */
  private mapProjects(projects: Projects): MappedProjects {
    const years = Object.keys(projects) as Array<keyof typeof projects>;

    const instances = years.reduce<MappedProjects['instances']>((object, key) => {
      let total = 0;

      for (const year of years) {
        total += projects[year].length;
      }

      return {
        ...object,
        type: 'sansUnique',
        total,
        [key]: projects[key].length,
      };
    }, {} as MappedProjects['instances']);

    const distance = years.reduce<MappedProjects['distance']>((object, key) => {
      let total = 0;
      let yearTotal = 0;

      for (const year of years) {
        for (const project of projects[year]) {
          total += project.distance;
        }
      }

      for (const project of projects[key]) {
        yearTotal += project.distance;
      }

      return {
        ...object,
        type: 'sansUnique',
        total: toMiles(total),
        [key]: toMiles(yearTotal),
      };
    }, {} as MappedProjects['distance']);

    const elevation = years.reduce<MappedProjects['elevation']>((object, key) => {
      let total = 0;
      let yearTotal = 0;

      for (const year of years) {
        for (const project of projects[year]) {
          total += project.elevation;
        }
      }

      for (const project of projects[key]) {
        yearTotal += project.elevation;
      }

      return {
        ...object,
        type: 'sansUnique',
        total: toFeet(total),
        [key]: toFeet(yearTotal),
      };
    }, {} as MappedProjects['elevation']);

    const islandsNames = years.reduce<MappedProjects['islands']['names']>((object, key) => {
      const total: string[] = [];
      const yearTotal: string[] = [];

      for (const year of years) {
        for (const project of projects[year]) {
          if (project.islands) {
            for (const island of project.islands) {
              total.push(island);
            }
          }
        }
      }

      for (const project of projects[key]) {
        if (project.islands) {
          for (const island of project.islands) {
            yearTotal.push(island);
          }
        }
      }

      return {
        ...object,
        type: 'unique',
        total: total.sort(),
        unique: removeDuplicates(total).sort(),
        [key]: yearTotal.sort(),
      };
    }, {} as MappedProjects['islands']['names']);

    const islandsInstances = years.reduce<MappedProjects['islands']['instances']>((object, key) => {
      const total: string[] = [];
      const yearTotal: string[] = [];

      for (const year of years) {
        for (const project of projects[year]) {
          if (project.islands) {
            for (const island of project.islands) {
              total.push(island);
            }
          }
        }
      }

      for (const project of projects[key]) {
        if (project.islands) {
          for (const island of project.islands) {
            yearTotal.push(island);
          }
        }
      }

      return {
        ...object,
        type: 'unique',
        total: total.length,
        unique: removeDuplicates(total).length,
        [key]: yearTotal.length,
      };
    }, {} as MappedProjects['islands']['instances']);

    const islands: MappedProjects['islands'] = {
      names: islandsNames,
      instances: islandsInstances,
    };

    const munrosNames = years.reduce<MappedProjects['munros']['names']>((object, key) => {
      const total: string[] = [];
      const yearTotal: string[] = [];

      for (const year of years) {
        for (const project of projects[year]) {
          if (project.munros) {
            for (const munro of project.munros) {
              total.push(munro);
            }
          }
        }
      }

      for (const project of projects[key]) {
        if (project.munros) {
          for (const munro of project.munros) {
            yearTotal.push(munro);
          }
        }
      }

      return {
        ...object,
        type: 'unique',
        total: total.sort(),
        unique: removeDuplicates(total).sort(),
        [key]: yearTotal.sort(),
      };
    }, {} as MappedProjects['munros']['names']);

    const munrosInstances = years.reduce<MappedProjects['munros']['instances']>((object, key) => {
      const total: string[] = [];
      const yearTotal: string[] = [];

      for (const year of years) {
        for (const project of projects[year]) {
          if (project.munros) {
            for (const munro of project.munros) {
              total.push(munro);
            }
          }
        }
      }

      for (const project of projects[key]) {
        if (project.munros) {
          for (const munro of project.munros) {
            yearTotal.push(munro);
          }
        }
      }

      return {
        ...object,
        type: 'unique',
        total: total.length,
        unique: removeDuplicates(total).length,
        [key]: yearTotal.length,
      };
    }, {} as MappedProjects['munros']['instances']);

    const munros: MappedProjects['munros'] = {
      names: munrosNames,
      instances: munrosInstances,
    };

    const munroTopsNames = years.reduce<MappedProjects['munroTops']['names']>((object, key) => {
      const total: string[] = [];
      const yearTotal: string[] = [];

      for (const year of years) {
        for (const project of projects[year]) {
          if (project.munroTops) {
            for (const munroTop of project.munroTops) {
              total.push(munroTop);
            }
          }
        }
      }

      for (const project of projects[key]) {
        if (project.munroTops) {
          for (const munroTop of project.munroTops) {
            yearTotal.push(munroTop);
          }
        }
      }

      return {
        ...object,
        type: 'unique',
        total: total.sort(),
        unique: removeDuplicates(total).sort(),
        [key]: yearTotal.sort(),
      };
    }, {} as MappedProjects['munroTops']['names']);

    const munroTopsInstances = years.reduce<MappedProjects['munroTops']['instances']>(
      (object, key) => {
        const total: string[] = [];
        const yearTotal: string[] = [];

        for (const year of years) {
          for (const project of projects[year]) {
            if (project.munroTops) {
              for (const munroTop of project.munroTops) {
                total.push(munroTop);
              }
            }
          }
        }

        for (const project of projects[key]) {
          if (project.munroTops) {
            for (const munroTop of project.munroTops) {
              yearTotal.push(munroTop);
            }
          }
        }

        return {
          ...object,
          type: 'unique',
          total: total.length,
          unique: removeDuplicates(total).length,
          [key]: yearTotal.length,
        };
      },
      {} as MappedProjects['munroTops']['instances'],
    );

    const munroTops: MappedProjects['munroTops'] = {
      names: munroTopsNames,
      instances: munroTopsInstances,
    };

    const corbettsNames = years.reduce<MappedProjects['corbetts']['names']>((object, key) => {
      const total: string[] = [];
      const yearTotal: string[] = [];

      for (const year of years) {
        for (const project of projects[year]) {
          if (project.corbetts) {
            for (const corbett of project.corbetts) {
              total.push(corbett);
            }
          }
        }
      }

      for (const project of projects[key]) {
        if (project.corbetts) {
          for (const corbett of project.corbetts) {
            yearTotal.push(corbett);
          }
        }
      }

      return {
        ...object,
        type: 'unique',
        total: total.sort(),
        unique: removeDuplicates(total).sort(),
        [key]: yearTotal.sort(),
      };
    }, {} as MappedProjects['corbetts']['names']);

    const corbettsInstances = years.reduce<MappedProjects['corbetts']['instances']>(
      (object, key) => {
        const total: string[] = [];
        const yearTotal: string[] = [];

        for (const year of years) {
          for (const project of projects[year]) {
            if (project.corbetts) {
              for (const corbett of project.corbetts) {
                total.push(corbett);
              }
            }
          }
        }

        for (const project of projects[key]) {
          if (project.corbetts) {
            for (const corbett of project.corbetts) {
              yearTotal.push(corbett);
            }
          }
        }

        return {
          ...object,
          type: 'unique',
          total: total.length,
          unique: removeDuplicates(total).length,
          [key]: yearTotal.length,
        };
      },
      {} as MappedProjects['corbetts']['instances'],
    );

    const corbetts: MappedProjects['corbetts'] = {
      names: corbettsNames,
      instances: corbettsInstances,
    };

    const corbettTopsNames = years.reduce<MappedProjects['corbettTops']['names']>((object, key) => {
      const total: string[] = [];
      const yearTotal: string[] = [];

      for (const year of years) {
        for (const project of projects[year]) {
          if (project.corbettTops) {
            for (const corbettTop of project.corbettTops) {
              total.push(corbettTop);
            }
          }
        }
      }

      for (const project of projects[key]) {
        if (project.corbettTops) {
          for (const corbettTop of project.corbettTops) {
            yearTotal.push(corbettTop);
          }
        }
      }

      return {
        ...object,
        type: 'unique',
        total: total.sort(),
        unique: removeDuplicates(total).sort(),
        [key]: yearTotal.sort(),
      };
    }, {} as MappedProjects['corbettTops']['names']);

    const corbettTopsInstances = years.reduce<MappedProjects['corbettTops']['instances']>(
      (object, key) => {
        const total: string[] = [];
        const yearTotal: string[] = [];

        for (const year of years) {
          for (const project of projects[year]) {
            if (project.corbettTops) {
              for (const corbettTop of project.corbettTops) {
                total.push(corbettTop);
              }
            }
          }
        }

        for (const project of projects[key]) {
          if (project.corbettTops) {
            for (const corbettTop of project.corbettTops) {
              yearTotal.push(corbettTop);
            }
          }
        }

        return {
          ...object,
          type: 'unique',
          total: total.length,
          unique: removeDuplicates(total).length,
          [key]: yearTotal.length,
        };
      },
      {} as MappedProjects['corbettTops']['instances'],
    );

    const corbettTops: MappedProjects['corbettTops'] = {
      names: corbettTopsNames,
      instances: corbettTopsInstances,
    };

    const grahamsNames = years.reduce<MappedProjects['grahams']['names']>((object, key) => {
      const total: string[] = [];
      const yearTotal: string[] = [];

      for (const year of years) {
        for (const project of projects[year]) {
          if (project.grahams) {
            for (const graham of project.grahams) {
              total.push(graham);
            }
          }
        }
      }

      for (const project of projects[key]) {
        if (project.grahams) {
          for (const graham of project.grahams) {
            yearTotal.push(graham);
          }
        }
      }

      return {
        ...object,
        type: 'unique',
        total: total.sort(),
        unique: removeDuplicates(total).sort(),
        [key]: yearTotal.sort(),
      };
    }, {} as MappedProjects['grahams']['names']);

    const grahamsInstances = years.reduce<MappedProjects['grahams']['instances']>((object, key) => {
      const total: string[] = [];
      const yearTotal: string[] = [];

      for (const year of years) {
        for (const project of projects[year]) {
          if (project.grahams) {
            for (const graham of project.grahams) {
              total.push(graham);
            }
          }
        }
      }

      for (const project of projects[key]) {
        if (project.grahams) {
          for (const graham of project.grahams) {
            yearTotal.push(graham);
          }
        }
      }

      return {
        ...object,
        type: 'unique',
        total: total.length,
        unique: removeDuplicates(total).length,
        [key]: yearTotal.length,
      };
    }, {} as MappedProjects['grahams']['instances']);

    const grahams: MappedProjects['grahams'] = {
      names: grahamsNames,
      instances: grahamsInstances,
    };

    const donaldsNames = years.reduce<MappedProjects['donalds']['names']>((object, key) => {
      const total: string[] = [];
      const yearTotal: string[] = [];

      for (const year of years) {
        for (const project of projects[year]) {
          if (project.donalds) {
            for (const donald of project.donalds) {
              total.push(donald);
            }
          }
        }
      }

      for (const project of projects[key]) {
        if (project.donalds) {
          for (const donald of project.donalds) {
            yearTotal.push(donald);
          }
        }
      }

      return {
        ...object,
        type: 'unique',
        total: total.sort(),
        unique: removeDuplicates(total).sort(),
        [key]: yearTotal.sort(),
      };
    }, {} as MappedProjects['donalds']['names']);

    const donaldsInstances = years.reduce<MappedProjects['donalds']['instances']>((object, key) => {
      const total: string[] = [];
      const yearTotal: string[] = [];

      for (const year of years) {
        for (const project of projects[year]) {
          if (project.donalds) {
            for (const donald of project.donalds) {
              total.push(donald);
            }
          }
        }
      }

      for (const project of projects[key]) {
        if (project.donalds) {
          for (const donald of project.donalds) {
            yearTotal.push(donald);
          }
        }
      }

      return {
        ...object,
        type: 'unique',
        total: total.length,
        unique: removeDuplicates(total).length,
        [key]: yearTotal.length,
      };
    }, {} as MappedProjects['donalds']['instances']);

    const donalds: MappedProjects['donalds'] = {
      names: donaldsNames,
      instances: donaldsInstances,
    };

    const subTwosNames = years.reduce<MappedProjects['subTwos']['names']>((object, key) => {
      const total: string[] = [];
      const yearTotal: string[] = [];

      for (const year of years) {
        for (const project of projects[year]) {
          if (project.subTwos) {
            for (const subTwo of project.subTwos) {
              total.push(subTwo);
            }
          }
        }
      }

      for (const project of projects[key]) {
        if (project.subTwos) {
          for (const subTwo of project.subTwos) {
            yearTotal.push(subTwo);
          }
        }
      }

      return {
        ...object,
        type: 'unique',
        total: total.sort(),
        unique: removeDuplicates(total).sort(),
        [key]: yearTotal.sort(),
      };
    }, {} as MappedProjects['subTwos']['names']);

    const subTwosInstances = years.reduce<MappedProjects['subTwos']['instances']>((object, key) => {
      const total: string[] = [];
      const yearTotal: string[] = [];

      for (const year of years) {
        for (const project of projects[year]) {
          if (project.subTwos) {
            for (const subTwo of project.subTwos) {
              total.push(subTwo);
            }
          }
        }
      }

      for (const project of projects[key]) {
        if (project.subTwos) {
          for (const subTwo of project.subTwos) {
            yearTotal.push(subTwo);
          }
        }
      }

      return {
        ...object,
        type: 'unique',
        total: total.length,
        unique: removeDuplicates(total).length,
        [key]: yearTotal.length,
      };
    }, {} as MappedProjects['subTwos']['instances']);

    const subTwos: MappedProjects['subTwos'] = {
      names: subTwosNames,
      instances: subTwosInstances,
    };

    const mappedProjects = {
      projects,
      instances,
      distance,
      elevation,
      islands,
      munros,
      munroTops,
      corbetts,
      corbettTops,
      grahams,
      donalds,
      subTwos,
    };

    return mappedProjects;
  }
}
