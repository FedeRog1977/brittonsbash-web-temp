import { assertType } from './assert-type.js';

export const deepTrim = <T>(data: T): T => {
  if (typeof data === 'string') {
    return assertType<T>(data.trim());
  }

  if (Array.isArray(data)) {
    return assertType<T>(data.map(deepTrim));
  }

  if (typeof data === 'object' && data !== null) {
    return Object.entries(data).reduce<T>(
      (acc, [key, value]: [string, unknown]) => ({
        ...acc,
        [key]: deepTrim(value),
      }),
      assertType<T>({}),
    );
  }

  return data;
};
