import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const toBearing = (bearing: number) => {
  const bearingFormatted = bearing + '°';

  var bearingCompass = '';

  if (bearing >= 348.76) {
    bearingCompass = 'N';
  } else if (bearing >= 0 && bearing <= 11.25) {
    bearingCompass = 'N';
  } else if (bearing >= 11.26 && bearing <= 33.75) {
    bearingCompass = 'N/NE';
  } else if (bearing >= 33.76 && bearing <= 56.25) {
    bearingCompass = 'NE';
  } else if (bearing >= 56.26 && bearing <= 78.75) {
    bearingCompass = 'E/NE';
  } else if (bearing >= 78.76 && bearing <= 101.25) {
    bearingCompass = 'E';
  } else if (bearing >= 101.26 && bearing <= 123.75) {
    bearingCompass = 'E/SE';
  } else if (bearing >= 123.76 && bearing <= 146.25) {
    bearingCompass = 'SE';
  } else if (bearing >= 146.26 && bearing <= 168.75) {
    bearingCompass = 'S/SE';
  } else if (bearing >= 168.76 && bearing <= 191.25) {
    bearingCompass = 'S';
  } else if (bearing >= 191.26 && bearing <= 213.75) {
    bearingCompass = 'S/SW';
  } else if (bearing >= 213.76 && bearing <= 236.25) {
    bearingCompass = 'SW';
  } else if (bearing >= 236.26 && bearing <= 258.75) {
    bearingCompass = 'W/SW';
  } else if (bearing >= 258.76 && bearing <= 281.25) {
    bearingCompass = 'W';
  } else if (bearing >= 281.26 && bearing <= 303.75) {
    bearingCompass = 'W/NW';
  } else if (bearing >= 303.76 && bearing <= 326.25) {
    bearingCompass = 'NW';
  } else if (bearing >= 326.26 && bearing <= 348.75) {
    bearingCompass = 'N/NW';
  }

  const angle = -45 + 180 + bearing;

  const bearingArrow = (
    <div
      style={{
        transform: `rotate(${angle}deg)`,
        maxWidth: '16px',
      }}
    >
      <FontAwesomeIcon icon={faLocationArrow} color="white" />
    </div>
  );

  return { bearingFormatted, bearingCompass, bearingArrow };
};
