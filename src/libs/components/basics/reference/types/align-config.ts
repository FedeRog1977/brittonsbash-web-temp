import { Breakpoints } from './breakpoints.js';
import { Align } from './align.js';

export type AlignConfig = Align | Partial<Record<Breakpoints, Align>>;
