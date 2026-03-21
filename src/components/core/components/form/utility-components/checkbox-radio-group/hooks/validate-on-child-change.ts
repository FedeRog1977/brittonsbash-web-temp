import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

export const useValidateOnChildChange = (fieldName: string, childFieldNames: string[]): void => {
  const {
    watch,
    trigger,
    formState: { isSubmitted },
  } = useFormContext();

  useEffect(() => {
    const subscription = watch(async (_value, field) => {
      // Assume onSubmit validation initially, followed by onChange validation. React Hook Form
      // doesn't seem to provide a way to check whether the form has been validated
      if (isSubmitted && field.name && childFieldNames.includes(field.name)) {
        await trigger(fieldName);
      }
    });

    return subscription.unsubscribe;
  }, [childFieldNames, fieldName, isSubmitted, trigger, watch]);
};
