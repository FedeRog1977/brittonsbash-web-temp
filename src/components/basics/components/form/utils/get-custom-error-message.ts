import { SpecificValidationError } from '~/services/validator-ajv';
import { CustomError } from '../types/custom-error.js';
import { CustomErrors } from '../types/custom-errors.js';
import { getObjectProperty } from './get-object-property.js';

export const getCustomErrorMessage = <FormValues extends object>(
  customErrors: CustomErrors<FormValues> | undefined,
  fieldPath: string,
  type: SpecificValidationError['type'],
): string | undefined => {
  if (!customErrors) {
    return undefined;
  }

  const errorPath = `properties.${fieldPath.split('.').join('.properties.')}`;

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const customError = getObjectProperty(customErrors, errorPath) as CustomError | undefined;

  if (!customError) {
    return undefined;
  }

  return typeof customError === 'string' ? customError : customError[type];
};
