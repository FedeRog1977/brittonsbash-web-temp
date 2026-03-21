import { AlignCrossAxis } from '../../../types/align-cross-axis.js';
import { AlignHorizontal } from '../../../types/align-horizontal.js';
import { AlignMainAxis } from '../../../types/align-main-axis.js';
import { AlignVertical } from '../../../types/align-vertical.js';
import { Common } from './common.js';

export type Vertical = Common & {
  direction: 'vertical';
  alignHorizontal?: AlignHorizontal | AlignCrossAxis;
  alignVertical?: AlignVertical | AlignMainAxis;
};
