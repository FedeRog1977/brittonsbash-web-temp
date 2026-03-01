import { Metadata } from 'next';
import { ReactElement } from 'react';
import { facade } from '../../_facade/index.js';
import { InstantGramSearchParams } from '../../_libs/types/instant-gram-search-params.js';
import { InstantGramResultTemplate } from '../../_ui/templates/instant-gram/result/instant-gram-result-template.jsx';

export type InstantGramResultProps = {
  searchParams: Promise<InstantGramSearchParams>;
};

export const revalidate = 300;

export const generateMetadata = (): Metadata => ({
  title: 'brittonsbash | Instant Gram',
  description: 'brittonsbash Instant Gram Page',
  keywords: ['brittonsbash', 'instant', 'gram'],
});

const InstantGramResult = async ({
  searchParams,
}: InstantGramResultProps): Promise<ReactElement> => {
  let event = await facade.getEvent('2025', 'e2025005');

  const params = await searchParams;
  if (params.year && params.event) {
    event = await facade.getEvent(params.year, params.event);
  }

  return (
    <InstantGramResultTemplate
      year={event.id.slice(1, 5)}
      tags={event.tags}
      prefix={event.prefix}
      names={event.names}
      startDate={event.startDate}
      endDate={event.endDate}
      description={event.description}
      features={event.features}
      sport={event.sport}
      images={event.images}
    />
  );
};

export default InstantGramResult;
