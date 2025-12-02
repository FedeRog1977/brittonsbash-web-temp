import { Region } from './region.js';

export type Regions = {
  counties: Region[];
  regions: {
    name: string;
    subRegions: {
      name: string;
      subSubRegions: Region[];
    }[];
  }[];
};
