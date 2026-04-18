import { FC } from 'react';
import { PageLayout } from '~/components-layouts/page-layout';
import { StaticResources } from '~/schema/types';
import { Content } from './components/content.jsx';

type StaticTemplateProps = {
  resources: Pick<StaticResources, 'title' | 'content'>;
};

export const StaticTemplate: FC<StaticTemplateProps> = ({ resources }) => (
  <PageLayout background={{ content: resources.title }}>
    {resources.content.map((contentSection, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Content key={index} content={contentSection} />
    ))}
  </PageLayout>
);
