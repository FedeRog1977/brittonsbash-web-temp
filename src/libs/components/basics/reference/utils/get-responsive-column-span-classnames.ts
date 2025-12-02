import { toUpperCase, isDefined } from '~/libs/utils';
import { ColumnSpanConfig } from '../types/column-span-config.js';

export const getResponsiveColumnSpanClassNames = (
  prefix: string,
  styles: Record<string, string>,
  columnSpanConfig?: ColumnSpanConfig,
): string[] => {
  if (!columnSpanConfig) {
    return [];
  }

  const config: ColumnSpanConfig =
    typeof columnSpanConfig === 'number' ? { xs: columnSpanConfig } : columnSpanConfig;

  return Object.entries(config)
    .filter(([_, columnSpan]) => typeof columnSpan === 'number')
    .map(
      ([breakpoint, columnSpan]) =>
        styles[`${prefix}Breakpoint${toUpperCase(breakpoint)}ColumnSpan${columnSpan}`],
    )
    .filter(isDefined);
};
