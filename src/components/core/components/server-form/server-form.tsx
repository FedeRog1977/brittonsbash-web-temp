import { FC, ReactNode } from 'react';
import { JSONSchema } from '~/types';
import { CustomErrors } from '../form/types/custom-errors.js';
import { SubmitHandler } from '../form/types/submit-handler.js';
import { FormClient } from '../form/utility-components/form-client/form-client.jsx';
import { getServerAction } from './actions/get-server-action.js';

export type ServerFormProps<FormValues extends object> = {
  children: ReactNode;
  validationSchema: JSONSchema<FormValues>;
  customErrors?: CustomErrors<FormValues>;
  onSubmit: SubmitHandler<FormValues>;
};

export const ServerForm = <FormValues extends object>({
  children,
  validationSchema,
  customErrors,
  onSubmit,
}: ServerFormProps<FormValues>): ReturnType<FC<ServerFormProps<FormValues>>> => {
  const action = getServerAction(validationSchema, customErrors, onSubmit);

  return <FormClient action={action}>{children}</FormClient>;
};
