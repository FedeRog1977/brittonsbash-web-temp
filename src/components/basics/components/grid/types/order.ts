import { Breakpoints } from '../../../reference/index.js';

export type Order = number | Partial<Record<Breakpoints, number>>;
