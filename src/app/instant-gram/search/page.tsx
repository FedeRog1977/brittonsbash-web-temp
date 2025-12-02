import { SubmitHandler } from '~/libs/components-basics/form';
import { Metadata } from 'next';
import { redirect } from 'next/navigation.js';
import { ReactElement } from 'react';
import { InstantGramData } from '../../_common/types/instant-gram-data.js';
import { SearchTemplate } from '../../_interface/templates/index.js';
import { routes } from '../../_libs/constants/routes.js';
import { getEventNames } from '../../_libs/utils/get-event-names.js';

export const revalidate = 300;

export const generateMetadata = (): Metadata => ({
  title: 'BrittonsBash | Instant Gram',
  description: 'BrittonsBash Instant Gram Page',
  keywords: ['brittonsbash', 'instant', 'gram'],
});

const Search = async (): Promise<ReactElement> => {
  // TODO: support this as an array of strings in the API, and fetch here
  const years = ['2025', '2024', '2023', '2022', '2021', '2020'];
  const events = await getEventNames(years);

  const handleSubmit: SubmitHandler<InstantGramData> = async (formValues) => {
    'use server';

    // TODO: flatten all events to single level in the API, making the req. for `year`
    // in both the API request and therefore, Next.js params redundant
    redirect(`${routes.instantGram.result}?year=${formValues.year}&event=${formValues.event}`);
  };

  return <SearchTemplate onSubmit={handleSubmit} years={years} events={events} />;
};

export default Search;
