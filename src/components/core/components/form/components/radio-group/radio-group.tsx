import { FC } from 'react';
import { RadioOption } from '../../types/radio-option.js';
import { CheckboxRadioGroup } from '../../utility-components/checkbox-radio-group/checkbox-radio-group.jsx';

export type RadioGroupProps = {
  name: string;
  options: RadioOption[];
};

export const RadioGroup: FC<RadioGroupProps> = ({ name, options }) => (
  <CheckboxRadioGroup variant="radio" name={name} options={options} />
);
