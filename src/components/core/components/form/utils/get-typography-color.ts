import { Color } from '../../../types/color.js';

export const getTypographyColor = (
  disabled: boolean,
  error: boolean,
  fieldOverlay?: boolean,
): Color => {
  if (disabled) {
    return 'lightGrey';
  }

  if (error) {
    return 'red';
  }

  if (fieldOverlay) {
    return 'darkerGrey';
  }

  return 'white';
};
