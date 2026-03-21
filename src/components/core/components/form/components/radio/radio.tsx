import { FC } from 'react';
import { RadioProps } from '../../types/radio-props.js';
import { CheckboxRadio } from '../../utility-components/checkbox-radio/checkbox-radio.jsx';

export type { RadioProps };

export const Radio: FC<RadioProps> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <CheckboxRadio variant="radio" {...props} />
);
