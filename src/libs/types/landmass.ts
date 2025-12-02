import { Hill } from './hill.js';
import { Route } from './route.js';

export type Landmass = {
  name: string;
  type: string;
  subtype: string;
  // TODO: change to subSubType
  subsubtype: string;
  routes: Route[];
  munros?: Hill[];
  munroTops?: Hill[];
  corbetts?: Hill[];
  corbettTops?: Hill[];
  // TODO: change to string[]
  corrie: { name: string }[];
  gully: boolean;
  lochain: boolean;
  waterfall: boolean;
  peatbog: boolean;
  mudbog: boolean;
  boulderfield: boolean;
  scree: boolean;
  shoulder: boolean;
  arete: boolean;
  humanfeatures: [];
  parentlandmass: string;
  parentpeak: string;
  region: string;
  subregion: string;
  informalregion: string;
};
