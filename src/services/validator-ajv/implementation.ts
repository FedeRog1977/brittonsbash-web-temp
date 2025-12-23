import { JSONSchema } from '~/libs/types';
import { ValidationError } from './errors/validation-error.js';
import { ValidateOptions } from './types/validate-options.js';
import { mapValidationError } from './utils/map-validation-error.js';
import { Interface } from './interface.js';
import { Ajv, AnySchema, ValidateFunction, DefinedError } from './forks/ajv.js';
import { ajvErrors } from './forks/ajv-errors.js';

export class Implementation implements Interface {
  private readonly compiledValidators: Map<AnySchema, ValidateFunction> = new Map();

  // eslint-disable-next-line @typescript-eslint/require-await
  public async validate<T>(
    data: unknown,
    schema: JSONSchema<T>,
    { coerceTypes = false }: ValidateOptions = {},
  ): Promise<T> {
    const validator = this.getCompiledValidator(schema, coerceTypes);
    const valid = validator(data);

    if (valid) {
      return data;
    }

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const validationErrors = validator.errors as DefinedError[];
    const errors = validationErrors.map(mapValidationError);

    throw new ValidationError(errors);
  }

  private getCompiledValidator<T>(
    schema: JSONSchema<T>,
    coerceTypes: boolean,
  ): ValidateFunction<T> {
    const compiledValidator = this.compiledValidators.get(schema);

    if (compiledValidator) {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      return compiledValidator as ValidateFunction<T>;
    }

    const ajv = ajvErrors(new Ajv({ allowUnionTypes: true, allErrors: true, coerceTypes }));
    const validator = ajv.compile(schema);
    this.compiledValidators.set(schema, validator);

    return validator;
  }
}
