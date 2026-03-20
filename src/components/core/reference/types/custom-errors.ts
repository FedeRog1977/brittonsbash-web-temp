import { CustomError } from './custom-error.js';

export type CustomErrors<T extends object> = {
  properties: {
    [K in keyof T]?: T[K] extends object ? CustomError | CustomErrors<T[K]> : CustomError;
  };
};
