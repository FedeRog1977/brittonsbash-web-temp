import { Breakpoints } from './breakpoints.js';
import { SpacingSize } from './spacing-size.js';

export type SpacingConfig = SpacingSize | Partial<Record<Breakpoints, SpacingSize>>;
