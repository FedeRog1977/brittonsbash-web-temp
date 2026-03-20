import { FC } from 'react';
import { CheckboxRadio, RadioProps } from '../../../../reference/index.js';

export const Radio: FC<RadioProps> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <CheckboxRadio variant="radio" {...props} />
);
