import { ENV } from '~/types';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_ENV: ENV;
    }
  }
}
