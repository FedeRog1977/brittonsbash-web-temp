import { BookshelfProps, Bookshelf } from '~/libs/components-basics/bookshelf';
import { Flex, FlexItem } from '~/libs/components-basics/flex';
import { generateUniqueKey } from '~/libs/utils';
import { FC } from 'react';

export type BooksProps = { bookshelves: BookshelfProps[] };

export const Books: FC<BooksProps> = ({ bookshelves }) => (
  <Flex direction="horizontal" alignHorizontal="center" alignVertical="top" wrap rowGap="sm">
    {bookshelves.map(({ heading, items }, index) => (
      <FlexItem key={generateUniqueKey(index)} basis={{ xs: 12, lg: 4 }}>
        <Bookshelf heading={heading} items={items} />
      </FlexItem>
    ))}
  </Flex>
);
