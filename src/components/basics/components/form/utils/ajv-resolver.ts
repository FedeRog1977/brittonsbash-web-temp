import { FieldValues, ResolverResult } from 'react-hook-form';
import { JSONSchema } from '~/types';
import { ValidationError, ValidatorAjv } from '~/services/validator-ajv';
import { CustomErrors } from '../types/custom-errors.js';
import { deepRemoveEmptyProperties } from './deep-remove-entry-properties.js';
import { deepTrim } from './deep-trim.js';
import { mapClientValidationErrors } from './map-client-validation-errors.js';

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
          errors: mapClientValidationErrors(error.errors, customErrors),
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
