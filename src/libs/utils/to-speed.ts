export const toSpeed = (speed: number, isKmh: boolean) => {
  var speedFormatted = '';

  isKmh
    ? (speedFormatted =
        (speed * 2.23694).toLocaleString('en-UK', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }) + ' mph')
    : (speedFormatted =
        speed.toLocaleString('en-UK', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }) + ' mph');

  return speedFormatted;
};
