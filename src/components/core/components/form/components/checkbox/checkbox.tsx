import { FC } from 'react';
import { CheckboxProps } from '../../types/checkbox-props.js';
import { CheckboxRadio } from '../../utility-components/checkbox-radio/checkbox-radio.jsx';

export type { CheckboxProps };

export const Checkbox: FC<CheckboxProps> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <CheckboxRadio variant="checkbox" {...props} />
);
