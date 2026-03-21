import cx from 'classnames';
import { FC, ReactNode } from 'react';
import { ColumnSpanConfig } from '../../types/column-span-config.js';
import { getResponsiveColumnSpanClassNames } from '../../utils/get-responsive-column-span-classnames.js';
import styles from './flex-item.module.scss.js';

export type FlexItemProps = {
  children: ReactNode;
  basis?: ColumnSpanConfig;
  grow?: boolean;
};

// TODO: export from index.ts once old Flex is discontinued
export const FlexItem: FC<FlexItemProps> = ({ children, basis, grow }) => {
  const classNames = cx(
    styles.flexItem,
    ...getResponsiveColumnSpanClassNames('basis', styles, basis),
    {
      [styles.grow]: grow,
    },
  );

  return <div className={classNames}>{children}</div>;
};
