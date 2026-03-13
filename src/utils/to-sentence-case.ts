export const toSentenceCase = (string: string): string =>
  string.replace(
    /\w\S*/g,
    (txt: string) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase(),
  );
