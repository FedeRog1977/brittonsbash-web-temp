'use client';

import { FC, ReactNode, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { FormContextProvider } from '../context/form-context.js';
import { FormErrors } from '../types/form-errors.js';
import styles from './form-client.module.scss.js';
import { FormContent } from './form-content.js';

export type FormClientProps = {
  children: ReactNode;
  action: (prevErrors: FormErrors, formData: FormData) => Promise<FormErrors>;
};

export const FormClient: FC<FormClientProps> = ({ children, action }) => {
  const [errors, formAction] = useFormState(action, {});

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      window.scrollTo({ top: 0 });
    }
  }, [errors]);

  return (
    <FormContextProvider value={{ errors }}>
      <form className={styles.form} action={formAction}>
        <FormContent>{children}</FormContent>
      </form>
    </FormContextProvider>
  );
};
