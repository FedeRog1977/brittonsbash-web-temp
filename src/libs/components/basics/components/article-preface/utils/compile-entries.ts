import { GenericDataContent } from '~/libs/types';

type ArticlePrefaceParsed = Pick<GenericDataContent, 'title'> & {
  content: string;
};

export const compileEntries = (
  entries: GenericDataContent[],
  listStyle?: 'enumerate' | 'itemize',
): ArticlePrefaceParsed[] => {
  const entriesParsed: ArticlePrefaceParsed[] = [];

  entries.forEach((entry) => {
    if (entry?.title && entry.content) {
      const contentParsed = Array.isArray(entry.content)
        ? listStyle === 'enumerate'
          ? entry.content
              .map((entryIteration, index) => `${index + 1}. ${entryIteration}`)
              .join('\n\n')
          : listStyle === 'itemize'
          ? entry.content.map((entryIteration) => `* ${entryIteration}`).join('\n\n')
          : entry.content.join(', ')
        : entry.content;

      entriesParsed.push({
        title: entry.title,
        content: contentParsed,
      });
    }
  });

  return entriesParsed;
};
