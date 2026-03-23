import cx from 'classnames';
import { FC, ReactNode } from 'react';
import { Typography } from '../../../typography/typography.js';
import { getTypographyColor } from '../../utils/get-typography-color.js';
import styles from './label.module.scss.js';

type LabelProps = {
  children: ReactNode;
  htmlFor: string;
  label: string;
  shrink: boolean;
  large?: boolean;
  disabled?: boolean;
  error?: boolean;
};

export const Label: FC<LabelProps> = ({
  children,
  htmlFor,
  label,
  shrink,
  large = false,
  disabled = false,
  error = false,
}) => {
  const labelClassNames = cx(styles.label, {
    [styles.labelShrink]: shrink,
  });

  const childrenContainerClassNames = cx(styles.childrenContainer, {
    [styles.childrenContainerExtended]: large,
    [styles.childrenContainerError]: error,
  });

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
