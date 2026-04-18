import { FC } from 'react';
import { Flex } from '~/components-core/flex';
import { TileProps, Tile } from '~/components-core/tile';
import { Typography, TypographyProps } from '~/components-core/typography';
import { Content } from './components/content.jsx';
import { Section } from './types/section.js';

export type ArticleTileProps = {
  type?: TileProps['type'];
  heading?: string;
  subheading?: string;
  textAlign?: TypographyProps['textAlign'];
  content: Section[];
};

export const ArticleTile: FC<ArticleTileProps> = ({
  type = 'clear',
  heading,
  subheading,
  textAlign = 'center',
  content,
}) => (
  <Tile type={type}>
    {subheading ? (
      <Typography variant="h2" textAlign={textAlign}>
        {subheading}
      </Typography>
    ) : null}

    {heading ? (
      <Typography variant="h1" textAlign={textAlign} paragraphMargins>
        {heading}
      </Typography>
    ) : null}

    <Flex direction="vertical" gap="md">
      {content.map((contentSection, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Content key={index} content={contentSection} />
      ))}
    </Flex>
  </Tile>
);
