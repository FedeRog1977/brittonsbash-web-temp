'use client';

import { Footer } from '~/libs/components-basics/footer';
import { Header } from '~/libs/components-basics/header';
import { PageBackgroundProps, PageBackground } from '~/libs/components-basics/page-background';
import { FC, ReactNode } from 'react';

export type PageLayoutProps = {
  background?: PageBackgroundProps;
  children: ReactNode | ReactNode[];
};

export const PageLayout: FC<PageLayoutProps> = ({ background, children }) => {
  return (
    <>
      <Header />
      {background ? <PageBackground {...background} /> : null}
      {/* <Spacing marginTop="md" marginBottom="md">
        {children[0]}
      </Spacing>
      {children.slice(1, children.length).map((child) => (
        <Spacing marginBottom="md">{child}</Spacing>
      ))} */}
      {children}
      <Footer />
    </>
  );
};
