import { ColumnSpan } from './column-span.js';
import { Breakpoints } from './breakpoints.js';

export type ColumnSpanConfig = ColumnSpan | Partial<Record<Breakpoints, ColumnSpan>>;
