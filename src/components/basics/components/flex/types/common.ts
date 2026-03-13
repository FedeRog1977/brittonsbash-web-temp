import { ReactNode } from 'react';
import { SpacingConfig } from '../../../reference/index.js';

export type Common = {
  children: ReactNode;
  wrap?: boolean;
  gap?: SpacingConfig;
  columnGap?: SpacingConfig;
  rowGap?: SpacingConfig;
  fullHeight?: boolean;
};
