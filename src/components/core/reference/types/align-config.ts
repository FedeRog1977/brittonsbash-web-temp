import { Align } from './align.js';
import { Breakpoints } from './breakpoints.js';

export type AlignConfig = Align | Partial<Record<Breakpoints, Align>>;
