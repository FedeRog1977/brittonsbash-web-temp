export const removeDuplicates = <T>(content: T[]) => {
  const result: T[] = [];

  content.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });

  return result;
};
