import { useState } from 'react';
import { SubmitHandler } from '../../form/types/submit-handler.js';

type UseClientSubmit<T extends object> = {
  handleSubmit: SubmitHandler<T>;
  isSubmitting: boolean;
};

export const useClientSubmit = <T extends object>(
  onSubmit: SubmitHandler<T>,
): UseClientSubmit<T> => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit: SubmitHandler<T> = async (formValues): Promise<void> => {
    setIsSubmitting(true);
    await onSubmit(formValues);
  };

  return { handleSubmit, isSubmitting };
};
