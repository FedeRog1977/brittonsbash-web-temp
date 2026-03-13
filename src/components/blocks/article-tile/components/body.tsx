import { ArticleProps, Article } from '~/components-basics/article';
import { Typography } from '~/components-basics/typography';
import { FC } from 'react';
import { formatArticle } from '../utils/format-article.js';

export type BodyProps = { body: string | ArticleProps['sections'] };

export const Body: FC<BodyProps> = ({ body }) =>
  Array.isArray(body) ? (
    <Article
      sections={formatArticle(body, 'body', 'white', false, false, false, 'none', false)}
      textAlign="justify"
      extendParagraphMargins
    />
  ) : (
    <Typography variant="body" textAlign="justify" paragraphMargins>
      {body}
    </Typography>
  );
