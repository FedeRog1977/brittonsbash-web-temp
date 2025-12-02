import { toUpperCase } from '~/libs/utils';

export const getPositionClassName = (
  styles: Record<string, string>,
  position?: string,
): string | undefined => (position ? styles[`position${toUpperCase(position)}`] : undefined);
