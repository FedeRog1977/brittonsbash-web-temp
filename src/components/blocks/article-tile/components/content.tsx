import { FC } from 'react';
import { Section } from '../types/section.js';
import { Body } from './body.jsx';
import { Books } from './books.jsx';
import { Images } from './images.jsx';

type ContentProps = {
  content: Section;
};

export const Content: FC<ContentProps> = ({ content }) => {
  switch (content.type) {
    case 'Body':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <Body {...content.props} />;

    case 'Books':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <Books {...content.props} />;

    case 'Images':
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <Images {...content.props} />;
  }
};
