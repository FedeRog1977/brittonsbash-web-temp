import { ArticleProps, Article } from '~/libs/components-basics/article';
import { Tile } from '~/libs/components-basics/tile';
import { Typography } from '~/libs/components-basics/typography';
import { FC } from 'react';
import { formatArticle } from '../article-tile/utils/format-article.js';

export type FootnoteTileProps = {
  content: string | ArticleProps['sections'];
};

export const FootnoteTile: FC<FootnoteTileProps> = ({ content }) => (
  <Tile type="clear">
    {Array.isArray(content) ? (
      <Article
        // Not the ideal import, but it doesn't belong in:
        // @libs/utils, as it relies on types from @libs/components-basics
        // or @libs/components-basics/reference/utils, as it must be used outwith @libs/components-basics
        sections={formatArticle(content, 'footnote', 'white', false, false, false, 'none', false)}
        textAlign="justify"
      />
    ) : (
      <Typography variant="footnote" textAlign="justify" markdown>
        {content}
      </Typography>
    )}
  </Tile>
);
