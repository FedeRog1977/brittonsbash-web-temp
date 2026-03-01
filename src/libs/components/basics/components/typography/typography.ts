import cx from 'classnames';
import { createElement, FC } from 'react';
import { toUpperCase } from '~/libs/utils';
import { TextStyle } from '../../reference/index.js';
import { tagMap } from './constants/tag-map.js';
import styles from './typography.module.scss.js';

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
}) => {
  const classNames = cx(styles.typography, {
    [styles[`variant${toUpperCase(fontFamily)}${toUpperCase(variant)}`]]: !element,
    [styles[`variant${toUpperCase(fontFamily)}Bold`]]: boldFace,
    [styles[`variant${toUpperCase(fontFamily)}Italic`]]: italicize,
    [styles[`variant${toUpperCase(fontFamily)}BoldItalic`]]: Boolean(boldFace && italicize),
    [styles.smallCaps]: smallCaps,
    [styles[`textDecoration${toUpperCase(textDecoration)}`]]: textDecoration,
    [styles[`color${toUpperCase(color)}`]]: color,
    [styles.shadow]: shadow,
    [styles[`align${toUpperCase(textAlign)}`]]: textAlign,
    [styles.paragraphMargins]: paragraphMargins,
  });

  return createElement(element ?? tagMap[variant], {
    className: classNames,
    children,
  });
};
