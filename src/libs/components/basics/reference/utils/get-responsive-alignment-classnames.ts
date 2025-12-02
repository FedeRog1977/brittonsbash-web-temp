import { toUpperCase, isDefined } from '~/libs/utils';
import { AlignConfig } from '../types/align-config.js';
import { JustifyConfig } from '../types/justify-config.js';

export const getResponsiveAlignmentClassNames = (
  prefix: string,
  suffix: string,
  styles: Record<string, string>,
  alignmentConfig?: JustifyConfig | AlignConfig,
): string[] => {
  if (!alignmentConfig) {
    return [];
  }

  const config: JustifyConfig | AlignConfig =
    typeof alignmentConfig === 'string' ? { xs: alignmentConfig } : alignmentConfig;

  return Object.entries(config)
    .map(
      ([breakpoint, alignment]) =>
        styles[
          `${prefix}Breakpoint${toUpperCase(breakpoint)}${toUpperCase(alignment)}${toUpperCase(
            suffix,
          )}`
        ],
    )
    .filter(isDefined);
};
