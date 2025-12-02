import { Flex } from '~/libs/components-basics/flex';
import { Grid, GridItem } from '~/libs/components-basics/grid';
import { Tile } from '~/libs/components-basics/tile';
import { Typography } from '~/libs/components-basics/typography';
import { generateUniqueKey } from '~/libs/utils';
import { FC } from 'react';
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
        ? titleItems.map(({ content, subContent }, index) => (
            <Grid key={generateUniqueKey(index)} justifyContent="center" spacing="xs">
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
        ? bodyItems.map(({ content, subContent }, index) => (
            <Grid key={generateUniqueKey(index)} justifyContent="center" spacing="xs">
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
