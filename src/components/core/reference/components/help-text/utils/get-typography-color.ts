import { TypographyProps } from '../../../../components/typography/typography.js';

export const getTypographyColor = (
  isDisabled: boolean,
  error: boolean,
): TypographyProps['color'] => {
  if (isDisabled) {
    return 'lightGrey';
  }

  if (error) {
    return 'lightBlue';
  }

  return 'white';
};
