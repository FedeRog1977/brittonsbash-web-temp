import { Project, Projects } from '~/libs/types';

export const mapEventSports = (sport: Projects): Project[] =>
  sport[2025]
    .concat(sport[2024])
    .concat(sport[2023])
    .concat(sport[2022])
    .concat(sport[2021])
    .concat(sport[2020]);
