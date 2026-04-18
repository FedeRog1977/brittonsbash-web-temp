import { Metadata } from 'next';
import { redirect } from 'next/navigation.js';
import { ReactElement } from 'react';
import { StaticTemplate } from '~/components-templates';
import { HomeSearchParams, StaticResources } from '~/schema/types';

export type HomeProps = {
  // params: Promise<PageParams>;
  searchParams: Promise<HomeSearchParams>;
};

export const revalidate = 300;

// TODO: replace with facade call
const resourcesTemp: StaticResources = {
  metaTitle: 'brittonsbash | Home',
  metaDescription: 'brittonsbash Home Page',
  metaKeywords: ['brittonsbash'],
  title: 'Home',
  content: [
    {
      type: 'Image',
      props: {
        imgDesktop: {
          url: 'https://lewisbritton.com/images/general/home.jpg',
          alt: 'intro-tile-image',
        },
        gradient: {
          opacity: 40,
        },
        heading: 'Welcome to BrittonsBashRC',
        subheading: 'Where autism aligns at its finest',
        content:
          'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        ctas: [
          { content: 'Instant Gram', href: '/instant-gram' },
          { content: 'Projects', href: '/projects' },
        ],
        invert: true,
      },
    },
    {
      type: 'Article',
      props: {
        heading: 'A short introduction',
        subheading: 'The whole spectrum',
        content: [
          {
            type: 'Body',
            props: {
              content:
                'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            },
          },
          // {
          //   type: 'Images',
          //   props: {
          //     images: [
          //       {
          //         url: 'https://lewisbritton.com/images/blog/instant-gram/2024/the-accountant/17.jpg',
          //         alt: 'glen-affric',
          //         description: 'Glen Affric 03/2024',
          //       },
          //       {
          //         url: 'https://lewisbritton.com/images/blog/instant-gram/2024/schiehallion/18.jpg',
          //         alt: 'shiehallion',
          //         description: 'Shiehallion 03/2024',
          //       },
          //       {
          //         url: 'https://lewisbritton.com/images/blog/instant-gram/2024/reunited-with-roger/2.jpg',
          //         alt: 'whitelee',
          //         description: 'Whitelee Wind Farm 02/2024',
          //       },
          //       {
          //         url: 'https://lewisbritton.com/images/blog/instant-gram/2024/unty-fakeout/26.jpg',
          //         alt: 'glencoe-2',
          //         description: 'Glen Coe 02/2024',
          //       },
          //       {
          //         url: 'https://lewisbritton.com/images/blog/instant-gram/2024/unty-fakeout/34.jpg',
          //         alt: 'glencoe-1',
          //         description: 'Glen Coe 02/2024',
          //       },
          //     ],
          //   },
          // },
        ],
      },
    },
  ],
};

export const generateMetadata = (): Metadata => ({
  title: resourcesTemp.metaTitle,
  description: resourcesTemp.metaDescription,
  keywords: resourcesTemp.metaKeywords,
});

const Home = async ({ searchParams }: HomeProps): Promise<ReactElement> => {
  const params = await searchParams;

  if (params.go) {
    redirect(params.go);
  }

  return <StaticTemplate resources={resourcesTemp} />;
};

export default Home;
