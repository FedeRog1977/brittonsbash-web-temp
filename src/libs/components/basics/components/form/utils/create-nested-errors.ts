import { setObjectProperty } from './set-object-property.js';

export const createNestedErrors = (flatErrors: object): object =>
  Object.entries(flatErrors).reduce((acc, [key, value]) => {
    setObjectProperty(acc, key, value);

    return acc;
  }, {});
