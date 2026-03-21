import cx from 'classnames';
import { FC } from 'react';
import { toUpperCase } from '~/utils';
import { TextStyle } from '../../types/text-style.js';
import styles from './page-background.module.scss.js';

export type PageBackgroundProps = {
  type?: TextStyle['fontFamily'];
  content: string;
};

export const PageBackground: FC<PageBackgroundProps> = ({ type = 'sansSerif', content }) => {
  const classNamesText = cx(styles.text, styles[`text${toUpperCase(type)}`]);

  return (
    <div className={styles.background}>
      <div className={classNamesText}>
        <div className={styles.textContent}>{content}</div>
      </div>
    </div>
  );
};
