import { Metadata } from 'next';
import { ReactElement } from 'react';
import { Flex } from '~/libs/components-basics/flex';
import { ColumnTable, RowTable } from '~/libs/components-basics/table';
import { Tile } from '~/libs/components-basics/tile';
import { PageLayout } from '~/libs/components-templates/page-layout';
import { facade } from '../_app-facade/index.js';
import { Typography } from '~/libs/components-basics/typography';
import { ProjectsTemplate } from '../_app-ui/templates/index.js';
import { redirect } from 'next/navigation.js';
import { SubmitHandler } from '~/libs/components-basics/form';
import { ProjectsEventsData } from '../_app-schema/types/projects-events-data.js';
import { routes } from '../_libs/constants/routes.js';
import { ProjectsHillsData } from '../_app-schema/types/projects-hills-data.js';

export const revalidate = 300;

export const generateMetadata = (): Metadata => ({
  title: 'BrittonsBash | Projects',
  description: 'BrittonsBash Projects Page',
  keywords: ['brittonsbash', 'sport', 'projects'],
});

const Projects = async (): Promise<ReactElement> => {
  const years = await facade.getEventYears();

  const projectsStats = await facade.getProjectsStats();
  const projectsSummary = await facade.getProjectsSummary();

  // TODO: move to /hills
  const projectsHills = await facade.getProjectsHills('munros');
  console.log(projectsHills);

  const handleEventsSubmit: SubmitHandler<ProjectsEventsData> = async (formValues) => {
    'use server';

    redirect(`${routes.projects.events}?year=${formValues.year}`);
  };

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
