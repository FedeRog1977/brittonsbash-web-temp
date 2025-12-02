import { createContext } from 'react';
import { FormErrors } from '../types/form-errors.js';

export type FormContextType = {
  errors: FormErrors;
};

export const FormContext = createContext<FormContextType>({ errors: {} });

export const FormContextProvider = FormContext.Provider;
