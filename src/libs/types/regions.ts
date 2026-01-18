import { Region } from './region.js';

export type Regions = {
  counties: Region[];
  regions: Array<{
    name: string;
    subRegions: Array<{
      name: string;
      subSubRegions: Region[];
    }>;
  }>;
};
