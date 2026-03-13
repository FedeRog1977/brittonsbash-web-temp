import { Metadata } from 'next';
import { redirect } from 'next/navigation.js';
import { ReactElement } from 'react';
import { HomeTemplate } from '~/components-templates';
import { HomeSearchParams } from '~/schema/types';

export type HomePageProps = {
  // params: Promise<PageParams>;
  searchParams: Promise<HomeSearchParams>;
};

export const revalidate = 300;

// Will make a call to the facade
// eslint-disable-next-line @typescript-eslint/require-await
export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'brittonsbash | Home',
  description: 'brittonsbash Home Page',
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
