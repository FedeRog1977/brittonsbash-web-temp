'use client';

import { JSONSchema } from '~/libs/types';
import { ReactNode, FC } from 'react';
import { DeepPartial, useForm, DefaultValues, FormProvider } from 'react-hook-form';
import styles from '../form/components/form-client.module.scss.js';
import { CustomErrors } from '../form/types/custom-errors.js';
import { ajvResolver } from './utils/ajv-resolver.js';

export type FormProps<FormValues extends object> = {
  children: ReactNode;
  defaultValues?: DeepPartial<FormValues>;
  validationSchema?: JSONSchema<FormValues>;
  customErrors?: CustomErrors<FormValues>;
  mode?: 'onSubmit' | 'onBlur' | 'onChange' | 'onTouched' | 'all';
  triggerDefaultValuesValidation?: boolean;
  onSubmit: (formValues: FormValues) => void;
};

export const Form = <FormValues extends object>({
  children,
  defaultValues,
  validationSchema,
  customErrors,
  mode,
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
