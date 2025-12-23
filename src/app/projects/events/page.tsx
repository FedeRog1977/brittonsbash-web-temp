import { Metadata } from 'next';
import { ReactElement } from 'react';
import { facade } from '../../_facade/index.js';
import { ProjectsSearchParams } from '../../_libs/types/projects-search-params.js';
import { ProjectsEventsTemplate } from '../../_ui/templates/projects/events/projects-events-template.jsx';

export type ProjectsEventsProps = {
  searchParams: Promise<ProjectsSearchParams>;
};

export const revalidate = 300;

export const generateMetadata = (): Metadata => ({
  title: 'BrittonsBash | Projects',
  description: 'BrittonsBash Projects Page',
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
