import { toUpperCase, isDefined } from '~/libs/utils';
import { SpacingConfig } from '../types/spacing-config.js';

export const getResponsiveSpacingClassNames = (
  prefix: string,
  styles: Record<string, string>,
  spacingConfig?: SpacingConfig,
): string[] => {
  if (!spacingConfig) {
    return [];
  }

  const config: SpacingConfig =
    typeof spacingConfig === 'string' ? { xs: spacingConfig } : spacingConfig;

  return Object.entries(config)
    .map(
      ([breakpoint, spacing]) =>
        styles[`${prefix}Breakpoint${toUpperCase(breakpoint)}Spacing${toUpperCase(spacing)}`],
    )
    .filter(isDefined);
};
