import { ImageTile } from '~/libs/components-blocks/image-tile';
import { PageLayout } from '~/libs/components-templates/page-layout';
import { FC } from 'react';

export type HomeTemplateProps = object;

export const HomeTemplate: FC<HomeTemplateProps> = () => (
  <PageLayout background={{ type: 'miami', content: 'Home Page' }}>
    <ImageTile
      imgDesktop={{
        url: 'https://raw.githubusercontent.com/FedeRog1977/brittonsbash-content/refs/heads/master/images/general/home.jpg',
        alt: 'test',
      }}
      heading="Test heading"
      body="Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"
      ctas={[
        {
          content: 'Test CTA',
          href: './',
          invert: true,
        },
        {
          content: 'Test CTA',
          href: './',
          invert: true,
        },
        {
          content: 'Test CTA',
          href: './',
          invert: true,
        },
      ]}
      gradient={{
        value: 'dark',
        opacity: 60,
        start: 'left',
      }}
      invert
    />
  </PageLayout>
);
