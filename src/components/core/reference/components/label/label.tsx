import cx from 'classnames';
import { FC, ReactNode } from 'react';
import { Typography } from '../../../components/typography/typography.js';
import { getTypographyColor } from '../../utils/get-typography-color.js';
import styles from './label.module.scss.js';

type LabelProps = {
  children: ReactNode;
  htmlFor: string;
  label: string;
  shrink: boolean;
  disabled?: boolean;
  error?: boolean;
};

export const Label: FC<LabelProps> = ({
  children,
  htmlFor,
  label,
  shrink,
  disabled = false,
  error = false,
}) => {
  const labelClassNames = cx(styles.label, {
    [styles.labelShrink]: shrink,
    [styles.labelError]: error,
  });

  const childrenContainerClassNames = cx(styles.childrenContainer, {
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
