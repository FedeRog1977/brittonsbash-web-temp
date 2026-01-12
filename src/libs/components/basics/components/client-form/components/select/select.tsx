'use client';

import { FC, useId, useState, ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from '../label/label.js';
import styles from './select.module.scss.js';
import { SelectOption } from './types/select-option.js';
import { getErrorText } from './utils/get-error-text.js';

export type SelectProps = {
  name: string;
  label: string;
  options: SelectOption[];
  disabled?: boolean;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export const Select: FC<SelectProps> = ({
  name,
  label,
  options,
  disabled = false,
  defaultValue,
  // eslint-disable-next-line react/no-object-type-as-default-prop, @typescript-eslint/no-empty-function
  onChange = (): void => {},
}) => {
  const id = useId();
  const [isFocused, setIsFocused] = useState(false);
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const hasValue = Boolean(watch(name));
  const shrinkLabel = isFocused || hasValue || Boolean(defaultValue);
  const errorText = getErrorText(errors, name);

  const handleFocus = (): void => {
    setIsFocused(true);
  };

  const handleBlur = (): void => {
    setIsFocused(false);
  };

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange(event.target.value);
  };

  const controlProps = register(name, {
    disabled,
    onBlur: handleBlur,
    onChange: handleOnChange,
  });

  return (
    <div className={styles.container}>
      <Label
        htmlFor={id}
        label={label}
        errorText={errorText}
        shrink={shrinkLabel}
        isFocused={isFocused}
        isDisabled={disabled}
        hasError={Boolean(errorText) && !disabled}
      >
        <select
          id={id}
          className={styles.select}
          onFocus={handleFocus}
          defaultValue={defaultValue}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...controlProps}
        >
          <option value={defaultValue}>{defaultValue}</option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Label>
    </div>
  );
};
