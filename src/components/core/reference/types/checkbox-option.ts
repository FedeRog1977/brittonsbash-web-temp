import { CheckboxProps } from './checkbox-props.js';

export type CheckboxOption = Omit<CheckboxProps, 'name' | 'disabled'> & {
  value: string;
};
