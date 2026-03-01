import { PageBackgroundProps } from '@libs/components-basics/page-background';
import { ArticleTileProps } from '@libs/components-blocks/article-tile';

type GraphicDesignProps = {
  background: PageBackgroundProps;
  tileOne: ArticleTileProps;
  tileTwo: ArticleTileProps;
};

export const graphicDesignContent: GraphicDesignProps = {
  background: { content: 'Graphic Design' },
  tileOne: {
    type: 'solid',
    heading: 'Photography And Photo Manipulation',
    subHeading: 'Confectionery Retail Business',
    sections: [
      {
        component: 'images',
        content: {
          images: [
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/coconut-almond-butter.jpg',
              alt: 'coconut-almond-butter',
              description: 'Coconut Almond Butter',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/carrot-cake.jpg',
              alt: 'carrot-cake',
              description: 'Carrot Cake',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/salted-caramel.jpg',
              alt: 'salted-caramel',
              description: 'Salted Caramel',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/90-cocoa.jpg',
              alt: '90-cocoa',
              description: '90% Cocoa',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/orange.jpg',
              alt: 'orange',
              description: 'Chocolate Orange',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/mint.jpg',
              alt: 'mint',
              description: 'Mint Chocolate',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/white-mocha.jpg',
              alt: 'white-mocha',
              description: 'White Mocha',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/matcha-latte.jpg',
              alt: 'matcha-latte',
              description: 'Matcha Latte',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/lemon-cheesecake.jpg',
              alt: 'lemon-cheesecake',
              description: 'Lemon Cheesecake',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/coconut-lime-pistachio.jpg',
              alt: 'coconut-lime-pistachio',
              description: 'Coconut, Lime And Pistachio',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/cherry-bakewell.jpg',
              alt: 'cherry-bakewell',
              description: 'Cherry Bakewell',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/peanut-butter.jpg',
              alt: 'peanut-butter',
              description: 'Chocolate Peanut Butter',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/rose-lychee.jpg',
              alt: 'rose-lychee',
              description: 'Rose And Lychee',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/dark-cherry-liqueur.jpg',
              alt: 'dark-cherry-liqueur',
              description: 'Dark Cherry Liqueur',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/pink-prosecco.jpg',
              alt: 'pink-prosecco',
              description: 'Prosecco And Strawberry',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/grapefruit-gin-1.jpg',
              alt: 'grapefruit-gin',
              description: 'Grapefruit Gin',
            },
          ],
        },
      },
    ],
  },
  tileTwo: {
    type: 'solid',
    heading: 'Desktop Publishing',
    subHeading: 'Confectionery Retail Business',
    sections: [
      {
        component: 'images',
        content: {
          images: [
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/box-sticker-1.png',
              alt: 'box-sticker-1',
              description: 'Bock Sticker 1',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/box-sticker-2.png',
              alt: 'box-sticker-2',
              description: 'Bock Sticker 2',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/box-sticker-3.png',
              alt: 'box-sticker-3',
              description: 'Bock Sticker 3',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/ig-post-1.png',
              alt: 'ig-post-1',
              description: 'Instagram Post 1',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/ig-post-2.png',
              alt: 'ig-post-2',
              description: 'Instagram Post 2',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/ig-post-3.png',
              alt: 'ig-post-3',
              description: 'Instagram Post 3',
            },
            {
              url: 'https://lewisbritton.com/images/blog/graphic-design/logo.png',
              alt: 'logo',
              description: 'Logo',
            },
          ],
        },
      },
    ],
  },
};
