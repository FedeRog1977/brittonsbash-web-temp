import { baseUrls } from '~/libs/constants';
import { BrittonsBashContentServiceClient } from '~/services/brittonsbash-content';
import { ValidatorAjv } from '~/services/validator-ajv';
import { Implementation as ImplementationClient } from './client/implementation.js';
import { Interface } from './interface.js';
import { Implementation as ImplementationTest } from './test/implementation.js';

const getFacade = (): Interface => {
  if (process.env.APP_ENV === 'local') {
    return new ImplementationTest();
  }

  const validatorAjv = new ValidatorAjv();
  const brittonsBashContentServiceClient = new BrittonsBashContentServiceClient({
    baseUrl: baseUrls.brittonsBashContent,
    validator: validatorAjv,
  });

  return new ImplementationClient({ brittonsBashContentService: brittonsBashContentServiceClient });
};

/**
 * If I ever care to skip build time environment variables,
 * this must only be invoked server-side, not here
 */
export const facade = getFacade();
