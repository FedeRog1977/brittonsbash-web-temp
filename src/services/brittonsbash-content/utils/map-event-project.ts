import { MappedEventProject, Project } from '~/libs/types';
import { toMiles, toSum, toFeet } from '~/libs/utils';
import { mapEventProjectFeaturesReadable } from './map-event-project-features-readable.js';

export const mapEventProject = (projects: Project | Project[]): MappedEventProject => {
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
  const subTwos: string[] = [];
  const donalds: string[] = [];

  // if (Array.isArray(projects)) {
  //   // TODO: fix 0 length array issue
  //   // eslint-disable-next-line no-console
  //   console.log(
  //     'ARRAY_LENGTH::::\n',
  //     projects.length,
  //     '\nARRAY_TYPE::::\n',
  //     typeof projects,
  //     '\nARRAY::::\n',
  //     projects,
  //   );
  // }

  if (Array.isArray(projects)) {
    projects.forEach((project) => {
      distances.push(project.distance);
      elevations.push(project.elevation);
      times.push(project.time);
      companionships.push(project.companionship);
      project.islands?.forEach((island: string) => {
        islands.push(island);
      });
      project.munros?.forEach((munro: string) => {
        munros.push(munro);
      });
      project.munroTops?.forEach((munroTop: string) => {
        munroTops.push(munroTop);
      });
      project.corbetts?.forEach((corbett: string) => {
        corbetts.push(corbett);
      });
      project.corbettTops?.forEach((corbettTop: string) => {
        corbettTops.push(corbettTop);
      });
      project.grahams?.forEach((graham: string) => {
        grahams.push(graham);
      });
      project.subTwos?.forEach((subTwo: string) => {
        subTwos.push(subTwo);
      });
      project.donalds?.forEach((donald: string) => {
        donalds.push(donald);
      });
    });
  } else {
    distances.push(projects.distance);
    elevations.push(projects.elevation);
    times.push(projects.time);
    companionships.push(projects.companionship);
    projects.islands?.forEach((island: string) => {
      islands.push(island);
    });
    projects.munros?.forEach((munro: string) => {
      munros.push(munro);
    });
    projects.munroTops?.forEach((munroTop: string) => {
      munroTops.push(munroTop);
    });
    projects.corbetts?.forEach((corbett: string) => {
      corbetts.push(corbett);
    });
    projects.corbettTops?.forEach((corbettTop: string) => {
      corbettTops.push(corbettTop);
    });
    projects.grahams?.forEach((graham: string) => {
      grahams.push(graham);
    });
    projects.subTwos?.forEach((subTwo: string) => {
      subTwos.push(subTwo);
    });
    projects.donalds?.forEach((donald: string) => {
      donalds.push(donald);
    });
  }

  const name = Array.isArray(projects)
    ? projects.map(({ name }) => `${name}`).join(', ')
    : projects.name;

  const mappedFeatures = mapEventProjectFeaturesReadable(
    islands,
    munros,
    munroTops,
    corbetts,
    corbettTops,
    grahams,
    donalds,
    subTwos,
  );

  const parsedProjects = {
    name,
    distance: toMiles(distances.reduce(toSum)),
    elevation: toFeet(elevations.reduce(toSum)),
    time: times.join(', '),
    // Currently unused
    companionship: companionships.join(', '),
    features: mappedFeatures,
  };

  return parsedProjects;
};
