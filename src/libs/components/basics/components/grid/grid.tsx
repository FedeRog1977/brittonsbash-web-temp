import cx from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './grid.module.scss.js';
import {
  SpacingConfig,
  JustifyConfig,
  AlignConfig,
  getResponsiveSpacingClassNames,
  getResponsiveAlignmentClassNames,
} from '../../reference/index.js';

// Reminder: https://developer.mozilla.org/en-US/docs/Web/CSS/grid
// Reminder: https://css-tricks.com/snippets/css/complete-guide-grid/

// Typical Grid Styling

// grid {
//   display: 'grid',
//   gridTemplateColumns: '{{n}}fr, ..., {{n}}fr';
//   gridTemplateRows: '{{n}}fr, ..., {{n}}fr';
//   columnGap: '{{n}}px';
//   rowGap: '{{n}}px';
//   justifyContent: '{{value}}'; // grid x-axis
//   alignContent: '{{value}}'; // grid y-axis
//   justifyItems: '{{value}}'; // item x-axis
//   alignItems: '{{value}}'; // item y-axis
// }

// gridItem {
//   grid-column: '1 / N';
//   grid-row: '1 / N';
//   width: '{{n}}px';
//   height '{{n}}px';
// }

export type GridProps = {
  children: ReactNode;
  spacing?: SpacingConfig;
  justifyContent?: JustifyConfig; // x-axis use
  justifyItems?: JustifyConfig;
  alignContent?: AlignConfig;
  alignItems?: AlignConfig; // y-axis use
};

const defaultSpacing: SpacingConfig = { xs: 'sm' };

export const Grid: FC<GridProps> = ({
  children,
  spacing = defaultSpacing,
  justifyContent = 'left',
  justifyItems,
  alignItems = 'top',
  alignContent,
}) => {
  const classNames = cx(
    styles.grid,
    ...getResponsiveSpacingClassNames('spacing', styles, spacing),
    ...getResponsiveAlignmentClassNames('justify', 'content', styles, justifyContent),
    ...getResponsiveAlignmentClassNames('justify', 'items', styles, justifyItems),
    ...getResponsiveAlignmentClassNames('align', 'content', styles, alignContent),
    ...getResponsiveAlignmentClassNames('align', 'items', styles, alignItems),
  );

  return <div className={classNames}>{children}</div>;
};
