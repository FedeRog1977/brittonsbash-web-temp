import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Common } from './common.js';
import { InputType } from './input-type.js';

export type TextInputProps = Common & {
  type: InputType;
  icon?: IconDefinition;
  reverseIcon?: boolean;
};
