import { FC } from 'react';
import { compileEntries } from './utils/compile-entries.js';
import { GenericDataContent } from '~/libs/types';
import { Flex } from '../flex/flex.js';
import { Typography } from '../typography/typography.js';

export type ArticlePrefaceProps = {
  entries: GenericDataContent[];
  listStyle?: 'enumerate' | 'itemize';
};

export const ArticlePreface: FC<ArticlePrefaceProps> = ({ entries, listStyle }) => (
  <Flex direction="vertical" alignHorizontal="center" gap="md">
    {compileEntries(entries, listStyle).map(({ title, content }) => (
      <Flex direction="vertical" alignHorizontal="center" gap="3xs">
        <Typography variant="body" boldFace>
          {title}
        </Typography>

        <Typography variant="body" textAlign={Boolean(listStyle) ? 'left' : 'center'} markdown>
          {content}
        </Typography>
      </Flex>
    ))}
  </Flex>
);
