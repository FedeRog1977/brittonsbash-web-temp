import { PageBackgroundProps } from '@libs/components-basics/page-background';
import { ArticleTileProps } from '@libs/components-blocks/article-tile';
import { TitleTileProps } from '@libs/components-blocks/title-tile';

type EmploymentProps = {
  background: PageBackgroundProps;
  tileOne: TitleTileProps;
  tileTwo: ArticleTileProps;
  tileThree: ArticleTileProps;
};

export const employmentContent: EmploymentProps = {
  background: { content: 'Employment' },
  tileOne: {
    titleItems: [
      {
        content: 'View / Download',
        subContent: '[Curriculum Vitæ](https://lewisbritton.com/documents/employment/cv.pdf)',
      },
    ],
  },
  tileTwo: {
    type: 'clear',
    heading: 'Overview',
    sections: [
      {
        component: 'body',
        content: { body: 'To be written ...' },
      },
    ],
  },
  tileThree: {
    type: 'clear',
    heading: 'Employment',
    subHeading: 'All the wage’ing',
    sections: [
      {
        component: 'body',
        content: {
          body: [
            {
              variant: 'h3',
              children: 'Scottish Power UK PLC | Software Engineer | 2022–Present',
            },
            {
              variant: 'body',
              children: 'To be written ...',
            },
            {
              variant: 'h3',
              children: 'Costa Coffee | Barista | 2021',
            },
            {
              variant: 'body',
              children:
                'A first-time barista at the Glasgow Central Station Costa Coffee. As expected, this involves various fun and relaxing roles such as front-of-house customer interactions, including the rush-hour(s) mobs; till and cash manaegement; stock management; cleaning and basic maintenance of tools and equipment; and of course, making a stunning array of coffees and cold drinks.',
            },
            {
              variant: 'h3',
              children: 'Virtuous Truffle Company | Sole Owner | 2019–2021',
            },
            {
              variant: 'body',
              children:
                'I care for the production of high quality luxury goods. This premium confectionery company was my way of presenting my naïve, retired love for indulgence and extravagance. But more importantly, high quality production methods. It allowed me to showcase and develop business management ‘skills’ such as stock management and optimization, financial record keeping, operations management, marketing and graphic design. I utilized some bloated Soyftware such as Adobe Photoshop, Serif PagePlus and Autodesk Inventor, while maintaining the VTC website.',
            },
            {
              variant: 'h3',
              children: 'Lakeland PLC | Retail Assistant | 2019–2020',
            },
            {
              variant: 'body',
              children:
                'It started as completing morning deliveries like Jeff Bezos on day one, to selling a record number of products like The Wolf while on front of house demonstrations – 400% more than the runner-up on my best performing day. Lakeland offered me development from all angles, social and economic. I’ve received multiple cases of praise regarding my ‘impeccable’ customer service and understanding of social desires. I was trusted to open and close store, manage the store funds and stock and have perpetual input in the store marketing and sales. I provided a strong, kind and reliable face by adopting a customer-centric nature. My excellent relationship with my boss allowed transparency and freedom which translated to efficiency and a strong understanding of operations. Lakeland is a place of strong hierarchical and consumer intimacy and thus, provided me with great joy.',
            },
            {
              variant: 'h3',
              children: 'J Sainsbury PLC | Customer Assistant | 2018',
            },
            {
              variant: 'body',
              children:
                'I was responsible for the primary operations such as till and cash management, stock management, handling of lottery, liquor and tobacco, and general store maintenance. The Sainsburys ‘Think 25’ protocol introduced me to analysing and identifying human age at a rapid pace while serving particular customers. I was presented with ‘challenges’ such as attempted violence and extremely minor robberies. These were a great opportunity for developing my management of people.',
            },
            {
              variant: 'h3',
              children: 'Sedgwick PLC | Customer Service Agent | 2018',
            },
            {
              variant: 'body',
              children:
                'I managed traffic from policyholders, clients and adjusters within the communication wing of their Glasgow office. I implemented a complex database directory with simultaneous tasks in ambition to connect and satisfy policyholders, clients and my employer. I balanced care for the client and policyholder through composure and vigilance regarding provoked policyholders, diffusing confrontation.',
            },
          ],
        },
      },
    ],
  },
};
