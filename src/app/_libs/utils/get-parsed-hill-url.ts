import { HillType } from '~/libs/types';

export const getParsedHillUrl = (hill: string, hillType: HillType): string => {
  const parsedHill = hill
    .replace(' ', '-')
    .replace(' ', '-')
    .replace('(', '')
    .replace(')', '')
    .replace("'", '')
    .replace('à', 'a')
    .replace('ò', 'o')
    .replace('ù', 'u')
    .toLocaleLowerCase();
  const parsedHillUrl = `https://www.walkhighlands.co.uk/${hillType}/${parsedHill}.php`;

  return parsedHillUrl;
};
