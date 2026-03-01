import { PageBackgroundProps } from "@libs/components-basics/page-background";
import { ArticleTileProps } from "@libs/components-blocks/article-tile";
import { FootnoteTileProps } from "@libs/components-blocks/footnote-tile";
import { Food } from "../types/food";

type BrittonsFoodRCProps = {
  background: PageBackgroundProps;
  tileOne: {
    meat: Food[];
    poultry: Food[];
    fish: Food[];
    pasta: Food[];
    bread: Food[];
    sweet: Food[];
    misc: Food[];
  };
  tileTwo: ArticleTileProps;
  // tileThree: ArticleTileProps;
  // tileFour: ArticleTileProps;
  // tileFive: ArticleTileProps;
  // tileSix: ArticleTileProps;
  tileSeven: FootnoteTileProps;
};

// const culinary = await brittonsBashContentFacade.getCulinary();

export const brittonsFoodRCContent: BrittonsFoodRCProps = {
  background: { content: "BrittonsFoodRC" },
  tileOne: {
    // TODO: move this to getCulinary()
    meat: [
      {
        name: "Beef Bolognese",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-bolognese/1.jpg",
            alt: "beef-bolognese-1"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-bolognese/2.jpg",
            alt: "beef-bolognese-2"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-bolognese/3.jpg",
            alt: "beef-bolognese-3"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-bolognese/4.jpg",
            alt: "beef-bolognese-4"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-bolognese/5.jpg",
            alt: "beef-bolognese-5"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-bolognese/6.jpg",
            alt: "beef-bolognese-6"
          },
          // TODO: populate this brittonsbash-content with new image
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-bolognese/7.jpg",
            alt: "beef-bolognese-7"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-bolognese/8.jpg",
            alt: "beef-bolognese-8"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-bolognese/9.jpg",
            alt: "beef-bolognese-9"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-bolognese/10.jpg",
            alt: "beef-bolognese-10"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-bolognese/11.jpg",
            alt: "beef-bolognese-11"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-bolognese/12.jpg",
            alt: "beef-bolognese-12"
          }
        ],
        tags: []
      },
      {
        name: "Beef Stroganoff",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-stroganoff/1.jpg",
            alt: "beef-stroganoff-1"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-stroganoff/2.jpg",
            alt: "beef-stroganoff-2"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-stroganoff/3.jpg",
            alt: "beef-stroganoff-3"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-stroganoff/4.jpg",
            alt: "beef-stroganoff-4"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/beef-stroganoff/5.jpg",
            alt: "beef-stroganoff-5"
          }
        ],
        tags: []
      },
      {
        name: "Pork Goulash",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/pork-goulash/1.jpg",
            alt: "pork-goulash-1"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/pork-goulash/2.jpg",
            alt: "pork-goulash-2"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/pork-goulash/3.jpg",
            alt: "pork-goulash-3"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/pork-goulash/4.jpg",
            alt: "pork-goulash-4"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/pork-goulash/5.jpg",
            alt: "pork-goulash-5"
          }
        ],
        tags: []
      }
    ],
    poultry: [
      {
        name: "Christmas Roast",
        ingredients: [
          { title: "Salmon Rillettes", content: ["One", "Two", "Three"] },
          { title: "Beef", content: ["One", "Two", "Three"] },
          { title: "Chicken", content: ["One", "Two", "Three"] }
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/1.jpg",
            alt: "christmas-dinner-1"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/2.jpg",
            alt: "christmas-dinner-2"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/3.jpg",
            alt: "christmas-dinner-3"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/4.jpg",
            alt: "christmas-dinner-4"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/5.jpg",
            alt: "christmas-dinner-5"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/6.jpg",
            alt: "christmas-dinner-6"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/7.jpg",
            alt: "christmas-dinner-7"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/8.jpg",
            alt: "christmas-dinner-8"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/9.jpg",
            alt: "christmas-dinner-9"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/10.jpg",
            alt: "christmas-dinner-10"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/11.jpg",
            alt: "christmas-dinner-11"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/12.jpg",
            alt: "christmas-dinner-12"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/13.jpg",
            alt: "christmas-dinner-13"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/14.jpg",
            alt: "christmas-dinner-14"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/15.jpg",
            alt: "christmas-dinner-15"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/16.jpg",
            alt: "christmas-dinner-16"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/17.jpg",
            alt: "christmas-dinner-17"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/18.jpg",
            alt: "christmas-dinner-18"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/19.jpg",
            alt: "christmas-dinner-19"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/20.jpg",
            alt: "christmas-dinner-20"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/21.jpg",
            alt: "christmas-dinner-21"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/22.jpg",
            alt: "christmas-dinner-22"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/23.jpg",
            alt: "christmas-dinner-23"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/24.jpg",
            alt: "christmas-dinner-24"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/25.jpg",
            alt: "christmas-dinner-25"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/26.jpg",
            alt: "christmas-dinner-26"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/christmas-dinner/27.jpg",
            alt: "christmas-dinner-27"
          }
        ],
        tags: []
      },
      {
        name: "Chicken Roast",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-roast/1.jpg",
            alt: "chicken-roast-1"
          }
          // TODO: add more here to populate a nicer grid
        ],
        tags: []
      },
      {
        name: "Chicken Stew",
        ingredients: [
          {
            title: "Meat And Vegetables",
            content: [
              "1 tbsp of olive oil",
              "1/2 a red onion",
              "1 leek",
              "Brown mushrooms",
              "Chicken breast"
            ]
          },
          {
            title: "Sauce",
            content: [
              "150ml of chicken stock",
              "150ml of creme friache",
              "1 tsp of dijon mustard",
              "Fresh chives",
              "Fresh dill"
            ]
          }
        ],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-stew/1.jpg",
            alt: "chicken-stew-1"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-stew/2.jpg",
            alt: "chicken-stew-2"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-stew/3.jpg",
            alt: "chicken-stew-3"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-stew/4.jpg",
            alt: "chicken-stew-4"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-stew/5.jpg",
            alt: "chicken-stew-5"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-stew/6.jpg",
            alt: "chicken-stew-6"
          }
        ],
        tags: []
      },
      {
        name: "Italian Stew",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/italian-stew/1.jpg",
            alt: "italian-stew-1"
          }
        ],
        tags: []
      },
      {
        name: "Chicken Stir Fry",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-stir-fry/1.jpg",
            alt: "chicken-stir-fry-1"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-stir-fry/2.jpg",
            alt: "chicken-stir-fry-2"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-stir-fry/3.jpg",
            alt: "chicken-stir-fry-3"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-stir-fry/4.jpg",
            alt: "chicken-stir-fry-4"
          }
        ],
        tags: []
      },
      {
        name: "Chicken In Black Bean Sauce",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-in-blackbean/1.jpg",
            alt: "chicken-in-blackbean-1"
          }
          // TODO: add more here to populate a nicer grid
        ],
        tags: []
      },
      {
        name: "Chicken Curry",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-curry/1.jpg",
            alt: "chicken-curry-1"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-curry/2.jpg",
            alt: "chicken-curry-2"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-curry/3.jpg",
            alt: "chicken-curry-3"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-curry/4.jpg",
            alt: "chicken-curry-4"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-curry/5.jpg",
            alt: "chicken-curry-5"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/chicken-curry/6.jpg",
            alt: "chicken-curry-6"
          }
        ],
        tags: []
      },
      {
        name: "Chicken Panang Curry",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/panang-curry/1.jpg",
            alt: "panang-curry-1"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/panang-curry/2.jpg",
            alt: "panang-curry-2"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/panang-curry/3.jpg",
            alt: "panang-curry-3"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/panang-curry/4.jpg",
            alt: "panang-curry-4"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/panang-curry/5.jpg",
            alt: "panang-curry-5"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/panang-curry/6.jpg",
            alt: "panang-curry-6"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/panang-curry/7.jpg",
            alt: "panang-curry-7"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/panang-curry/8.jpg",
            alt: "panang-curry-8"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/panang-curry/9.jpg",
            alt: "panang-curry-9"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/panang-curry/10.jpg",
            alt: "panang-curry-1"
          }
        ],
        tags: []
      }
    ],
    fish: [
      {
        name: "Salmon Gnocchi",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/salmon-gnocchi/1.jpg",
            alt: "salmon-gnocchi-1"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/salmon-gnocchi/2.jpg",
            alt: "salmon-gnocchi-2"
          }
        ],
        tags: []
      },
      {
        name: "Prawn Gnocchi",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/prawn-gnocchi/1.jpg",
            alt: "prawn-gnocchi-1"
          }
        ],
        tags: []
      },
      {
        name: "Seafood Gnocchi",
        ingredients: [
          {
            title: "Sauce",
            content: [
              "Olive oil",
              "4 cloves of garlic",
              "1/2 a red onion",
              "1/2 a red pepper",
              "A small carrot",
              "A stick of celery",
              "3 salad tomatoes",
              "Fresh rosemary",
              "Water"
            ]
          },
          { title: "Seafood", content: ["King prawns", "Mussels", "Squid"] },
          { title: "Gnocchi", content: ["Fresh gnocchi (or make your own)"] }
        ],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/seafood-gnocchi/1.jpg",
            alt: "seafood-gnocchi-1"
          }
        ],
        tags: []
      },
      {
        name: "Seafood Lentils",
        ingredients: [
          {
            title: "Sauce",
            content: []
          },
          { title: "Seafood", content: ["King prawns", "Mussels", "Squid"] }
        ],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/seafood-lentils/1.jpg",
            alt: "seafood-lentils-1"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/seafood-lentils/2.jpg",
            alt: "seafood-lentils-2"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/seafood-lentils/3.jpg",
            alt: "seafood-lentils-3"
          }
        ],
        tags: []
      }
    ],
    pasta: [
      {
        name: "Sausage Pasta",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/sausage-pasta/1.jpg",
            alt: "sausage-pasta-1"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/sausage-pasta/2.jpg",
            alt: "sausage-pasta-2"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/sausage-pasta/3.jpg",
            alt: "sausage-pasta-3"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/sausage-pasta/4.jpg",
            alt: "sausage-pasta-4"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/sausage-pasta/5.jpg",
            alt: "sausage-pasta-5"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/sausage-pasta/6.jpg",
            alt: "sausage-pasta-6"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/sausage-pasta/7.jpg",
            alt: "sausage-pasta-7"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/sausage-pasta/8.jpg",
            alt: "sausage-pasta-8"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/sausage-pasta/9.jpg",
            alt: "sausage-pasta-9"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/sausage-pasta/10.jpg",
            alt: "sausage-pasta-10"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/sausage-pasta/11.jpg",
            alt: "sausage-pasta-11"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/sausage-pasta/12.jpg",
            alt: "sausage-pasta-12"
          }
        ],
        tags: []
      },
      {
        name: "Seafood Pasta",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/seafood-pasta/1.jpg",
            alt: "seafood-pasta-1"
          }
        ],
        tags: []
      },
      {
        name: "Piperade Pasta",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/piperade-pasta/1.jpg",
            alt: "piperade-pasta-1"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/piperade-pasta/2.jpg",
            alt: "piperade-pasta-2"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/piperade-pasta/3.jpg",
            alt: "piperade-pasta-3"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/piperade-pasta/4.jpg",
            alt: "piperade-pasta-4"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/piperade-pasta/5.jpg",
            alt: "piperade-pasta-5"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/piperade-pasta/6.jpg",
            alt: "piperade-pasta-6"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/piperade-pasta/7.jpg",
            alt: "piperade-pasta-7"
          }
        ],
        tags: []
      }
    ],
    bread: [
      {
        name: "",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc//1.jpg",
            alt: "-1"
          }
        ],
        tags: []
      }
    ],
    sweet: [
      {
        name: "Tropical Trifle",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/tropical-trifle/1.jpg",
            alt: "tropical-trifle-1"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/tropical-trifle/2.jpg",
            alt: "tropical-trifle-2"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/tropical-trifle/3.jpg",
            alt: "tropical-trifle-3"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/tropical-trifle/4.jpg",
            alt: "tropical-trifle-4"
          }
        ],
        tags: []
      }
    ],
    misc: [
      {
        name: "Simon Howie",
        ingredients: [],
        description: "",
        images: [
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/simon-howie/1.jpg",
            alt: "simon-howie-1"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/simon-howie/2.jpg",
            alt: "simon-howie-2"
          },
          {
            url: "https://lewisbritton.com/images/blog/brittons-foodrc/simon-howie/3.jpg",
            alt: "simon-howie-3"
          }
        ],
        tags: []
      }
    ]
  },
  tileTwo: {
    type: "clear",
    heading: "Introduction",
    subHeading: "A Short Rant",
    sections: [
      {
        component: "body",
        content: {
          body: `Much like my sport, I eat in two very different ways. The majority of the time I eat for function. This means I aim to essentially just intake high quality meat and other forms of nutrient-dense foods such as vegetables. Mostly, I ensure my cooking is single-ingredient, in this functional scenario. I usually follow this during weekdays when going through the usual fitness activities and non-alcohol-drinking days. The most important part of this consumption is that ingredients are legitimate, whole-food, and from a trustworthy and sustainable source. This is why I believe in paying marginally more for butchers, fishmongers, dairies, greengrocers, etc. Or even higher-end supermarket variants of these. Or even, just going to a better supermarket like Whole Foods, Waitrose, or Marks and Spencer. You must note that shopping in good places is only considered more expensive because the majority of people are buying packages, ultra-processed, sugary shit like ready meals and pre-dressed foods. Yes, these will be more expensive. But, buy normal food like meat, eggs, dairy, vegetables, etc. and you will not notice a price difference.\n\nThe second approach to cooking I take is less of a food consumption approach and more of the art appreciation. That is, I like to cook. I like to develop recipes, experiment with ingredients, tools, and equipment, and putting something beautiful on a plate. Whether I eat it or not. It's the process I love. Usually I let go of cost in this scenario as it is usually split or it is a rare treat or occasional event. Although of course single-ingredient cooking doesn't really work in recipes, ingredients are still all whole-food and high quality.`
        }
      }
    ]
  },
  // tileThree: {
  //   type: 'clear',
  //   heading: 'Chefs And Cooks',
  //   subHeading: 'Public Figures',
  //   sections: [
  //     {
  //       component: 'books',
  //       content: {
  //         items: [
  //           ...culinary.figures.map((figure) => ({
  //             heading: figure.title,
  //             items: figure.content as BookshelfProps['items'],
  //           })),
  //         ],
  //       },
  //     },
  //   ],
  // },
  // tileFour: {
  //   type: 'clear',
  //   heading: 'Kitchen Equipment',
  //   subHeading: 'Tools And Equipment',
  //   sections: [
  //     {
  //       component: 'books',
  //       content: {
  //         items: [
  //           ...culinary.kitchen.map((appliance) => ({
  //             heading: appliance.title,
  //             items: appliance.content as BookshelfProps['items'],
  //           })),
  //         ],
  //       },
  //     },
  //   ],
  // },
  // tileFive: {
  //   type: 'clear',
  //   heading: 'Food',
  //   subHeading: 'Consumables',
  //   sections: [
  //     {
  //       component: 'books',
  //       content: {
  //         items: [
  //           ...culinary.food.map((foodItem) => ({
  //             heading: foodItem.title,
  //             items: foodItem.content as BookshelfProps['items'],
  //           })),
  //         ],
  //       },
  //     },
  //   ],
  // },
  // tileSix: {
  //   type: 'clear',
  //   heading: 'Drink',
  //   subHeading: 'Consumables',
  //   sections: [
  //     {
  //       component: 'books',
  //       content: {
  //         items: [
  //           ...culinary.drink.map((drinkItem) => ({
  //             heading: drinkItem.title,
  //             items: drinkItem.content as BookshelfProps['items'],
  //           })),
  //         ],
  //       },
  //     },
  //   ],
  // },
  tileSeven: {
    content:
      "All recipes are either abstracts, partials, redevelopments of various readings and / or watching; or original"
  }
};
