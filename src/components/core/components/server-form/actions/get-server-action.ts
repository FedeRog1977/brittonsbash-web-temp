import { ValidatorAjv, ValidationError } from '~/services/validator-ajv';
import { JSONSchema } from '~/types';
import { CustomErrors } from '../../form/types/custom-errors.js';
import { FormErrors } from '../../form/types/form-errors.js';
import { SubmitHandler } from '../../form/types/submit-handler.js';
import { mapServerValidationErrors } from '../../form/utils/map-server-validation-errors.js';
import { createNestedErrors } from '../utils/create-nested-errors.js';
import { deepRemoveEmptyProperties } from '../utils/deep-remove-entry-properties.js';
import { deepTrim } from '../utils/deep-trim.js';
import { removeServerActionFields } from '../utils/remove-server-action-fields.js';

type FormAction = (prevState: FormErrors, formData: FormData) => Promise<FormErrors>;

export const getServerAction =
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
        return mapServerValidationErrors(error.errors, customErrors);
      }

      throw error;
    }
  };
