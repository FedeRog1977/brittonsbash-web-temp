import { Project, Sport } from '~/libs/types';

export const mapEventSports = (sport: Sport): Project[] =>
  sport[2025].projects
    .concat(sport[2024].projects)
    .concat(sport[2023].projects)
    .concat(sport[2022].projects)
    .concat(sport[2021].projects)
    .concat(sport[2020].projects);
