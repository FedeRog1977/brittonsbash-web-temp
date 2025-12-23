import { baseUrls } from '~/libs/constants';
import { BrittonsBashContentServiceClient } from '~/services/brittonsbash-content';
import { Implementation as ClientImplementation } from './client/implementation.js';
import { Implementation as TestImplementation } from './test/implementation.js';
import { Interface } from './interface.js';

const getFacade = (): Interface => {
  if (process.env['APP_ENV'] === 'local') {
    return new TestImplementation();
  }

  const brittonsBashContentServiceClient = new BrittonsBashContentServiceClient(
    baseUrls.brittonsBashContentService,
  );

  return new ClientImplementation({ brittonsBashContentServiceClient });
};

/**
 * If I ever care to skip build time environment variables,
 * this must only be invoked server-side, not here
 */
export const facade = getFacade();
