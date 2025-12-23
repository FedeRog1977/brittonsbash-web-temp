import { Metadata } from 'next';
import { ReactElement } from 'react';
import { hillTypesCountMap, hillTypesReadableMap } from '~/libs/constants';
import { HillType } from '~/libs/types';
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
  let hillType: HillType = 'munros';
  let hillTypeReadable = 'Munros';
  let hillTypeCount = hillTypesCountMap.munros;

  const params = await searchParams;
  if (params.type) {
    projectsHills = await facade.getProjectsHills(params.type);
    hillType = params.type;
    hillTypeReadable = hillTypesReadableMap[params.type];
    hillTypeCount = hillTypesCountMap[params.type];
  }

  const hillTypeCompletionRate = getRate('percentage', projectsHills.unique, hillTypeCount);

  return (
    <ProjectsHillsTemplate
      hillType={hillType}
      hillTypeReadable={hillTypeReadable}
      hillTypeCount={hillTypeCount}
      hillTypeCompletionRate={hillTypeCompletionRate}
      projectsHills={projectsHills}
    />
  );
};

export default ProjectsHills;
