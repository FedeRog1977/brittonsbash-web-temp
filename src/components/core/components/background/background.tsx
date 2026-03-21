import cx from 'classnames';
import { FC, ReactNode } from 'react';
import { toUpperCase } from '~/utils';
import { Color } from '../../types/color.js';
import styles from './background.module.scss.js';

export type BackgroundProps = {
  children: ReactNode;
  color: Color;
};

export const Background: FC<BackgroundProps> = ({ children, color }) => {
  const classNames = cx(styles.background, styles[`color${toUpperCase(color)}`]);

  return <div className={classNames}>{children}</div>;
};
