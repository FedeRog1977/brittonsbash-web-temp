import { ArticleTileProps } from '~/components-blocks/article-tile';
import { FootnoteTileProps } from '~/components-blocks/footnote-tile';
import { ImageTileProps } from '~/components-blocks/image-tile';
import { TitleTileProps } from '~/components-blocks/title-tile';

type Content<Type extends string, Props extends object> = {
  type: Type;
  props: Props;
};

type StaticContent =
  | Content<'Article', ArticleTileProps>
  | Content<'Footnote', FootnoteTileProps>
  | Content<'Image', ImageTileProps>
  | Content<'Title', TitleTileProps>;

export type StaticResources = {
  metaTitle: string;
  metaDescription: string;
  metaKeywords?: string[];
  title: string;
  content: StaticContent[];
};
