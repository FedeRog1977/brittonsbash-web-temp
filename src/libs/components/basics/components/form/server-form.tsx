// import { FC, ReactNode } from 'react';
// import { JSONSchema } from '~/libs/types';
// import { CustomErrors } from './types/custom-errors.js';
// import { SubmitHandler } from './types/submit-handler.js';
// import { FormClient } from './util-components/form-client.jsx';
// import { getServerAction } from './utils/get-server-action.js';

// export type ServerFormProps<FormValues extends object> = {
//   children: ReactNode;
//   validationSchema: JSONSchema<FormValues>;
//   customErrors?: CustomErrors<FormValues>;
//   onSubmit: SubmitHandler<FormValues>;
// };

// TODO: I need to remove this from proximity with the client form components
// export const ServerForm = <FormValues extends object>({
//   children,
//   validationSchema,
//   customErrors,
//   onSubmit,
// }: ServerFormProps<FormValues>): ReturnType<FC<ServerFormProps<FormValues>>> => {
//   const action = getServerAction(validationSchema, customErrors, onSubmit);

//   return <FormClient action={action}>{children}</FormClient>;
// };
// eslint-disable-next-line react/jsx-filename-extension
