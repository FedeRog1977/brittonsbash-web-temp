import { FC } from 'react';
import { Button } from '../client-form/components/button/button.js';

export type CtaProps = {
  content: string;
  href: string;
  invert?: boolean;
};

export const Cta: FC<CtaProps> = ({ content, href, invert = false }) => {
  const invertedButtonVariant = invert ? 'inverse' : 'solid';

  return (
    <Button
      variant={invertedButtonVariant}
      typeVariant="h3"
      // func={() => (window.location.href = href)}
      link={{ href }}
    >
      {content}
    </Button>
  );
};
