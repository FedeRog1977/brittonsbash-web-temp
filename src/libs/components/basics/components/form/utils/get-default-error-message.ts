import { SpecificValidationError } from '~/services/validator-ajv';

export const getDefaultErrorMessage = (error: SpecificValidationError): string => {
  switch (error.type) {
    case 'const':
      return `Should equal ${String(error.allowedValue)}`;

    case 'enum':
      return `Should be one of ${error.allowedValues.join(', ')}`;

    case 'exclusiveMaximum':
      return `Should be less than ${error.limit}`;

    case 'exclusiveMinimum':
      return `Should be greater than ${error.limit}`;

    case 'maximum':
      return `Should be less than or equal to ${error.limit}`;

    case 'maxItems':
      return `Should include ${error.limit} items or fewer`;

    case 'maxLength':
      return `Should be ${error.limit} characters or fewer`;

    case 'maxProperties':
      return `Should have no more than ${error.limit} properties`;

    case 'minimum':
      return `Should be greater than or equal to ${error.limit}`;

    case 'minItems':
      return `Should include ${error.limit} items or more`;

    case 'minLength':
      return `Should be ${error.limit} characters or more`;

    case 'minProperties':
      return `Should have at least ${error.limit} properties`;

    case 'multipleOf':
      return `Should be a multiple of ${error.multipleOf}`;

    case 'pattern':
      return `Should match the pattern ${error.pattern}`;

    case 'required':
      return 'Required';

    case 'type':
      return `Should be a ${error.expectedType}`;

    case 'uniqueItems':
      return 'Should contain only unique items';

    default:
      return 'An error occurred';
  }
};
