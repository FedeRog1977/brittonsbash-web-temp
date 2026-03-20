'use client';

import { ReactNode, FC } from 'react';
import { DeepPartial, useForm, DefaultValues, FormProvider } from 'react-hook-form';
import { JSONSchema } from '~/types';
import styles from '../../reference/components/form-client/form-client.module.scss.js';
import { CustomErrors, ajvResolver } from '../../reference/index.js';

export type ClientFormProps<FormValues extends object> = {
  children: ReactNode;
  defaultValues?: DeepPartial<FormValues>;
  validationSchema?: JSONSchema<FormValues>;
  customErrors?: CustomErrors<FormValues>;
  mode?: 'onSubmit' | 'onBlur' | 'onChange' | 'onTouched';
  triggerDefaultValuesValidation?: boolean;
  onSubmit: (formValues: FormValues) => void;
};

export const ClientForm = <FormValues extends object>({
  children,
  defaultValues,
  validationSchema,
  customErrors,
  mode,
  onSubmit,
}: ClientFormProps<FormValues>): ReturnType<FC<ClientFormProps<FormValues>>> => {
  const methods = useForm({
    shouldUnregister: true,
    mode,
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    defaultValues: defaultValues as unknown as DefaultValues<FormValues> | undefined,
    resolver: validationSchema && ajvResolver(validationSchema, customErrors),
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
