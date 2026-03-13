export const toCoords = (lat: number, lon: number) => {
  var latMag = '';
  var latSuffix = '';

  if (lat >= 0) {
    latSuffix = 'N';
    latMag = (lat * 1).toLocaleString('en-UK', { maximumFractionDigits: 1 });
  } else if (lat < 0) {
    latSuffix = 'S';
    latMag = (lat * -1).toLocaleString('en-UK', {
      maximumFractionDigits: 1,
    });
  }

  var lonMag = '';
  var lonSuffix = '';

  if (lon >= 0) {
    lonSuffix = 'E';
    lonMag = (lon * 1).toLocaleString('en-UK', { maximumFractionDigits: 1 });
  } else if (lon < 0) {
    lonSuffix = 'W';
    lonMag = (lon * -1).toLocaleString('en-UK', {
      maximumFractionDigits: 1,
    });
  }

  const latFormatted = latMag + '°' + latSuffix;
  const lonFormatted = lonMag + '°' + lonSuffix;

  return { latFormatted, lonFormatted };
};
