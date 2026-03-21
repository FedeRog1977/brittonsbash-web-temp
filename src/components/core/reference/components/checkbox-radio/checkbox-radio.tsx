'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { Flex } from '../../../components/flex/flex.jsx';
import { Typography, TypographyProps } from '../../../components/typography/typography.js';
import { CheckboxProps } from '../../types/checkbox-props.js';
import { RadioProps } from '../../types/radio-props.js';
import { getErrorText } from '../../utils/get-error-text.js';
import { FieldHelp } from '../field-help/index.js';
import styles from './checkbox-radio.module.scss.js';
import { CheckboxRadioFormValues } from './types/checkbox-radio-form-values.js';
import { Variant } from './types/variant.js';
import { getIconName } from './utils/get-icon-name.js';

// Exported only for use in sibling `checkbox-radio-group`
// Neither this `CheckboxRadioProps` nor `CheckboxRadioProps` of the `types` directory
// are exported beyond this level, only `CheckboxProps` and `RadioProps`
export type CheckboxRadioProps =
  | ({ variant: Extract<Variant, 'checkbox'> } & CheckboxProps)
  | ({ variant: Extract<Variant, 'radio'> } & RadioProps);

export const CheckboxRadio: FC<CheckboxRadioProps> = ({
  name,
  label,
  subLabel,
  disabled,
  ...props
}) => {
  const id = useId();
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<CheckboxRadioFormValues>();
  const controlProps = register(name, { disabled });
  const controlValue = watch(name);
  const checked =
    props.variant === 'checkbox'
      ? Boolean(controlValue?.toString() === 'on')
      : controlValue === props.value;

  const iconDefinition = getIconName(props.variant, checked);
  const typographyColor: TypographyProps['color'] = disabled ? 'lightGrey' : 'white';

  const errorText = getErrorText(errors, name) ?? props.error;

  return (
    <Flex direction="vertical" gap="2xs">
      <label htmlFor={id}>
        <input
          id={id}
          className={styles.input}
          type={props.variant}
          value={props.variant === 'checkbox' ? undefined : props.value}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...controlProps}
        />

        <Flex direction="horizontal" alignVertical="center" gap="xs">
          <FontAwesomeIcon icon={iconDefinition} color={typographyColor} />

          <Flex direction="vertical" gap="3xs">
            <Typography variant="body" color={typographyColor}>
              {label}
            </Typography>

            {subLabel ? (
              <Typography variant="tiny" color={typographyColor}>
                {subLabel}
              </Typography>
            ) : null}
          </Flex>
        </Flex>
      </label>

      <FieldHelp errorText={errorText} disabled={disabled} />
    </Flex>
  );
};
