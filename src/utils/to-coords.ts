type Coords = {
  latFormatted: string;
  lonFormatted: string;
};

export const toCoords = (lat: number, lon: number): Coords => {
  let latMag = '';
  let latSuffix = '';

  if (lat >= 0) {
    latSuffix = 'N';
    latMag = Number(lat).toLocaleString('en-UK', { maximumFractionDigits: 1 });
  } else if (lat < 0) {
    latSuffix = 'S';
    latMag = (lat * -1).toLocaleString('en-UK', {
      maximumFractionDigits: 1,
    });
  }

  let lonMag = '';
  let lonSuffix = '';

  if (lon >= 0) {
    lonSuffix = 'E';
    lonMag = Number(lon).toLocaleString('en-UK', { maximumFractionDigits: 1 });
  } else if (lon < 0) {
    lonSuffix = 'W';
    lonMag = (lon * -1).toLocaleString('en-UK', {
      maximumFractionDigits: 1,
    });
  }

  const latFormatted = `${latMag}°${latSuffix}`;
  const lonFormatted = `${lonMag}°${lonSuffix}`;

  return { latFormatted, lonFormatted };
};
