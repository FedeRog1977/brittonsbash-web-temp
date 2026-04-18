import { JSONSchema } from '~/types';
import { StaticResources } from '../types/static-resources.js';

type StaticResourcesArticle = Extract<StaticResources['content'][number], { type: 'Article' }>;
type StaticResourcesFootnote = Extract<StaticResources['content'][number], { type: 'Footnote' }>;
type StaticResourcesImage = Extract<StaticResources['content'][number], { type: 'Image' }>;
type StaticResourcesTitle = Extract<StaticResources['content'][number], { type: 'Title' }>;

const staticResourcesArticleBodyValidationSchema: JSONSchema<
  Extract<StaticResourcesArticle['props']['content'][number], { type: 'Body' }>
> = {
  type: 'object',
  properties: {
    type: { type: 'string', const: 'Body' },
    props: {
      type: 'object',
      properties: {
        content: { oneOf: [{ type: 'array', items: { type: 'string' } }, { type: 'string' }] },
      },
      required: ['content'],
    },
  },
  required: ['type', 'props'],
};

const staticResourcesArticleBooksValidationSchema: JSONSchema<
  Extract<StaticResourcesArticle['props']['content'][number], { type: 'Books' }>
> = {
  type: 'object',
  properties: {
    type: { type: 'string', const: 'Books' },
    props: {
      type: 'object',
      properties: {
        bookshelves: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              heading: { type: 'string' },
              items: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
            required: ['heading', 'items'],
          },
        },
      },
      required: ['bookshelves'],
    },
  },
  required: ['type', 'props'],
};

const staticResourcesArticleImagesValidationSchema: JSONSchema<
  Extract<StaticResourcesArticle['props']['content'][number], { type: 'Images' }>
> = {
  type: 'object',
  properties: {
    type: { type: 'string', const: 'Images' },
    props: {
      type: 'object',
      properties: {
        images: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              url: { type: 'string' },
              alt: { type: 'string' },
              description: { type: 'string' },
            },
            required: ['url', 'alt'],
          },
        },
      },
      required: ['images'],
    },
  },
  required: ['type', 'props'],
};

const staticResourcesArticleValidationSchema: JSONSchema<StaticResourcesArticle> = {
  type: 'object',
  properties: {
    type: { type: 'string', const: 'Article' },
    props: {
      type: 'object',
      properties: {
        type: { type: 'string' },
        heading: { type: 'string' },
        subheading: { type: 'string' },
        textAlign: { type: 'string' },
        content: {
          type: 'array',
          items: {
            oneOf: [
              staticResourcesArticleBodyValidationSchema,
              staticResourcesArticleBooksValidationSchema,
              staticResourcesArticleImagesValidationSchema,
            ],
          },
        },
      },
      required: ['content'],
    },
  },
  required: ['type', 'props'],
};

const staticResourcesFootnoteValidationSchema: JSONSchema<StaticResourcesFootnote> = {
  type: 'object',
  properties: {
    type: { type: 'string', const: 'Footnote' },
    props: {
      type: 'object',
      properties: {
        content: { oneOf: [{ type: 'array', items: { type: 'string' } }, { type: 'string' }] },
      },
      required: ['content'],
    },
  },
  required: ['type', 'props'],
};

const staticResourcesImageValidationSchema: JSONSchema<StaticResourcesImage> = {
  type: 'object',
  properties: {
    type: { type: 'string', const: 'Image' },
    props: {
      type: 'object',
      properties: {
        imgDesktop: {
          type: 'object',
          properties: {
            url: { type: 'string' },
            alt: { type: 'string' },
            description: { type: 'string' },
          },
          required: ['url', 'alt'],
        },
        gradient: {
          type: 'object',
          properties: {
            value: { type: 'string' },
            opacity: { type: 'number' },
            start: { type: 'string' },
            fill: { type: 'boolean' },
          },
          required: [],
        },
        heading: { type: 'string' },
        subheading: { type: 'string' },
        content: { type: 'string' },
        ctas: {
          type: 'array',
          items: {
            type: 'object',
            properties: { content: { type: 'string' }, href: { type: 'string' } },
            required: ['content', 'href'],
          },
        },
        invert: { type: 'boolean' },
      },
      required: ['heading'],
    },
  },
  required: ['type', 'props'],
};

const staticResourcesTitleValidationSchema: JSONSchema<StaticResourcesTitle> = {
  type: 'object',
  properties: {
    type: { type: 'string', const: 'Title' },
    props: {
      type: 'object',
      properties: {
        heading: { type: 'string' },
        titleItems: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              heading: { type: 'string' },
              subheading: { type: 'string' },
            },
            required: ['heading', 'subheading'],
          },
        },
        bodyItems: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              heading: { type: 'string' },
              subheading: { type: 'string' },
            },
            required: ['heading', 'subheading'],
          },
        },
      },
      required: [],
    },
  },
  required: ['type', 'props'],
};

export const staticResourcesValidationSchema: JSONSchema<StaticResources> = {
  type: 'object',
  properties: {
    metaTitle: { type: 'string' },
    metaDescription: { type: 'string' },
    metaKeywords: { type: 'array', items: { type: 'string' } },
    title: { type: 'string' },
    content: {
      type: 'array',
      items: {
        oneOf: [
          staticResourcesArticleValidationSchema,
          staticResourcesFootnoteValidationSchema,
          staticResourcesImageValidationSchema,
          staticResourcesTitleValidationSchema,
        ],
      },
    },
  },
  required: ['metaTitle', 'metaDescription', 'title', 'content'],
};
