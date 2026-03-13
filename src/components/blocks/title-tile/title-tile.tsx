import { FC } from 'react';
import { Flex } from '~/components-basics/flex';
import { Grid, GridItem } from '~/components-basics/grid';
import { Tile } from '~/components-basics/tile';
import { Typography } from '~/components-basics/typography';
import { Items } from './types/items.js';

export type TitleTileProps = {
  heading?: string;
  titleItems?: Items[];
  bodyItems?: Items[];
};

export const TitleTile: FC<TitleTileProps> = ({ heading, titleItems, bodyItems }) => (
  <Tile type="clear">
    <Flex direction="vertical" gap="xs">
      {heading ? (
        <Typography variant="h3" textAlign="center">
          {heading}
        </Typography>
      ) : null}

      {titleItems
        ? titleItems.map(({ content, subContent }) => (
            <Grid key={content} justifyContent="center" spacing="xs">
              <GridItem xs={5}>
                <Typography variant="h3" boldFace textAlign="right">
                  {content}
                </Typography>
              </GridItem>
              <GridItem xs={5}>
                <Typography variant="h3" markdown>
                  {subContent}
                </Typography>
              </GridItem>
            </Grid>
          ))
        : null}

      {bodyItems
        ? bodyItems.map(({ content, subContent }) => (
            <Grid key={content} justifyContent="center" spacing="xs">
              <GridItem xs={5}>
                <Typography variant="body" boldFace textAlign="right">
                  {content}
                </Typography>
              </GridItem>
              <GridItem xs={5}>
                <Typography variant="body" markdown>
                  {subContent}
                </Typography>
              </GridItem>
            </Grid>
          ))
        : null}
    </Flex>
  </Tile>
);
