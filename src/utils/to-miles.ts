export const toMiles = (distance: number): string =>
  `${distance.toLocaleString('en-UK', { minimumFractionDigits: 2 })} mi`;
