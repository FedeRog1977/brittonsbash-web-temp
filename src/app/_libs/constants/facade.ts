import { baseUrls } from '~/libs/constants';
import { BrittonsBashContentClient } from '~/services/brittonsbash-content';
import { TestImplementation, ClientImplementation } from '../../_facade/index.js';
import { HomeFacade } from '../../_facade/interface.js';

const getFacade = (): HomeFacade => {
  if (process.env['APP_ENV'] === 'local') {
    return new TestImplementation();
  }

  const brittonsBashContentService = new BrittonsBashContentClient(baseUrls.brittonsBashContent);

  return new ClientImplementation({ brittonsBashContentService });
};

export const facade = getFacade();
