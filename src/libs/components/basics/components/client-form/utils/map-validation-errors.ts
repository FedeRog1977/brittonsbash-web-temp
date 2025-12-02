import { SpecificValidationError } from '~/services/validator-ajv';
import { FieldValues, FieldErrors } from 'react-hook-form';
import { CustomErrors } from '../../form/types/custom-errors.js';
import { getCustomErrorMessage } from '../../form/utils/get-custom-error-message.js';
import { getDefaultErrorMessage } from '../../form/utils/get-default-error-message.js';

export const mapValidationErrors = <FormValues extends FieldValues>(
  errors: SpecificValidationError[],
  customErrors?: CustomErrors<FormValues>,
): FieldErrors<FormValues> =>
  errors.reduce<FieldErrors<FormValues>>((acc, error) => {
    const fieldPath = error.path.substring(1).replaceAll('/', '.');

    return {
      ...acc,
      [fieldPath]: {
        type: error.type,
        message:
          getCustomErrorMessage(customErrors, fieldPath, error.type) ??
          getDefaultErrorMessage(error),
      },
    };
  }, {});
