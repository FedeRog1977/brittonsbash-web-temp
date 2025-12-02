import { FC } from 'react';
import styles from './image.module.scss.js';
import { Typography } from '../typography/typography.js';
import { Img } from '~/libs/types';

export const Image: FC<Img> = ({ url, alt, description }) => (
  <div className={styles.imageContainer}>
    <img className={styles.image} src={url} alt={alt} />

    {description ? (
      <div className={styles.imageCaption}>
        <Typography variant="body" textAlign="left" color="white">
          {description}
        </Typography>
      </div>
    ) : null}
  </div>
);
