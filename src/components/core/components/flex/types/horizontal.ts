import { AlignCrossAxis } from '../../../types/align-cross-axis.js';
import { AlignHorizontal } from '../../../types/align-horizontal.js';
import { AlignMainAxis } from '../../../types/align-main-axis.js';
import { AlignVertical } from '../../../types/align-vertical.js';
import { Common } from './common.js';

export type Horizontal = Common & {
  direction: 'horizontal';
  alignHorizontal?: AlignHorizontal | AlignMainAxis;
  alignVertical?: AlignVertical | AlignCrossAxis;
};
