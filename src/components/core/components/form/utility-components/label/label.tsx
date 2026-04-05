import cx from 'classnames';
import { FC, ReactNode } from 'react';
import { toUpperCase } from '~/utils';
import { Typography } from '../../../typography/typography.js';
import { FieldWidth } from '../../types/field-width.js';
import { getTypographyColor } from '../../utils/get-typography-color.js';
import styles from './label.module.scss.js';

type LabelProps = {
  children: ReactNode;
  htmlFor: string;
  label: string;
  shrink: boolean;
  width?: FieldWidth;
  large?: boolean;
  disabled?: boolean;
  error?: boolean;
};

export const Label: FC<LabelProps> = ({
  children,
  htmlFor,
  label,
  shrink,
  width = 'full',
  large = false,
  disabled = false,
  error = false,
}) => {
  const labelClassNames = cx(styles.label, {
    [styles.labelShrink]: shrink,
  });

  const childrenContainerClassNames = cx(
    styles.childrenContainer,
    styles[`childrenContainerWidth${toUpperCase(width)}`],
    {
      [styles.childrenContainerLarge]: large,
      [styles.childrenContainerError]: error,
    },
  );

  const typographyColor = getTypographyColor(disabled, error, !shrink);

  return (
    <>
      <label htmlFor={htmlFor} className={labelClassNames}>
        <Typography variant="body" color={typographyColor}>
          {label}
        </Typography>
      </label>

      <div className={childrenContainerClassNames}>{children}</div>
    </>
  );
};
