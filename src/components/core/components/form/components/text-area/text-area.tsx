import { FC } from 'react';
import { TextField } from '../../utility-components/text-field/text-field.jsx';
import { TextAreaProps } from '../../utility-components/text-field/types/text-area-props.js';

export type { TextAreaProps };

export const TextArea: FC<TextAreaProps> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TextField {...props} />
);
