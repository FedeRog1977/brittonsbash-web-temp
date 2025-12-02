import { Metadata } from 'next';
import { ReactElement } from 'react';
import { facade } from '../../_libs/constants/facade.js';
import { SearchParams } from '../../_libs/types/search-params.js';
import { ResultTemplate } from '../../_interface/templates/instant-gram/result/result-template.jsx';

export type ResultProps = {
  searchParams: Promise<SearchParams>;
};

export const revalidate = 300;

export const generateMetadata = (): Metadata => ({
  title: 'BrittonsBash | Instant Gram',
  description: 'BrittonsBash Instant Gram Page',
  keywords: ['brittonsbash', 'instant', 'gram'],
});

const Result = async ({ searchParams }: ResultProps): Promise<ReactElement> => {
  let eventData = await facade.getEvent('2025', 'e2025005');

  const params = await searchParams;
  if (params.year && params.event) {
    eventData = await facade.getEvent(params.year, params.event);
  }

  return (
    <ResultTemplate
      prefix={eventData.prefix}
      names={eventData.names}
      startDate={eventData.startDate}
      endDate={eventData.endDate}
      description={eventData.description}
      features={eventData.features}
      sport={eventData.sport}
      images={eventData.images}
    />
  );
};

export default Result;
