import { FC } from 'react';
import { ArticleTile } from '~/components-blocks/article-tile';
import { FootnoteTile } from '~/components-blocks/footnote-tile';
import { ImageTile } from '~/components-blocks/image-tile';
import { TitleTile } from '~/components-blocks/title-tile';
import { StaticResources } from '~/schema/types';

type ContentProps = {
  content: StaticResources['content'][number];
};

export const Content: FC<ContentProps> = ({ content }) => {
  switch (content.type) {
    case 'Article':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ArticleTile {...content.props} />;

    case 'Footnote':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <FootnoteTile {...content.props} />;

    case 'Image':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ImageTile {...content.props} />;

    case 'Title':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <TitleTile {...content.props} />;
  }
};
