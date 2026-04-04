'use client';

import { ReactNode, FC } from 'react';
import { DeepPartial, useForm, DefaultValues, FormProvider } from 'react-hook-form';
import { JSONSchema } from '~/types';
import { CustomErrors } from './types/custom-errors.js';
import styles from './utility-components/form-client/form-client.module.scss.js';
import { ajvResolver } from './utils/ajv-resolver.js';

export type FormProps<FormValues extends object> = {
  children: ReactNode;
  defaultValues?: DeepPartial<FormValues>;
  validationSchema?: JSONSchema<FormValues>;
  customErrors?: CustomErrors<FormValues>;
  mode?: 'onSubmit' | 'onBlur' | 'onChange' | 'onTouched';
  triggerDefaultValuesValidation?: boolean;
  onSubmit: (formValues: FormValues) => void;
};

export const Form = <FormValues extends object>({
  children,
  defaultValues,
  validationSchema,
  customErrors,
  mode = 'onTouched',
  onSubmit,
}: FormProps<FormValues>): ReturnType<FC<FormProps<FormValues>>> => {
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
