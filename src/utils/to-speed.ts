export const toSpeed = (speed: number, isKmh: boolean): string => {
  const speedFormatted = isKmh
    ? `${(speed * 2.23694).toLocaleString('en-UK', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      })} mph`
    : `${speed.toLocaleString('en-UK', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      })} mph`;

  return speedFormatted;
};
