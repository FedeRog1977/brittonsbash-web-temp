import cx from 'classnames';
import { FC } from 'react';
import { toUpperCase } from '~/libs/utils';
import { TextStyle } from '../../reference/types/text-style.js';
import styles from './loading.module.scss.js';

type LoadingProps = {
  color?: TextStyle['color'];
};

export const Loading: FC<LoadingProps> = ({ color = 'white' }) => {
  const classNames = cx(styles.loading, styles[`color${toUpperCase(color)}`]);

  return (
    // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
    <div className={classNames} role="progressbar" aria-label="Loading">
      <svg className={styles.svg} viewBox="22 22 44 44">
        <circle className={styles.circle} cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6" />
      </svg>
    </div>
  );
};
