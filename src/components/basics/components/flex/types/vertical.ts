import {
  AlignHorizontal,
  AlignCrossAxis,
  AlignVertical,
  AlignMainAxis,
} from '../../../reference/index.js';
import { Common } from './common.js';

export type Vertical = Common & {
  direction: 'vertical';
  alignHorizontal?: AlignHorizontal | AlignCrossAxis;
  alignVertical?: AlignVertical | AlignMainAxis;
};
