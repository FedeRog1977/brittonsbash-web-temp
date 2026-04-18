'use client';

import { FC } from 'react';
import { Flex } from '~/components-core/flex';
import { Button } from '~/components-core/form';
import { GradientProps } from '~/components-core/gradient';
import { Grid, GridItem } from '~/components-core/grid';
import { Tile } from '~/components-core/tile';
import { Typography } from '~/components-core/typography';
import { Img } from '~/types';

export type ImageTileProps = {
  imgDesktop?: Img;
  // imgMobile?: Img;
  gradient?: GradientProps;
  heading: string;
  subheading?: string;
  content?: string;
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
  subheading,
  content,
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
            {subheading}
          </Typography>

          <Typography variant="h1" color={typographyColor} paragraphMargins>
            {heading}
          </Typography>

          <Typography
            variant="footnote"
            textAlign="justify"
            color={typographyColor}
            paragraphMargins
          >
            {content}
          </Typography>
        </GridItem>

        {ctas ? (
          <GridItem xs={12} md={2}>
            <Flex direction="vertical" alignHorizontal="right" alignVertical="center" gap="2xs">
              {ctas.map(({ content: ctaContent, href }) => (
                <Button key={ctaContent} variant={buttonVariant} link={{ href }}>
                  {ctaContent}
                </Button>
              ))}
            </Flex>
          </GridItem>
        ) : null}
      </Grid>
    </Tile>
  );
};
