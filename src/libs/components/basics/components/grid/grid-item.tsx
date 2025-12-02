import cx from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './grid-item.module.scss.js';
import { Order } from './types/order.js';
import { getOrderClassNames } from './utils/get-order-classnames.js';
import { getPositionClassName } from './utils/get-position-classnames.js';
import { ColumnSpan, getResponsiveColumnSpanClassNames } from '../../reference/index.js';

export type GridItemProps = {
  children: ReactNode;
  xs: ColumnSpan;
  sm?: ColumnSpan;
  md?: ColumnSpan;
  lg?: ColumnSpan;
  xl?: ColumnSpan;
  xxl?: ColumnSpan;
  order?: Order;
  position?: 'overlay' | 'underlay';
};

export const GridItem: FC<GridItemProps> = ({
  children,
  order,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  position,
}) => {
  const classNames = cx(
    ...getResponsiveColumnSpanClassNames('width', styles, {
      xs,
      sm,
      md,
      lg,
      xl,
      '2xl': xxl,
    }),
    ...getOrderClassNames(styles, order),
    getPositionClassName(styles, position),
  );

  return <div className={classNames}>{children}</div>;
};
