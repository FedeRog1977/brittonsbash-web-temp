import { Metadata } from 'next';
import { ReactElement } from 'react';
import { InstantGramSearchParams } from '../../_libs/types/instant-gram-search-params.js';
import { InstantGramResultTemplate } from '../../_app-ui/templates/instant-gram/result/instant-gram-result-template.jsx';
import { facade } from '../../_app-facade/index.js';

export type InstantGramResultProps = {
  searchParams: Promise<InstantGramSearchParams>;
};

export const revalidate = 300;

export const generateMetadata = (): Metadata => ({
  title: 'BrittonsBash | Instant Gram',
  description: 'BrittonsBash Instant Gram Page',
  keywords: ['brittonsbash', 'instant', 'gram'],
});

const InstantGramResult = async ({
  searchParams,
}: InstantGramResultProps): Promise<ReactElement> => {
  let eventData = await facade.getEvent('2025', 'e2025005');

  const params = await searchParams;
  if (params.year && params.event) {
    eventData = await facade.getEvent(params.year, params.event);
  }

  return (
    <InstantGramResultTemplate
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

export default InstantGramResult;
