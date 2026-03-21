'use client';

import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Flex } from '../../../components/flex/index.js';
import { getErrorText } from '../../utils/get-error-text.js';
import { CheckboxRadio, CheckboxRadioProps } from '../checkbox-radio/checkbox-radio.jsx';
import { FieldHelp } from '../field-help/field-help.jsx';
import { useValidateOnChildChange } from './hooks/validate-on-child-change.js';
import { CheckboxRadioOption } from './types/checkbox-radio-option.js';
import { getChildFieldName } from './utils/get-child-field-name.js';

type CheckboxRadioGroupProps = {
  variant: CheckboxRadioProps['variant'];
  name: string;
  options: CheckboxRadioOption[];
};

export const CheckboxRadioGroup: FC<CheckboxRadioGroupProps> = ({ name, ...props }) => {
  const {
    formState: { errors },
  } = useFormContext();

  const childFieldNames =
    props.variant === 'checkbox'
      ? props.options.map((option) => getChildFieldName(name, option.value))
      : [];

  useValidateOnChildChange(name, childFieldNames);

  const errorText = getErrorText(errors, name);

  return (
    <div>
      <Flex direction="vertical" gap="2xs">
        {props.options.map((option) =>
          props.variant === 'checkbox' ? (
            <CheckboxRadio
              key={option.value}
              variant="checkbox"
              name={getChildFieldName(name, option.value)}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...option}
            />
          ) : (
            <CheckboxRadio
              key={option.value}
              variant="radio"
              name={name}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...option}
            />
          ),
        )}

        <FieldHelp errorText={errorText} />
      </Flex>
    </div>
  );
};
