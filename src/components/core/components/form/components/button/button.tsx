'use client';

import cx from 'classnames';
import { FC, MouseEvent, ReactElement } from 'react';
import { Url } from '~/types';
import { toUpperCase } from '~/utils';
import { TextStyle } from '../../../../types/text-style.js';
import { Flex } from '../../../flex/flex.jsx';
import { GridItem } from '../../../grid/grid-item.jsx';
import { Grid } from '../../../grid/grid.jsx';
import { Loading } from '../../../loading/loading.jsx';
import { Typography } from '../../../typography/typography.js';
import { FieldWidth } from '../../types/field-width.js';
import styles from './button.module.scss.js';

export type ButtonProps = {
  variant?: 'default' | 'clear' | 'solid' | 'solidDark' | 'inverse' | 'outline';
  type?: 'button' | 'reset' | 'submit';
  typeVariant?: TextStyle['variant'];
  typeColor?: TextStyle['color'];
  typeFontFamily?: TextStyle['fontFamily'];
  children: string | ReactElement;
  subContent?: string | ReactElement;
  subContentTop?: boolean;
  icon?: ReactElement;
  value?: string;
  onClick?: (() => void) | ((event: MouseEvent) => void);
  isSubmitting?: boolean;
  link?: Url;
  width?: FieldWidth | 'auto';
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
  isSubmitting,
  link,
  width = 'full',
  transition,
}) => {
  const classNames = cx(
    styles[`variant${toUpperCase(variant)}`],
    styles[`width${toUpperCase(width)}`],
    {
      [styles.transition]: transition,
    },
  );

  if (typeof children === 'string' && link) {
    return (
      <a href={link.href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classNames} type={type} onClick={onClick} value={value}>
      <Grid
        justifyContent={isSubmitting ? 'center' : 'between'}
        alignItems="center"
        spacing={icon ? 'xs' : 'none'}
      >
        {isSubmitting ? (
          <Loading />
        ) : (
          <>
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
          </>
        )}
      </Grid>
    </button>
  );
};
