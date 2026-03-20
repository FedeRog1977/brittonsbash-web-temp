'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, isValidElement, useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { Spacing } from '../../../components/spacing/spacing.jsx';
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
  subLabelBold,
  disabled,
  showError = true,
  ...props
}) => {
  const id = useId();
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<CheckboxRadioFormValues>();
  const controlValue = watch(name);
  const checked =
    props.variant === 'checkbox' ? Boolean(controlValue) : controlValue === props.value;
  const iconDefinition = getIconName(props.variant, checked);
  const typographyColor: TypographyProps['color'] = disabled ? 'lightGrey' : 'white';
  const controlProps = register(name, { disabled });
  const errorText = getErrorText(errors, name) ?? props.error;

  return (
    <div>
      <input
        id={id}
        className={styles.input}
        type={props.variant}
        value={props.variant === 'checkbox' ? undefined : props.value}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...controlProps}
      />

      <label htmlFor={id} className={styles.label}>
        <Spacing marginRight="sm">
          <FontAwesomeIcon icon={iconDefinition} color={typographyColor} />
        </Spacing>

        <div>
          <Typography variant="body" color={typographyColor}>
            {label}
          </Typography>

          {Boolean(subLabel) && typeof subLabel === 'string' && (
            <Typography variant="body" color={typographyColor}>
              {subLabel}
            </Typography>
          )}

          {Boolean(subLabel) && isValidElement(subLabel) && (
            <Typography variant="body" color={typographyColor}>
              {subLabel}
            </Typography>
          )}

          {Boolean(subLabelBold) && (
            <Typography variant="body" color={typographyColor}>
              {subLabelBold}
            </Typography>
          )}
        </div>
      </label>

      {Boolean(showError) && <FieldHelp errorText={errorText} disabled={disabled} />}
    </div>
  );
};
