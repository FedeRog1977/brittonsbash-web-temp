export const removeServerActionFields = (obj: object): object =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => !key.startsWith('$ACTION_')));
