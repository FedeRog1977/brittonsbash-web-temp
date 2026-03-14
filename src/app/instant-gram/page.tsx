import { Metadata } from 'next';
import { redirect } from 'next/navigation.js';
import { ReactElement } from 'react';
import { getEventNamesByTag, getEventNamesByYear } from '~/actions';
import { SubmitHandler } from '~/components-basics/client-form';
import { InstantGramTemplate } from '~/components-templates';
import { routes } from '~/constants';
import { facade } from '~/facade';
import { InstantGramData } from '~/schema/types';

export const revalidate = 300;

export const generateMetadata = (): Metadata => ({
  title: 'brittonsbash | Instant Gram',
  description: 'brittonsbash Instant Gram Page',
  keywords: ['brittonsbash', 'instant', 'gram'],
});

const InstantGram = async (): Promise<ReactElement> => {
  const tags = await facade.getEventTags();
  const years = await facade.getEventYears();

  const eventNamesByTag = await getEventNamesByTag(years, tags);
  const eventNamesByYear = await getEventNamesByYear(years);

  // eslint-disable-next-line @typescript-eslint/require-await
  const handleSubmit: SubmitHandler<InstantGramData> = async (formValues) => {
    'use server';

    redirect(`${routes.instantGram.result}?year=${formValues.year}&event=${formValues.event}`);
  };

  return (
    <InstantGramTemplate
      onSubmit={handleSubmit}
      tags={tags}
      years={years}
      eventNamesByTag={eventNamesByTag}
      eventNamesByYear={eventNamesByYear}
    />
  );
};

export default InstantGram;
