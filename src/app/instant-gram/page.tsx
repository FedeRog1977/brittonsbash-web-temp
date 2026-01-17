import { Metadata } from 'next';
import { redirect } from 'next/navigation.js';
import { ReactElement } from 'react';
import { SubmitHandler } from '~/libs/components-basics/form';
import { facade } from '../_facade/index.js';
import { routes } from '../_libs/constants/routes.js';
import { getEventNamesByTag } from '../_libs/utils/get-event-names-by-tag.js';
import { getEventNamesByYear } from '../_libs/utils/get-event-names-by-year.js';
import { InstantGramData } from '../_schema/types/instant-gram-data.js';
import { InstantGramTemplate } from '../_ui/templates/index.js';

export const revalidate = 300;

export const generateMetadata = (): Metadata => ({
  title: 'BrittonsBash | Instant Gram',
  description: 'BrittonsBash Instant Gram Page',
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
