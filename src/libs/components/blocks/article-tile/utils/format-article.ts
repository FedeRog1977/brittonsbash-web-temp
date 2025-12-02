import { ArticleProps } from '~/libs/components-basics/article';
import { TypographyProps } from '~/libs/components-basics/typography';

export const formatArticle = (
  sections: ArticleProps['sections'],
  variant: TypographyProps['variant'],
  color?: TypographyProps['color'],
  boldFace?: TypographyProps['boldFace'],
  italicize?: TypographyProps['italicize'],
  smallCaps?: TypographyProps['smallCaps'],
  textDecoration?: TypographyProps['textDecoration'],
  shadow?: TypographyProps['shadow'],
): TypographyProps[] => {
  const formattedSections: ArticleProps['sections'] = [];

  sections.forEach((section) => {
    formattedSections.push({
      variant,
      children: section.children,
      color: section.color ? section.color : color,
      boldFace: section.boldFace ? section.boldFace : boldFace,
      italicize: section.italicize ? section.italicize : italicize,
      smallCaps: section.smallCaps ? section.smallCaps : smallCaps,
      textDecoration: section.textDecoration ? section.textDecoration : textDecoration,
      shadow: section.shadow ? section.shadow : shadow,
    });
  });

  return formattedSections;
};
