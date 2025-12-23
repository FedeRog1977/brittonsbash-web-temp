import { Metadata } from 'next';
import { redirect } from 'next/navigation.js';
import { ReactElement } from 'react';
import { SubmitHandler } from '~/libs/components-basics/form';
import { facade } from '../_facade/index.js';
import { routes } from '../_libs/constants/routes.js';
import { getEventNames } from '../_libs/utils/get-event-names.js';
import { InstantGramData } from '../_schema/types/instant-gram-data.js';
import { InstantGramTemplate } from '../_ui/templates/index.js';

export const revalidate = 300;

export const generateMetadata = (): Metadata => ({
  title: 'BrittonsBash | Instant Gram',
  description: 'BrittonsBash Instant Gram Page',
  keywords: ['brittonsbash', 'instant', 'gram'],
});

const InstantGram = async (): Promise<ReactElement> => {
  const years = await facade.getEventYears();
  const events = await getEventNames(years);

  // eslint-disable-next-line @typescript-eslint/require-await
  const handleSubmit: SubmitHandler<InstantGramData> = async (formValues) => {
    'use server';

    // TODO: flatten all events to single level in the API, making the req. for `year`
    // in both the API request and therefore, Next.js params redundant
    redirect(`${routes.instantGram.result}?year=${formValues.year}&event=${formValues.event}`);
  };

  return <InstantGramTemplate onSubmit={handleSubmit} years={years} events={events} />;
};

export default InstantGram;
