'use client';

import { Url } from '~/libs/types';
import { toUpperCase } from '~/libs/utils';
import cx from 'classnames';
import { FC, ReactElement } from 'react';
import { TextStyle } from '../../../../reference/index.js';
import { Flex } from '../../../flex/flex.js';
import { GridItem } from '../../../grid/grid-item.js';
import { Grid } from '../../../grid/grid.js';
import { Typography } from '../../../typography/typography.js';
import styles from './button.module.scss.js';

export type ButtonProps = {
  variant?: 'default' | 'clear' | 'solid' | 'solidDark' | 'inverse';
  type?: 'reset' | 'submit' | 'button';
  typeVariant?: TextStyle['variant'];
  typeColor?: TextStyle['color'];
  typeFontFamily?: TextStyle['fontFamily'];
  children: string | ReactElement;
  subContent?: string | ReactElement;
  subContentTop?: boolean;
  icon?: ReactElement;
  value?: string;
  onClick?: (() => void) | ((e: any) => void);
  link?: Url;
  width?: 'default' | 'quarter' | 'half' | 'full';
  transition?: boolean;
};

export const Button: FC<ButtonProps> = ({
  variant = 'default',
  type,
  typeVariant = 'body',
  typeColor = 'white',
  typeFontFamily,
  children,
  subContent,
  subContentTop,
  icon,
  value,
  onClick,
  link,
  width = 'default',
  transition,
}) => {
  const classNames = cx(
    styles[`variant${toUpperCase(variant)}`],
    styles[`width${toUpperCase(width)}`],
    {
      [styles.transition]: transition,
    },
  );

  if (typeof children === 'string' && link)
    return (
      <Typography variant={typeVariant} markdown>
        {`[${children}](${link.href})`}
      </Typography>
    );

  return (
    <button className={classNames} type={type} onClick={onClick} value={value}>
      <Grid justifyContent="between" alignItems="center" spacing={icon ? 'xs' : 'none'}>
        <GridItem xs={icon ? 6 : 12}>
          <Flex
            direction={subContentTop ? 'vertical' : 'horizontal'}
            alignHorizontal={icon ? 'left' : 'center'}
            alignVertical="center"
            gap="xs"
          >
            {subContent ? (
              <Typography variant="body" color="lightGrey" textAlign="center">
                {subContent}
              </Typography>
            ) : null}

            <Typography
              variant={typeVariant}
              color={typeColor}
              fontFamily={typeFontFamily}
              textAlign="center"
            >
              {children}
            </Typography>
          </Flex>
        </GridItem>

        {icon ? (
          <GridItem xs={1}>
            <Typography variant="footnote" color={typeColor} textAlign="right">
              {icon}
            </Typography>
          </GridItem>
        ) : null}
      </Grid>
    </button>
  );
};
