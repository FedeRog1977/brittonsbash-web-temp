import { Metadata } from 'next';
import { redirect } from 'next/navigation.js';
import { ReactElement } from 'react';
import { PageParams } from './_libs/types/page-params.js';
import { SearchParams } from './_libs/types/search-params.js';
import { HomeTemplate } from './_interface/templates/home-template.jsx';

export type HomePageProps = {
  params: Promise<PageParams>;
  searchParams: Promise<SearchParams>;
};

export const revalidate = 300;

// Will make a call to the facade
// eslint-disable-next-line @typescript-eslint/require-await
export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'BrittonsBash | Home',
  description: 'BrittonsBash Home Page',
  keywords: ['brittonsbash'],
});

const Home = async ({ searchParams }: HomePageProps): Promise<ReactElement> => {
  const params = await searchParams;

  if (params.go) {
    redirect(params.go);
  }

  return <HomeTemplate />;
};

export default Home;
