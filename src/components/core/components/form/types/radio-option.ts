import { RadioProps } from './radio-props.js';

export type RadioOption = Omit<RadioProps, 'name' | 'disabled'>;
