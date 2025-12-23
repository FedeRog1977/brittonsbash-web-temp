import { Metadata } from 'next';
import { ReactElement } from 'react';
import { hillTypesCountMap, hillTypesReadableMap } from '~/libs/constants';
import { getRate } from '~/libs/utils';
import { facade } from '../../_facade/index.js';
import { ProjectsSearchParams } from '../../_libs/types/projects-search-params.js';
import { ProjectsHillsTemplate } from '../../_ui/templates/projects/hills/projects-hills-template.jsx';

export type ProjectsHillsProps = {
  searchParams: Promise<ProjectsSearchParams>;
};

export const revalidate = 300;

export const generateMetadata = (): Metadata => ({
  title: 'BrittonsBash | Projects',
  description: 'BrittonsBash Projects Page',
  keywords: ['brittonsbash', 'sport', 'projects'],
});

const ProjectsHills = async ({ searchParams }: ProjectsHillsProps): Promise<ReactElement> => {
  let projectsHills = await facade.getProjectsHills('munros');
  let hillType = 'Munros';
  let hillTypeCount = hillTypesCountMap.munros;

  const params = await searchParams;
  if (params.type) {
    projectsHills = await facade.getProjectsHills(params.type);
    hillType = hillTypesReadableMap[params.type];
    hillTypeCount = hillTypesCountMap[params.type];
  }

  const hillTypeCompletionRate = getRate('percentage', projectsHills.unique, hillTypeCount);

  return (
    <ProjectsHillsTemplate
      hillType={hillType}
      hillTypeCount={hillTypeCount}
      hillTypeCompletionRate={hillTypeCompletionRate}
      projectsHills={projectsHills}
    />
  );
};

export default ProjectsHills;
