import { BodyProps } from '../components/body.js';
import { BooksProps } from '../components/books.js';
import { ImagesProps } from '../components/images.js';

type Content<Type extends string, Props extends object> = {
  type: Type;
  props: Props;
};

export type Section =
  | Content<'Body', BodyProps>
  | Content<'Books', BooksProps>
  | Content<'Images', ImagesProps>;
