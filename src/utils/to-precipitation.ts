export const toPrecipitation = (precipitation: number): string =>
  `${(precipitation * 100).toFixed(0)}%`;
