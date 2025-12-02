import { FC } from 'react';
import { Typography } from '../typography/typography.js';
import { TextStyle } from '../../reference/index.js';

export type ArticleProps = {
  sections: TextStyle[];
  fontFamily?: TextStyle['fontFamily'];
  textAlign?: TextStyle['textAlign'];
  extendParagraphMargins?: boolean;
};

export const Article: FC<ArticleProps> = ({
  sections,
  fontFamily,
  textAlign,
  extendParagraphMargins,
}) => (
  <>
    {sections
      .slice(0, sections.length - 1)
      .map(
        ({
          variant = 'body',
          children,
          color = 'darkerGrey',
          boldFace,
          italicize,
          smallCaps,
          textDecoration,
          shadow,
        }) => (
          <Typography
            key={variant}
            variant={variant}
            fontFamily={fontFamily}
            color={color}
            textAlign={textAlign}
            boldFace={boldFace}
            italicize={italicize}
            smallCaps={smallCaps}
            textDecoration={textDecoration}
            shadow={shadow}
            paragraphMargins
            markdown
          >
            {children}
          </Typography>
        ),
      )}

    <Typography
      variant={sections[sections.length - 1]!.variant}
      fontFamily={fontFamily}
      color={sections[sections.length - 1]!.color}
      textAlign={textAlign}
      boldFace={sections[sections.length - 1]!.boldFace}
      italicize={sections[sections.length - 1]!.italicize}
      smallCaps={sections[sections.length - 1]!.smallCaps}
      textDecoration={sections[sections.length - 1]!.textDecoration}
      shadow={sections[sections.length - 1]!.shadow}
      paragraphMargins={extendParagraphMargins}
      markdown
    >
      {sections[sections.length - 1]!.children}
    </Typography>
  </>
);
