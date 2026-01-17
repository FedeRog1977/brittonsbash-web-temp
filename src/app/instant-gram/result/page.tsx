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
  title: 'BrittonsBash | Instant Gram',
  description: 'BrittonsBash Instant Gram Page',
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
      // tags={event.tags}
      // prefix={event.prefix}
      // names={event.names}
      // startDate={event.startDate}
      // endDate={event.endDate}
      year={params.year}
      // description={event.description}
      // features={event.features}
      // sport={event.sport}
      // images={event.images}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...event}
    />
  );
};

export default InstantGramResult;
