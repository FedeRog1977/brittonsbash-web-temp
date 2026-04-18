import { FC } from 'react';
import { BookshelfProps, Bookshelf } from '~/components-core/bookshelf';
import { Flex, FlexItem } from '~/components-core/flex';

export type BooksProps = {
  bookshelves: BookshelfProps[];
};

export const Books: FC<BooksProps> = ({ bookshelves }) => (
  <Flex direction="horizontal" alignHorizontal="center" alignVertical="top" wrap rowGap="sm">
    {bookshelves.map(({ heading, items }) => (
      <FlexItem key={heading} basis={{ xs: 12, lg: 4 }}>
        <Bookshelf heading={heading} items={items} />
      </FlexItem>
    ))}
  </Flex>
);
