import { FormErrors } from './form-errors.js';

export type SubmitHandler<FormValues extends object> = (
  values: FormValues,
) => Promise<FormErrors> | Promise<void>;
