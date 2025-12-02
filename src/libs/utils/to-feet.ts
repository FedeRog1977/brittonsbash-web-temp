export const toFeet = (elevation: number) =>
  elevation.toLocaleString('en-UK', { maximumFractionDigits: 0 }) + ' ft';
