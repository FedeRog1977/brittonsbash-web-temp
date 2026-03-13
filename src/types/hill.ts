// TODO: update naming convention within type
export type Hill = {
  name: string;
  lat: number;
  lon: number;
  OSgrid: string;
  elevation: number;
  prominence: number;
  isolation: number;
  summit: string;
  image: string;
  // TODO: discontinue this one
  type?: string;
};
