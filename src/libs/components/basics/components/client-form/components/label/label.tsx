import cx from 'classnames';
import { FC, ReactNode } from 'react';
import { Typography } from '../../../typography/typography.js';
import styles from './label.module.scss.js';
import { Spacing } from '../../../spacing/spacing.js';

export type LabelProps = {
  children: ReactNode;
  htmlFor: string;
  label: string;
  errorText?: string;
  shrink: boolean;
  isTextArea?: boolean;
  isFocused?: boolean;
  isDisabled?: boolean;
  hasError?: boolean;
};

export const Label: FC<LabelProps> = ({
  children,
  htmlFor,
  label,
  errorText,
  shrink,
  isTextArea = false,
  isFocused,
  isDisabled,
  hasError,
}) => {
  // const labelClassnames = cx(styles.label, {
  //   [styles.labelForInput]: !isTextArea,
  //   [styles.labelForTextArea]: isTextArea,
  //   [styles.labelShrink]: shrink,
  //   [styles.labelFocused]: isFocused,
  //   [styles.labelDisabled]: isDisabled,
  //   [styles.labelError]: hasError,
  // });

  const inputContainerClassnames = cx(styles.inputContainer, {
    [styles.inputContainerFocused]: isFocused,
    [styles.inputContainerError]: hasError,
    [styles.inputContainerDisabled]: isDisabled,
  });

  return (
    <>
      {/* <label htmlFor={htmlFor} className={labelClassnames}> */}
      <label htmlFor={htmlFor}>
        <Spacing marginBottom="2xs">
          <Typography variant="body" color={isDisabled ? 'lightGrey' : 'white'}>
            {label}
          </Typography>
        </Spacing>
      </label>

      <div className={inputContainerClassnames}>{children}</div>
      {/* {children} */}

      {errorText ? (
        <Spacing marginTop="2xs">
          <Typography variant="footnote" color="white">
            {errorText}
          </Typography>
        </Spacing>
      ) : null}
    </>
  );
};
