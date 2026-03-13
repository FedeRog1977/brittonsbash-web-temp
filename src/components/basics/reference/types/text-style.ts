import { ElementType, ReactElement, ReactNode } from 'react';
import { AlignHorizontal } from './align-horizontal.js';
import { Color } from './color.js';

export type TextStyle = {
  variant: 't1' | 't2' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'footnote' | 'tiny';
  children?: string | ReactElement | ReactNode | Element;
  element?: ElementType;
  color?: Color;
  boldFace?: boolean;
  italicize?: boolean;
  smallCaps?: boolean;
  textDecoration?: 'none' | 'overline' | 'underline' | 'lineThrough';
  shadow?: boolean;
  fontFamily?: 'serif' | 'sansSerif' | 'instagram' | 'sport' | 'miami' | 'calligraphy';
  textAlign?: AlignHorizontal | 'inherit' | 'justify';
  paragraphMargins?: boolean;
  markdown?: boolean;
};
