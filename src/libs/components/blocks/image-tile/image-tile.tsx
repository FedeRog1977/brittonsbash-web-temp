'use client';

import { FC } from 'react';
import { ArticleProps, Article } from '~/libs/components-basics/article';
import { Flex } from '~/libs/components-basics/flex';
import { Button } from '~/libs/components-basics/form';
import { GradientProps } from '~/libs/components-basics/gradient';
import { Grid, GridItem } from '~/libs/components-basics/grid';
import { Tile } from '~/libs/components-basics/tile';
import { Typography } from '~/libs/components-basics/typography';
import { Img } from '~/libs/types';
import { formatArticle } from '../article-tile/utils/format-article.js';

export type ImageTileProps = {
  imgDesktop?: Img;
  // imgMobile?: Img;
  gradient?: GradientProps;
  heading: string;
  subHeading?: string;
  body?: string | ArticleProps['sections'];
  ctas?: Array<{
    content: string;
    href: string;
  }>;
  // textAlign?: TypographyProps['textAlign'];
  invert?: boolean;
};

export const ImageTile: FC<ImageTileProps> = ({
  imgDesktop,
  // imgMobile,
  gradient,
  heading,
  subHeading,
  body,
  ctas,
  invert = false,
}) => {
  const typographyColor = invert ? 'white' : 'mediumGrey';
  const buttonVariant = invert ? 'inverse' : 'solid';

  return (
    <Tile
      type="clear"
      stacked
      // img={isMobile() ? imgMobile : imgDesktop}
      img={imgDesktop}
      gradient={gradient}
    >
      <Grid justifyContent="center" alignItems="center">
        <GridItem xs={12} md={7}>
          <Typography variant="h4" color={typographyColor}>
            {subHeading}
          </Typography>

          <Typography variant="t2" color={typographyColor} paragraphMargins>
            {heading}
          </Typography>

          {Array.isArray(body) ? (
            <Article
              // Not the ideal import, but it doesn't belong in:
              // ~/libs/utils, as it relies on types from ~/libs/components-basics
              // or ~/libs/components-basics/reference/utils, as it must be used outwith ~/libs/components-basics
              sections={formatArticle(
                body,
                'body',
                typographyColor,
                false,
                false,
                false,
                'none',
                false,
              )}
              textAlign="justify"
              extendParagraphMargins
            />
          ) : (
            <Typography variant="body" textAlign="justify" color={typographyColor} paragraphMargins>
              {body}
            </Typography>
          )}
        </GridItem>

        {ctas ? (
          <GridItem xs={12} md={2}>
            <Flex direction="vertical" alignHorizontal="right" alignVertical="center" gap="2xs">
              {ctas.map(({ content, href }) => (
                <Button key={content} variant={buttonVariant} link={{ href }}>
                  {content}
                </Button>
              ))}
            </Flex>
          </GridItem>
        ) : null}
      </Grid>
    </Tile>
  );
};
