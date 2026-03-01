import { FieldValues, FieldErrors } from 'react-hook-form';
import { SpecificValidationError } from '~/services/validator-ajv';
import { CustomErrors } from '../types/custom-errors.js';
import { getCustomErrorMessage } from './get-custom-error-message.js';
import { getDefaultErrorMessage } from './get-default-error-message.js';

export const mapClientValidationErrors = <FormValues extends FieldValues>(
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
