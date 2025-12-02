import { FC } from 'react';
import { generateUniqueKey } from '~/libs/utils';
import { useShowElement } from '~/libs/hooks';
import { Background } from '../background/background.js';
import { Button } from '../client-form/components/button/button.js';
import { Flex } from '../flex/flex.js';
import { Spacing } from '../spacing/spacing.js';
import { Typography } from '../typography/typography.js';

export type BookshelfProps = {
  heading: string;
  items: string[];
};

export const Bookshelf: FC<BookshelfProps> = ({ heading, items }) => {
  const { showElement, setShowElement } = useShowElement();

  return (
    <>
      <Button
        variant="inverse"
        typeVariant="h3"
        typeColor={showElement ? 'lightBlue' : undefined}
        transition
        onClick={() => setShowElement(!showElement)}
        width="full"
      >
        {heading}
      </Button>

      {showElement ? (
        <Background color="transparent">
          <Spacing paddingY="sm">
            <Flex direction="vertical" gap="sm">
              {items.map((item, index) => (
                <Typography
                  key={generateUniqueKey(index)}
                  variant="body"
                  textAlign="center"
                  markdown
                >
                  {item}
                </Typography>
              ))}
            </Flex>
          </Spacing>
        </Background>
      ) : null}
    </>
  );
};
