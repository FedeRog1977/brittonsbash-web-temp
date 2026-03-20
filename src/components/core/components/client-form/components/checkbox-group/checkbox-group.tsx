import { FC } from 'react';
import { CheckboxOption, CheckboxRadioGroup } from '../../../../reference/index.js';

export type CheckboxGroupProps = {
  name: string;
  options: CheckboxOption[];
};

export const CheckboxGroup: FC<CheckboxGroupProps> = ({ name, options }) => (
  <CheckboxRadioGroup variant="checkbox" name={name} options={options} />
);
