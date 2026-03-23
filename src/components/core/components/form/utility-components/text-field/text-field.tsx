import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, FC, useId, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { noop } from '~/utils';
import { Flex } from '../../../flex/flex.jsx';
import { getErrorText } from '../../utils/get-error-text.js';
import { FieldHelp } from '../field-help/field-help.jsx';
import { Label } from '../label/label.jsx';
import styles from './text-field.module.scss.js';
import { TextFieldFormValues } from './types/text-field-form-values.js';
import { TextFieldProps } from './types/text-field-props.js';

export const TextField: FC<TextFieldProps> = (props) => {
  const { name, label, autoComplete, helpText, disabled, type, onChange = noop } = props;
  const id = useId();
  const [isFocused, setIsFocused] = useState(false);
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<TextFieldFormValues>();
  const hasValue = Boolean(watch(name));
  const shrink = isFocused || hasValue;
  const isTextArea = type === 'textarea';
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

  const controlProps = {
    id,
    autoComplete: autoComplete ? 'on' : 'off',
    onFocus: handleFocus,
    ...register(name, { disabled, onBlur: handleBlur, onChange: handleOnChange }),
  };

  return (
    <div className={styles.container}>
      <Flex direction="vertical" gap="2xs">
        <Label
          htmlFor={id}
          label={label}
          shrink={shrink}
          large={isTextArea}
          disabled={disabled}
          error={Boolean(errorText)}
        >
          {isTextArea ? (
            <textarea
              className={styles.textarea}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...controlProps}
            />
          ) : (
            <>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <input className={styles.input} type={props.type} {...controlProps} />

              {props.icon ? (
                <div className={styles.inputIcon}>
                  <FontAwesomeIcon icon={props.icon} color="black" />
                </div>
              ) : null}
            </>
          )}
        </Label>

        <FieldHelp helpText={helpText} errorText={errorText} disabled={disabled} />
      </Flex>
    </div>
  );
};
