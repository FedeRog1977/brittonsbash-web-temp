import { BodyProps } from '../components/body.js';
import { BooksProps } from '../components/books.js';
import { ImagesProps } from '../components/images.js';

type OrderedSection<T extends string, P extends object> = {
  component: T;
  content: P;
};

export type Section =
  | OrderedSection<'body', BodyProps>
  | OrderedSection<'books', BooksProps>
  | OrderedSection<'images', ImagesProps>;
