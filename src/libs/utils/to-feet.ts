export const toFeet = (elevation: number): string =>
  `${elevation.toLocaleString('en-UK', { maximumFractionDigits: 0 })} ft`;
