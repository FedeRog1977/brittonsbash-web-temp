import { FC } from 'react';
import { TextField } from '../../utility-components/text-field/text-field.jsx';
import { TextInputProps } from '../../utility-components/text-field/types/text-input-props.js';

export type { TextInputProps };

export const TextInput: FC<TextInputProps> = ({ type = 'text', ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TextField type={type} {...props} />
);
