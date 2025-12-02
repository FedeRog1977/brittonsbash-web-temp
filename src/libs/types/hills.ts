import { Hill } from './hill.js';
import { Landmass } from './landmass.js';

type Description = {
  name: string;
  desc: string;
};

export type Hills = {
  // TODO: discontinue this one
  munros: Hill[];
  // TODO: discontinue this one
  corbetts: Hill[];
  landmasses: Landmass[];
  summitFeatures: string[];
  hillElements: Description[];
  routeElements: Description[];
  walkTypes: Description[];
  walkStages: Description[];
  terrainTypes: Description[];
  terrainSurfaces: string[];
};
