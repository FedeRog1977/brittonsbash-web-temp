import { Metadata } from 'next';
import { ReactElement } from 'react';
import { ProjectsHillsTemplate } from '~/components-templates';
import { hillTypesCountMap, hillTypesReadableMap } from '~/constants';
import { facade } from '~/facade';
import { ProjectsSearchParams } from '~/schema/types';
import { HillType } from '~/types';
import { getRate } from '~/utils';

export type ProjectsHillsProps = {
  searchParams: Promise<ProjectsSearchParams>;
};

export const revalidate = 300;

export const generateMetadata = (): Metadata => ({
  title: 'brittonsbash | Projects',
  description: 'brittonsbash Projects Page',
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
