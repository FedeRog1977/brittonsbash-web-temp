import { Project } from './project.js';

type AggregateSport = {
  projects: Project[];
};

export type Sport = {
  2020: AggregateSport;
  2021: AggregateSport;
  2022: AggregateSport;
  2023: AggregateSport;
  2024: AggregateSport;
  2025: AggregateSport;
};
