'use client';

import { FC } from 'react';
import { Flex } from '~/libs/components-basics/flex';
import { RowTable } from '~/libs/components-basics/table';
import { Tile } from '~/libs/components-basics/tile';
import { PageLayout } from '~/libs/components-templates/page-layout';
import { isMobile } from '~/libs/utils';
import { ProjectsEvent } from '../../../../_schema/types/projects-event.js';

export type ProjectsEventsTemplateProps = {
  year: string;
  projectsEvents: ProjectsEvent[];
};

export const ProjectsEventsTemplate: FC<ProjectsEventsTemplateProps> = ({
  year,
  projectsEvents,
}) => (
  <PageLayout background={{ type: 'sport', content: `Projects ${year}` }}>
    <Tile type="clear" width="wide">
      <Flex direction="vertical" gap={isMobile() ? 'xs' : 'md'}>
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
