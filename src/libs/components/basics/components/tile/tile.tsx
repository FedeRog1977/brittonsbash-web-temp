import cx from 'classnames';
import { FC, ReactNode } from 'react';
import { Img } from '~/libs/types';
import { toUpperCase } from '~/libs/utils';
import { GradientProps, Gradient } from '../gradient/gradient.js';
import { Image } from '../image/image.js';
import styles from './tile.module.scss.js';

export type TileProps = {
  type: 'clear' | 'solid';
  width?: 'wide' | 'narrow';
  stacked?: boolean;
  img?: Img;
  gradient?: GradientProps;
  children: ReactNode;
};

export const Tile: FC<TileProps> = ({ type, width = 'wide', stacked, img, gradient, children }) => {
  const tile = cx(styles.tile, [styles[`tile${toUpperCase(type)}`]]);
  const container = cx(styles.container, [styles[`container${toUpperCase(width)}`]], {
    [styles.stacked]: stacked,
  });
  const innerContainer = cx({ [styles.innerContainer]: stacked });

  return (
    <div className={tile}>
      <div className={container}>
        {img ? <Image {...img} /> : null}
        {gradient ? <Gradient {...gradient} /> : null}
        <div className={innerContainer}>{children}</div>
      </div>
    </div>
  );
};
