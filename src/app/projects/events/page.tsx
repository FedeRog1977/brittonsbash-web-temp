import { Metadata } from 'next';
import { ReactElement } from 'react';
import { ProjectsSearchParams } from '../../_libs/types/projects-search-params.js';
import { facade } from '../../_app-facade/index.js';
import { Flex } from '~/libs/components-basics/flex';
import { RowTable } from '~/libs/components-basics/table';
import { Tile } from '~/libs/components-basics/tile';
import { PageLayout } from '~/libs/components-templates/page-layout';
import { isMobile } from '~/libs/utils';

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

  const params = await searchParams;
  if (params.year) {
    projectsEvents = await facade.getProjectsEvents(params.year);
  }

  return (
    <PageLayout background={{ type: 'sport', content: `Projects ${params.year}` }}>
      <Tile type="clear" width="wide">
        <Flex direction="vertical" gap={isMobile() ? 'xs' : 'md'}>
          {/* <Flex direction="vertical" alignHorizontal="center" gap="2xs">
      {projectsHillNames.map((hillName) => (
        <Typography key={hillName} variant="caption">
          {hillName}
        </Typography>
      ))}
    </Flex> */}

          {projectsEvents.map(
            ({
              name,
              distance,
              elevation,
              time,
              companionship,
              islands,
              munros,
              munroTops,
              corbetts,
              corbettTops,
              grahams,
              subTwos,
              donalds,
            }) => (
              <RowTable
                key={name}
                titleRow={{
                  leftItem: name,
                  rightItem: undefined,
                }}
                rows={[
                  {
                    leftItem: 'Distance',
                    rightItem: distance,
                  },
                  {
                    leftItem: 'Elevation',
                    rightItem: elevation,
                  },
                  {
                    leftItem: 'Moving time',
                    rightItem: time,
                  },
                  {
                    leftItem: 'Companionship',
                    rightItem: companionship,
                  },
                  {
                    leftItem: 'Islands',
                    rightItem: islands,
                  },
                  {
                    leftItem: 'Munros',
                    rightItem: munros,
                  },
                  {
                    leftItem: 'Munro Tops',
                    rightItem: munroTops,
                  },
                  {
                    leftItem: 'Corbetts',
                    rightItem: corbetts,
                  },
                  {
                    leftItem: 'Corbett Tops',
                    rightItem: corbettTops,
                  },
                  {
                    leftItem: 'Grahams',
                    rightItem: grahams,
                  },
                  {
                    leftItem: "Sub 2000's",
                    rightItem: subTwos,
                  },
                  {
                    leftItem: 'Donalds',
                    rightItem: donalds,
                  },
                ]}
              />
            ),
          )}
        </Flex>
      </Tile>
    </PageLayout>
  );
};

export default ProjectsEvents;
