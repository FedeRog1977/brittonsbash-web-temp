import { toUpperCase } from '~/libs/utils';
import styles from './page-background.module.scss.js';
import cx from 'classnames';
import { FC } from 'react';

export type PageBackgroundProps = {
  // TODO: clean up the order and naming of these
  // Also do this in the module
  type?: 'std' | 'logo' | 'ig' | 'sport' | 'audi' | 'miami' | 'calligraphy' | 'ibm';
  content: string;
};

export const PageBackground: FC<PageBackgroundProps> = ({ type = 'logo', content }) => {
  const classNamesText = cx(styles.text, styles[`text${toUpperCase(type)}`]);

  return (
    <div className={styles.background}>
      <div className={classNamesText}>
        <div className={styles.textContent}>{content}</div>
      </div>
    </div>
  );
};
