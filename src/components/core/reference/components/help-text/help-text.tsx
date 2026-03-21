import { FC, ReactNode } from 'react';
import { Typography } from '../../../components/typography/typography.js';
import { getTypographyColor } from '../../utils/get-typography-color.js';

export type HelpTextProps = {
  children: ReactNode;
  disabled?: boolean;
  error?: boolean;
};

export const HelpText: FC<HelpTextProps> = ({ children, disabled = false, error = false }) => {
  const typographyColor = getTypographyColor(disabled, error);

  return (
    <Typography variant="body" color={typographyColor}>
      {children}
    </Typography>
  );
};
