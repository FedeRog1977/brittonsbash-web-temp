'use client';

// import cx from 'classnames';
import { ChangeEvent, FC, useId, useState } from 'react';
// import { useError } from '../../hooks/use-error.js';
// import { FieldHelp } from '../utilities/field-help/field-help.js';
import { SelectOption } from './types/select-option.js';
// import styles from './select.module.scss.js';

export type SelectProps = {
  name: string;
  label: string;
  options: SelectOption[];
  value?: string;
  narrow?: boolean;
  disabled?: boolean;
  helpText?: string;
};

export const Select: FC<SelectProps> = ({
  name,
  label,
  value: initialValue,
  options,
  narrow = false,
  disabled = false,
  helpText,
}) => {
  const id = useId();
  // const error = useError(name);
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(Boolean(initialValue));
  // const shrinkLabel = isFocused || hasValue;

  const handleFocus = (): void => {
    setIsFocused(true);
  };

  const handleBlur = (): void => {
    setIsFocused(false);
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setHasValue(Boolean(event.target.value));
  };

  // const inputWrapperClassnames = cx(styles.inputWrapper, {
  //   [styles.narrow]: narrow,
  // });

  return (
    <div
    // className={styles.inputRoot}
    >
      <div
        // className={inputWrapperClassnames}
        data-testid="input-wrapper"
      >
        {/* <Label
          htmlFor={id}
          label={label}
          shrink={shrinkLabel}
          isFocused={isFocused}
          isDisabled={disabled}
          hasError={Boolean(error)}
        > */}
        <select
          id={id}
          // className={styles.select}
          name={name}
          defaultValue={initialValue}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        >
          <option
            value=""
            // className={styles.placeholder}
          />

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* </Label> */}
      </div>

      {/* <FieldHelp fieldName={name} helpText={helpText} disabled={disabled} indented /> */}
    </div>
  );
};
