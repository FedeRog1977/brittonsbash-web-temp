'use client';

import { FC, ReactNode } from 'react';
import { Footer } from '~/libs/components-basics/footer';
import { Header } from '~/libs/components-basics/header';
import { PageBackgroundProps, PageBackground } from '~/libs/components-basics/page-background';

export type PageLayoutProps = {
  background?: PageBackgroundProps;
  children: ReactNode | ReactNode[];
};

export const PageLayout: FC<PageLayoutProps> = ({ background, children }) => (
  <>
    <Header />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    {background ? <PageBackground {...background} /> : null}
    {children}
    <Footer />
  </>
);
