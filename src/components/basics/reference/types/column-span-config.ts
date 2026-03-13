import { Breakpoints } from './breakpoints.js';
import { ColumnSpan } from './column-span.js';

export type ColumnSpanConfig = ColumnSpan | Partial<Record<Breakpoints, ColumnSpan>>;
