import cx from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './spacing.module.scss.js';
import { SpacingConfig, getResponsiveSpacingClassNames } from '../../reference/index.js';

export type SpacingProps = {
  children?: ReactNode;
  margin?: SpacingConfig;
  marginX?: SpacingConfig;
  marginY?: SpacingConfig;
  marginTop?: SpacingConfig;
  marginRight?: SpacingConfig;
  marginBottom?: SpacingConfig;
  marginLeft?: SpacingConfig;
  padding?: SpacingConfig;
  paddingX?: SpacingConfig;
  paddingY?: SpacingConfig;
  paddingTop?: SpacingConfig;
  paddingRight?: SpacingConfig;
  paddingBottom?: SpacingConfig;
  paddingLeft?: SpacingConfig;
  inline?: boolean;
};

export const Spacing: FC<SpacingProps> = ({
  children,
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  inline = false,
}) => {
  const display = inline ? 'inline' : 'block';

  const classNames = cx(
    ...getResponsiveSpacingClassNames('margin', styles, margin),
    ...getResponsiveSpacingClassNames('marginX', styles, marginX),
    ...getResponsiveSpacingClassNames('marginY', styles, marginY),
    ...getResponsiveSpacingClassNames('marginTop', styles, marginTop),
    ...getResponsiveSpacingClassNames('marginRight', styles, marginRight),
    ...getResponsiveSpacingClassNames('marginBottom', styles, marginBottom),
    ...getResponsiveSpacingClassNames('marginLeft', styles, marginLeft),
    ...getResponsiveSpacingClassNames('padding', styles, padding),
    ...getResponsiveSpacingClassNames('paddingX', styles, paddingX),
    ...getResponsiveSpacingClassNames('paddingY', styles, paddingY),
    ...getResponsiveSpacingClassNames('paddingTop', styles, paddingTop),
    ...getResponsiveSpacingClassNames('paddingRight', styles, paddingRight),
    ...getResponsiveSpacingClassNames('paddingBottom', styles, paddingBottom),
    ...getResponsiveSpacingClassNames('paddingLeft', styles, paddingLeft),
    {
      [styles.inline]: inline,
    },
  );

  return (
    <div className={classNames} data-display={display}>
      {children}
    </div>
  );
};
