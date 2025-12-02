import { JSONSchema } from '~/libs/types';
import { ValidatorAjv, ValidationError } from '~/services/validator-ajv';
import { CustomErrors } from '../types/custom-errors.js';
import { FormErrors } from '../types/form-errors.js';
import { SubmitHandler } from '../types/submit-handler.js';
import { createNestedErrors } from './create-nested-errors.js';
import { deepTrim } from './deep-trim.js';
import { deepRemoveEmptyProperties } from './deep-remove-entry-properties.js';
import { mapValidationErrors } from './map-validation-errors.js';
import { removeServerActionFields } from './remove-server-action-fields.js';

type FormAction = (prevState: FormErrors, formData: FormData) => Promise<FormErrors>;

export const getFormServerAction =
  <FormValues extends object>(
    validationSchema: JSONSchema<FormValues>,
    customErrors: CustomErrors<FormValues> | undefined,
    onSubmit: SubmitHandler<FormValues>,
  ): FormAction =>
  async (_prevState, formData) => {
    'use server';

    const serverActionFields = removeServerActionFields(Object.fromEntries(formData.entries()));
    const nestedErrors = createNestedErrors(serverActionFields);
    const formValues = deepRemoveEmptyProperties(deepTrim(nestedErrors));

    const validator = new ValidatorAjv();

    try {
      const validFormValues = await validator.validate(formValues, validationSchema, {
        coerceTypes: true,
      });

      const formErrors = await onSubmit(validFormValues);

      return formErrors || {};
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        return mapValidationErrors(error.errors, customErrors);
      }

      throw error;
    }
  };
