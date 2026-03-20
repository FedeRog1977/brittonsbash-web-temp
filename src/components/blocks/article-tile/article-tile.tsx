import { FC } from 'react';
import { Flex } from '~/components-core/flex';
import { TileProps, Tile } from '~/components-core/tile';
import { Typography, TypographyProps } from '~/components-core/typography';
import { Section } from './types/section.js';
import { getContent } from './utils/get-content.js';

export type ArticleTileProps = {
  type?: TileProps['type'];
  heading?: string;
  subHeading?: string;
  textAlign?: TypographyProps['textAlign'];
  sections: Section[];
};

export const ArticleTile: FC<ArticleTileProps> = ({
  type = 'clear',
  heading,
  subHeading,
  textAlign = 'center',
  sections,
}) => (
  <Tile type={type}>
    {subHeading ? (
      <Typography variant="h2" textAlign={textAlign}>
        {subHeading}
      </Typography>
    ) : null}

    {heading ? (
      <Typography variant="h1" textAlign={textAlign} paragraphMargins>
        {heading}
      </Typography>
    ) : null}

    <Flex direction="vertical" gap="md">
      {sections.map(async (section) => getContent(section))}
    </Flex>
  </Tile>
);
