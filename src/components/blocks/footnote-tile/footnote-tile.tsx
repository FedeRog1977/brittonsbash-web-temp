import { FC } from 'react';
import { ArticleProps, Article } from '~/components-basics/article';
import { Tile } from '~/components-basics/tile';
import { Typography } from '~/components-basics/typography';
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
