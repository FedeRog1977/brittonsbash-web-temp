import { PageBackgroundProps } from '@libs/components-basics/page-background';
import { ArticleTileProps } from '@libs/components-blocks/article-tile';
import { ImageTileProps } from '@libs/components-blocks/image-tile';

type HomeProps = {
  background: PageBackgroundProps;
  tileOne: ImageTileProps;
  tileTwo: ArticleTileProps;
};

export const homeContent: HomeProps = {
  background: { content: 'BrittonsBashRC' },
  tileOne: {
    imgDesktop: {
      url: 'https://lewisbritton.com/images/general/home.jpg',
      alt: 'intro-tile-image',
    },
    imgMobile: {
      url: 'https://lewisbritton.com/images/general/home-mobile.jpg',
      alt: 'intro-tile-mobile-image',
    },
    gradient: {
      opacity: 40,
    },
    heading: 'Welcome to BrittonsBashRC',
    subHeading: 'Where autism aligns at its finest',
    body: 'Congratulations, you’ve found yourself in BrittonsBashRC. Rogue one. If you ended up here through any other path then my personal recommendation, I would love to know how. What is the point of this website? Well knowing me, I could be offed, booked, locked-up, fall off a Munro top, or fire too many bullets, at any moment. So, my thought was, why not put everything that’s ever gone through my mind right here? Head on with it at your own risk, and either follow the links to the right for my main projects (and Projects), or keep reading to dive into the deeper and darker realms.',
    ctas: [
      { content: 'Instant Gram', href: '#/blog/instant-gram' },
      { content: 'Sport', href: '#/blog/sport' },
      { content: 'BritonsFoodRC', href: '#/blog/brittons-foodrc' },
      { content: 'Weather', href: '#/utils/weather' },
      { content: 'Conquest', href: '#/utils/conquest' },
    ],
    invert: true,
  },
  tileTwo: {
    heading: 'A short introduction',
    subHeading: 'The whole spectrum',
    sections: [
      {
        component: 'body',
        content: {
          body: 'Those who know me know there’s a bunch of random nonsense I could start spewing out here already, but let’s keep it high level right now and you can dive into the l’autisme as much as you want at your leisure. There are eight focuses of this website really, meaning there are eight things that sum up my effed-up personality: sport, exploration and travel, computers, academic crap, cooking, design, automotive interests, and other media. I have some trademarks, too many to get into here but you will be seeing a lot of hill Projects, including my greatest achievement of The Playground, and many more around my greatest love: the Scottish Highlands; Roadie Miles, including my century and various Strathavens and Fenwick + Wind Farms; Miles Miles, which these days tends to only extend to my never-ending Waterfoot streak; and, my (unfortunately) decaying obsession with Roger Federer’s tennis game. You can also browse all of my travel and explorations, shall we call them, on my rebellion against Instagram: Instant Gram. And feel free to steal any of the recipes you find in BrittonsFoodRC too. You may at some point find yourself caught in some obscure exploration of interiors, design, typography, stationery, classic goods collection, and media collection, etc. There’s also plenty of v-gin dev stuff in Linux, LaTeX, and web development. Also, not to forget the ThinkPads. If you are to venture into the unknown, check out Conquest (Burning Roots) and get a proj on the go in my experimental Ordnance-Survey-based mapping app. So yeah, good luck, have fun.\n\nIt is worth noting that there is a lot of information communicated throughout the web pages of this site. It may be considered informative. Informative in the respect of education on myself. To make this a natural as possible, this information is communicated in an implicit manner, as opposed to an explicit one. That is not to say that the content of the information is implied, but that the structure is. To use a very specific example, at some point in this site, I speak about my favourite beers. These beers are categorized by type and by region. Now, I don’t explicitly state the tree of types and regions of beers as a more general lesson; detached from my personal ranking system however, the categorization relative to my ranking is extensive enough that it provides implicit context which covers all of these. Hence, taught through implication rather than explicit state. Another example would be the statistics under each of my different cycling routes on my *Sport* *Blog* page. I never explicitly state that Strathaven, Fenwick + Wind Farm, Fenwick, Wind Farm, etc. are my primary / only cycling routes, but the fact that my cycling statistics are limited to those should imply that they are. Just thought I’d clear that up. It’s a big thing on this site. Some things I do explicity state though, can’t get around some big topics.',
        },
      },
      {
        component: 'images',
        content: {
          images: [
            {
              url: 'https://lewisbritton.com/images/blog/instant-gram/2024/the-accountant/17.jpg',
              alt: 'glen-affric',
              description: 'Glen Affric 03/2024',
            },
            {
              url: 'https://lewisbritton.com/images/blog/instant-gram/2024/schiehallion/18.jpg',
              alt: 'shiehallion',
              description: 'Shiehallion 03/2024',
            },
            {
              url: 'https://lewisbritton.com/images/blog/instant-gram/2024/reunited-with-roger/2.jpg',
              alt: 'whitelee',
              description: 'Whitelee Wind Farm 02/2024',
            },
            {
              url: 'https://lewisbritton.com/images/blog/instant-gram/2024/unty-fakeout/26.jpg',
              alt: 'glencoe-2',
              description: 'Glen Coe 02/2024',
            },
            {
              url: 'https://lewisbritton.com/images/blog/instant-gram/2024/unty-fakeout/34.jpg',
              alt: 'glencoe-1',
              description: 'Glen Coe 02/2024',
            },
          ],
        },
      },
    ],
  },
};
