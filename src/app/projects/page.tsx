import { Metadata } from 'next';
import { redirect } from 'next/navigation.js';
import { ReactElement } from 'react';
import { SubmitHandler } from '~/components-basics/form';
import { ProjectsTemplate } from '~/components-templates';
import { routes } from '~/constants';
import { facade } from '~/facade';
import { ProjectsEventsData, ProjectsHillsData } from '~/schema/types';

export const revalidate = 300;

export const generateMetadata = (): Metadata => ({
  title: 'brittonsbash | Projects',
  description: 'brittonsbash Projects Page',
  keywords: ['brittonsbash', 'sport', 'projects'],
});

const Projects = async (): Promise<ReactElement> => {
  const years = await facade.getEventYears();

  const projectsStats = await facade.getProjectsStats();
  const projectsSummary = await facade.getProjectsSummary();

  // eslint-disable-next-line @typescript-eslint/require-await
  const handleEventsSubmit: SubmitHandler<ProjectsEventsData> = async (formValues) => {
    'use server';

    redirect(`${routes.projects.events}?year=${formValues.year}`);
  };

  // eslint-disable-next-line @typescript-eslint/require-await
  const handleHillsSubmit: SubmitHandler<ProjectsHillsData> = async (formValues) => {
    'use server';

    redirect(`${routes.projects.hills}?type=${formValues.type}`);
  };

  return (
    <ProjectsTemplate
      onEventsSubmit={handleEventsSubmit}
      onHillsSubmit={handleHillsSubmit}
      years={years}
      projectsSummary={projectsSummary}
      projectsStats={projectsStats}
    />
  );
};

export default Projects;
