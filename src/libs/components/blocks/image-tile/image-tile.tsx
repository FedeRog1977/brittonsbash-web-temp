'use client';

import { ArticleProps, Article } from '~/libs/components-basics/article';
import { CtaProps, Cta } from '~/libs/components-basics/cta';
import { Flex } from '~/libs/components-basics/flex';
import { GradientProps } from '~/libs/components-basics/gradient';
import { Grid, GridItem } from '~/libs/components-basics/grid';
import { Tile } from '~/libs/components-basics/tile';
import {
  Typography,
  // TypographyProps
} from '~/libs/components-basics/typography';
import { Img } from '~/libs/types';
import {
  // isMobile,
  generateUniqueKey,
} from '~/libs/utils';
import { FC } from 'react';
import { formatArticle } from '../article-tile/utils/format-article.js';

export type ImageTileProps = {
  imgDesktop?: Img;
  imgMobile?: Img;
  gradient?: GradientProps;
  heading: string;
  subHeading?: string;
  body?: string | ArticleProps['sections'];
  ctas?: CtaProps[];
  // textAlign?: TypographyProps['textAlign'];
  invert?: boolean;
};

export const ImageTile: FC<ImageTileProps> = ({
  imgDesktop,
  imgMobile,
  gradient,
  heading,
  subHeading,
  body,
  ctas,
  invert = false,
}) => {
  const invertedTypeVariant = invert ? 'white' : 'mediumGrey';

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
          <Typography variant="h4" color={invertedTypeVariant}>
            {subHeading}
          </Typography>

          <Typography variant="t2" color={invertedTypeVariant} paragraphMargins>
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
                invertedTypeVariant,
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
            <Typography
              variant="body"
              textAlign="justify"
              color={invertedTypeVariant}
              paragraphMargins
            >
              {body}
            </Typography>
          )}
        </GridItem>

        {ctas ? (
          <GridItem xs={12} md={2}>
            {/* <Flex
              direction={isMobile() ? 'horizontal' : 'vertical'}
              alignHorizontal={isMobile() ? 'center' : 'right'}
              alignVertical="center"
              wrap={isMobile()}
              gap="2xs"
            > */}
            <Flex direction="vertical" alignHorizontal="right" alignVertical="center" gap="2xs">
              {ctas.map(({ content, href }, index) => (
                <Cta key={generateUniqueKey(index)} content={content} href={href} invert={invert} />
              ))}
            </Flex>
          </GridItem>
        ) : null}
      </Grid>
    </Tile>
  );
};
