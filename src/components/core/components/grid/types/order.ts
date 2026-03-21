import { Breakpoints } from '../../../types/breakpoints.js';

export type Order = number | Partial<Record<Breakpoints, number>>;
