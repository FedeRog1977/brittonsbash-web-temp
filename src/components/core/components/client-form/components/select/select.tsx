'use client';

import { FC, useId, useState, ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { noop } from '~/utils';
import { FieldHelp, getErrorText, Label } from '../../../../reference/index.js';
import { Flex } from '../../../flex/flex.jsx';
import styles from './select.module.scss.js';
import { SelectOption } from './types/select-option.js';

export type SelectProps = {
  name: string;
  label: string;
  options?: SelectOption[];
  helpText?: string;
  disabled?: boolean;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export const Select: FC<SelectProps> = ({
  name,
  label,
  options,
  helpText,
  disabled = false,
  defaultValue,
  onChange = noop,
}) => {
  const id = useId();
  const [isFocused, setIsFocused] = useState(false);
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const hasValue = Boolean(watch(name));
  const shrink = isFocused || hasValue || Boolean(defaultValue);
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
      <Flex direction="vertical" gap="2xs">
        <div className={styles.wrapper}>
          <Label
            htmlFor={id}
            label={label}
            shrink={shrink}
            disabled={disabled}
            error={Boolean(errorText)}
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

              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Label>
        </div>

        <FieldHelp helpText={helpText} errorText={errorText} disabled={disabled} />
      </Flex>
    </div>
  );
};
