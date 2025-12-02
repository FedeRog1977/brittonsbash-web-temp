import { ENV } from '@libs/types';

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface ProcessEnv {
      APP_ENV: ENV;
    }
  }
}
