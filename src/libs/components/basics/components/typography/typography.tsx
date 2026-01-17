import cx from 'classnames';
import { createElement, FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { toUpperCase } from '~/libs/utils';
import { TextStyle } from '../../reference/index.js';
import { tagMap } from './constants/tag-map.js';
import styles from './typography.module.scss.js';
import { enrichMarkdown } from './utils/enrich-markdown.js';

export type TypographyProps = TextStyle;

export const Typography: FC<TypographyProps> = ({
  variant,
  children,
  element,
  color = 'white',
  boldFace,
  italicize,
  smallCaps,
  textDecoration = 'none',
  shadow,
  fontFamily = 'sansSerif',
  textAlign = 'inherit',
  paragraphMargins = false,
  markdown,
}) => {
  const classNames = cx(styles.typography, {
    [styles[`variant${toUpperCase(fontFamily)}${toUpperCase(variant)}`]]: !element,
    [styles[`variant${toUpperCase(fontFamily)}Bold`]]: boldFace,
    [styles[`variant${toUpperCase(fontFamily)}Italic`]]: italicize,
    [styles[`variant${toUpperCase(fontFamily)}BoldItalic`]]: Boolean(boldFace && italicize),
    [styles.smallCaps]: smallCaps,
    [styles[`textDecoration${textDecoration ? toUpperCase(textDecoration) : 'None'}`]]:
      textDecoration,
    [styles[`color${color ? toUpperCase(color) : 'DarkerGrey'}`]]: color,
    [styles.shadow]: shadow,
    [styles[`align${toUpperCase(textAlign)}`]]: textAlign,
    [styles.paragraphMargins]: paragraphMargins,
  });

  // Reason for downgrading back to React 18
  // https://github.com/remarkjs/react-markdown/issues/877
  // react-markdown relies on JSX being in the global namespace, which has been removed in @types/react^19
  return typeof children === 'string' && markdown ? (
    <ReactMarkdown className={classNames} linkTarget="_blank">
      {enrichMarkdown(children)}
    </ReactMarkdown>
  ) : (
    createElement(element ?? tagMap[variant], {
      className: classNames,
      children,
    })
  );
};
