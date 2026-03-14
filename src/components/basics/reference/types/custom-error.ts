import { SpecificValidationError } from '~/services/validator-ajv';

export type CustomError = string | Partial<Record<SpecificValidationError['type'], string>>;
