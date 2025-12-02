import { DeepPartial } from '~/libs/types';
import { isDefined } from '~/libs/utils';
import { assertType } from './assert-type.js';

export const deepRemoveEmptyProperties = <T>(data: T): DeepPartial<T> => {
  if (Array.isArray(data)) {
    return assertType<DeepPartial<T>>(data.map(deepRemoveEmptyProperties));
  }

  if (typeof data === 'object' && data !== null) {
    return Object.entries(data).reduce<DeepPartial<T>>(
      (acc, [key, value]: [string, unknown]) => ({
        ...acc,
        ...(isDefined(value) && value !== '' ? { [key]: deepRemoveEmptyProperties(value) } : {}),
      }),
      assertType<DeepPartial<T>>({}),
    );
  }

  return assertType<DeepPartial<T>>(data);
};
