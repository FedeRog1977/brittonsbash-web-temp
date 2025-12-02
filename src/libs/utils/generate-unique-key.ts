export const generateUniqueKey = (index?: number): string => {
  const characterSet = 'abcdefghijklmnopqrstuvwxyzZ0123456789';

  let randomString = '';

  for (let i = 0; i < 6; i += 1) {
    randomString += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }

  return `${randomString.toUpperCase()}${index ?? ''}`;
};
