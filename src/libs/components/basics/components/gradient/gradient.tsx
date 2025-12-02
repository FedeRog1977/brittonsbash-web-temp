import cx from 'classnames';
import { FC } from 'react';
import styles from './gradient.module.scss.js';
import { toUpperCase } from '~/libs/utils';

export type GradientProps = {
  value?: 'light' | 'dark';
  opacity?: 60 | 40 | 20;
  start?: 'left' | 'right'; // | 'center';
  fill?: boolean;
};

export const Gradient: FC<GradientProps> = ({
  value = 'dark',
  opacity = 60,
  start = 'left',
  fill = false,
}) => {
  const classNames = cx(styles.gradient, {
    [styles[`${value}${opacity}${toUpperCase(start)}Align`]]: !fill,
    [styles[`${value}Fill${opacity}`]]: fill,
  });

  return <div className={classNames} />;
};
