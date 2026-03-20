'use client';

import { FC, ReactNode } from 'react';
import { Footer } from '~/components-core/footer';
import { Header } from '~/components-core/header';
import { PageBackgroundProps, PageBackground } from '~/components-core/page-background';

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
