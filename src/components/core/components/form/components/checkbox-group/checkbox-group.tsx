import { FC } from 'react';
import { CheckboxOption } from '../../types/checkbox-option.js';
import { CheckboxRadioGroup } from '../../utility-components/checkbox-radio-group/checkbox-radio-group.jsx';

export type CheckboxGroupProps = {
  name: string;
  options: CheckboxOption[];
};

export const CheckboxGroup: FC<CheckboxGroupProps> = ({ name, options }) => (
  <CheckboxRadioGroup variant="checkbox" name={name} options={options} />
);
