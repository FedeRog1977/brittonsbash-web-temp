import { useState } from 'react';
import { FormErrors } from '../../form/types/form-errors.js';
import { SubmitHandler } from '../../form/types/submit-handler.js';

type UseClientSubmit<T extends object> = {
  handleSubmit: SubmitHandler<T>;
  serverErrors: FormErrors;
  isSubmitting: boolean;
};

export const useClientSubmit = <T extends object>(
  onSubmit: SubmitHandler<T>,
): UseClientSubmit<T> => {
  const [serverErrors, setServerErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit: SubmitHandler<T> = async (formValues): Promise<void> => {
    setServerErrors({});
    setIsSubmitting(true);

    try {
      const errors = await onSubmit(formValues);

      if (errors) {
        setServerErrors(errors);
        setIsSubmitting(false);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return { handleSubmit, serverErrors, isSubmitting };
};
