import { ColumnSpan } from '../types/column-span.js';

export const getColumnSpanForColumnCount = (colCount: 1 | 2 | 3 | 4): ColumnSpan => {
  if (colCount === 4) {
    return 3;
  }

  if (colCount === 3) {
    return 4;
  }

  if (colCount === 2) {
    return 6;
  }

  return 12;
};
