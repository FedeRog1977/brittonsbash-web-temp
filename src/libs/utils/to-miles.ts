export const toMiles = (distance: number) =>
  distance.toLocaleString('en-UK', { minimumFractionDigits: 2 }) + ' mi';
