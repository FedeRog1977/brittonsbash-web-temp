import { ValidatorAjv, ValidationError } from '~/services/validator-ajv';
import { JSONSchema } from '~/types';
import { CustomErrors } from '../../../reference/types/custom-errors.js';
import { FormErrors } from '../../../reference/types/form-errors.js';
import { SubmitHandler } from '../../../reference/types/submit-handler.js';
import { createNestedErrors } from '../../../reference/utils/create-nested-errors.js';
import { deepRemoveEmptyProperties } from '../../../reference/utils/deep-remove-entry-properties.js';
import { deepTrim } from '../../../reference/utils/deep-trim.js';
import { mapServerValidationErrors } from '../../../reference/utils/map-server-validation-errors.js';
import { removeServerActionFields } from '../../../reference/utils/remove-server-action-fields.js';

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
