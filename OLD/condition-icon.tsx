import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
  faCloud,
  faCloudSun,
  faCloudMoon,
  faCloudRain,
  faCloudSunRain,
  faThunderstorm,
  faSnowflake,
  faSmog,
  faCloudMoonRain,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';

export type ConditionIconProps = {
  variant?: IconDefinition | string;
};

export const ConditionIcon: FC<ConditionIconProps> = ({ variant }) => {
  if (variant === '01d') {
    return (
      <div style={{ color: `rgba(238, 40, 0, 0.6)` }}>
        <FontAwesomeIcon icon={faSun} fade size="3x" />
      </div>
    );
  } else if (variant === '01n') {
    return (
      <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
        <FontAwesomeIcon icon={faMoon} size="3x" />
      </div>
    );
  } else if (variant === '02d') {
    return (
      <div style={{ color: `rgba(238, 40, 0, 0.6)` }}>
        <FontAwesomeIcon icon={faCloudSun} size="3x" />
      </div>
    );
  } else if (variant === '02n') {
    return (
      <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
        <FontAwesomeIcon icon={faCloudMoon} size="3x" />
      </div>
    );
  } else if (variant === '03d' || variant === '04d') {
    return (
      <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
        <FontAwesomeIcon icon={faCloud} size="3x" />
      </div>
    );
  } else if (variant === '03n' || variant === '04n') {
    return (
      <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
        <FontAwesomeIcon icon={faCloud} size="3x" />
      </div>
    );
  } else if (variant === '09d') {
    return (
      <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
        <FontAwesomeIcon icon={faCloudSunRain} size="3x" />
      </div>
    );
  } else if (variant === '09n') {
    return (
      <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
        <FontAwesomeIcon icon={faCloudMoonRain} size="3x" />
      </div>
    );
  } else if (variant === '10d') {
    return (
      <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
        <FontAwesomeIcon icon={faCloudRain} size="3x" />
      </div>
    );
  } else if (variant === '10n') {
    return (
      <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
        <FontAwesomeIcon icon={faCloudRain} size="3x" />
      </div>
    );
  } else if (variant === '11d') {
    return (
      <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
        <FontAwesomeIcon icon={faThunderstorm} size="3x" />
      </div>
    );
  } else if (variant === '11n') {
    return (
      <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
        <FontAwesomeIcon icon={faThunderstorm} size="3x" />
      </div>
    );
  } else if (variant === '13d') {
    return (
      <div style={{ color: `rgba(0, 163, 224, 0.6)` }}>
        <FontAwesomeIcon icon={faSnowflake} size="3x" />
      </div>
    );
  } else if (variant === '13n') {
    return (
      <div style={{ color: `rgba(0, 163, 224, 0.6)` }}>
        <FontAwesomeIcon icon={faSnowflake} size="3x" />
      </div>
    );
  } else if (variant === '50d') {
    return (
      <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
        <FontAwesomeIcon icon={faSmog} size="3x" />
      </div>
    );
  } else if (variant === '50n') {
    return (
      <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
        <FontAwesomeIcon icon={faSmog} size="3x" />
      </div>
    );
  }

  return null;
};
