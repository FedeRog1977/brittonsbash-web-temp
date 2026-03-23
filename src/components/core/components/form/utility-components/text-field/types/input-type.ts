import { HTMLInputTypeAttribute } from 'react';

export type InputType = Extract<HTMLInputTypeAttribute, 'text' | 'date' | 'email' | 'password'>;
