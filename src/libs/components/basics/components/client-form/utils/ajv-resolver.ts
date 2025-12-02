import { JSONSchema } from '~/libs/types';
import { ValidationError, ValidatorAjv } from '~/services/validator-ajv';
import { FieldValues, ResolverResult } from 'react-hook-form';
import { CustomErrors } from '../../form/types/custom-errors.js';
import { deepRemoveEmptyProperties } from '../../form/utils/deep-remove-entry-properties.js';
import { deepTrim } from '../../form/utils/deep-trim.js';
import { mapValidationErrors } from './map-validation-errors.js';

type AjvResolver<FormValues extends FieldValues> = (
  values: FormValues,
) => Promise<ResolverResult<FormValues>>;

export const ajvResolver = <FormValues extends FieldValues>(
  validationSchema: JSONSchema<FormValues>,
  customErrors?: CustomErrors<FormValues>,
  coerceTypes = false,
): AjvResolver<FormValues> => {
  const validator = new ValidatorAjv();

  return async (formValues: FormValues): Promise<ResolverResult<FormValues>> => {
    const values = deepRemoveEmptyProperties(deepTrim(formValues));

    try {
      await validator.validate(values, validationSchema, { coerceTypes });
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        return {
          values: {},
          errors: mapValidationErrors(error.errors, customErrors),
        };
      }

      throw error;
    }

    return {
      values,
      errors: {},
    };
  };
};
