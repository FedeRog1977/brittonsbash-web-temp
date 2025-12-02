import { JSONSchema } from '~/libs/types';
import { FC, ReactNode } from 'react';
import { FormClient } from './components/form-client.js';
import { CustomErrors } from './types/custom-errors.js';
import { SubmitHandler } from './types/submit-handler.js';
import { getFormServerAction } from './utils/get-form-server-action.js';

export type FormProps<FormValues extends object> = {
  children: ReactNode;
  validationSchema: JSONSchema<FormValues>;
  customErrors?: CustomErrors<FormValues>;
  onSubmit: SubmitHandler<FormValues>;
};

export const Form = <FormValues extends object>({
  children,
  validationSchema,
  customErrors,
  onSubmit,
}: FormProps<FormValues>): ReturnType<FC<FormProps<FormValues>>> => {
  const action = getFormServerAction(validationSchema, customErrors, onSubmit);

  return <FormClient action={action}>{children}</FormClient>;
};
