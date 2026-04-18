import { FC } from 'react';
import { Flex } from '~/components-core/flex';
import { Grid, GridItem } from '~/components-core/grid';
import { Tile } from '~/components-core/tile';
import { Typography } from '~/components-core/typography';
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
        ? titleItems.map(({ heading: titleHeading, subheading }) => (
            <Grid key={titleHeading} justifyContent="center" spacing="xs">
              <GridItem xs={5}>
                <Typography variant="h3" boldFace textAlign="right">
                  {titleHeading}
                </Typography>
              </GridItem>
              <GridItem xs={5}>
                <Typography variant="h3" markdown>
                  {subheading}
                </Typography>
              </GridItem>
            </Grid>
          ))
        : null}

      {bodyItems
        ? bodyItems.map(({ heading: bodyHeading, subheading }) => (
            <Grid key={bodyHeading} justifyContent="center" spacing="xs">
              <GridItem xs={5}>
                <Typography variant="body" boldFace textAlign="right">
                  {bodyHeading}
                </Typography>
              </GridItem>
              <GridItem xs={5}>
                <Typography variant="body" markdown>
                  {subheading}
                </Typography>
              </GridItem>
            </Grid>
          ))
        : null}
    </Flex>
  </Tile>
);
