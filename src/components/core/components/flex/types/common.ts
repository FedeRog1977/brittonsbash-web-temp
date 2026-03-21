import { ReactNode } from 'react';
import { SpacingConfig } from '../../../types/spacing-config.js';

export type Common = {
  children: ReactNode;
  wrap?: boolean;
  gap?: SpacingConfig;
  columnGap?: SpacingConfig;
  rowGap?: SpacingConfig;
  fullHeight?: boolean;
};
