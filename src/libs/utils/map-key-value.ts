import { toSentenceCase } from './to-sentence-case.js';

type Type = 'key' | 'value' | 'keyValue';

export const mapKeyValue = (type: Type, object: object, array: unknown[]): unknown[] => {
  switch (type) {
    case 'key':
      for (const [key] of Object.entries(object)) {
        array.push(toSentenceCase(key.toString()));
      }

      return array;

    case 'value':
      for (const [_, value] of Object.entries(object)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        array.push(value.toString());
      }

      return array;

    case 'keyValue':
      for (const [key, value] of Object.entries(object)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        array.push({ [key.toString()]: [value.toString()] });
      }

      return array;
  }
};
