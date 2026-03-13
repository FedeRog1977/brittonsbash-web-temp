/* eslint-disable react/jsx-props-no-spreading */

import { FC } from 'react';
import { Body } from '../components/body.js';
import { Books } from '../components/books.js';
import { Images } from '../components/images.js';
import { Section } from '../types/section.js';

export const getContent: FC<Section> = (section) => (
  <>
    {section.component === 'body' ? <Body {...section.content} /> : null}
    {section.component === 'books' ? <Books {...section.content} /> : null}
    {section.component === 'images' ? <Images {...section.content} /> : null}
  </>
);
