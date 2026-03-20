import { FC } from 'react';
import { CheckboxRadio, CheckboxProps } from '../../../../reference/index.js';

export const Checkbox: FC<CheckboxProps> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <CheckboxRadio variant="checkbox" {...props} />
);
