import { Metadata } from 'next';
import { ReactElement } from 'react';
import { ProjectsEventsTemplate } from '~/components-templates';
import { facade } from '~/facade';
import { ProjectsSearchParams } from '~/schema/types';

export type ProjectsEventsProps = {
  searchParams: Promise<ProjectsSearchParams>;
};

export const revalidate = 300;

export const generateMetadata = (): Metadata => ({
  title: 'brittonsbash | Projects',
  description: 'brittonsbash Projects Page',
  keywords: ['brittonsbash', 'sport', 'projects'],
});

const ProjectsEvents = async ({ searchParams }: ProjectsEventsProps): Promise<ReactElement> => {
  let projectsEvents = await facade.getProjectsEvents('2025');
  let year = '2025';

  const params = await searchParams;
  if (params.year) {
    projectsEvents = await facade.getProjectsEvents(params.year);
    year = params.year;
  }

  return <ProjectsEventsTemplate year={year} projectsEvents={projectsEvents} />;
};

export default ProjectsEvents;
