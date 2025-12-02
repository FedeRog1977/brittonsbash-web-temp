import { SpecificValidationError } from '~/services/validator-ajv';
import { CustomErrors } from '../types/custom-errors.js';
import { FormErrors } from '../types/form-errors.js';
import { getCustomErrorMessage } from './get-custom-error-message.js';
import { getDefaultErrorMessage } from './get-default-error-message.js';

export const mapValidationErrors = <FormValues extends object>(
  errors: SpecificValidationError[],
  customErrors?: CustomErrors<FormValues>,
): FormErrors =>
  errors.reduce<FormErrors>((acc, error) => {
    const fieldPath = error.path.substring(1).replaceAll('/', '.');

    return {
      ...acc,
      [fieldPath]:
        getCustomErrorMessage(customErrors, fieldPath, error.type) ?? getDefaultErrorMessage(error),
    };
  }, {});
