import { FC } from 'react';
import { CheckboxRadioGroup, RadioOption } from '../../../../reference/index.js';

export type RadioGroupProps = {
  name: string;
  options: RadioOption[];
};

export const RadioGroup: FC<RadioGroupProps> = ({ name, options }) => (
  <CheckboxRadioGroup variant="radio" name={name} options={options} />
);
