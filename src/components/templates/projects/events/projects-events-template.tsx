'use client';

import { FC } from 'react';
import { Flex } from '~/components-core/flex';
import { RowTable } from '~/components-core/table';
import { Tile } from '~/components-core/tile';
import { PageLayout } from '~/components-layouts/page-layout';
import { ProjectsEvent } from '~/schema/types';
import { isMobile } from '~/utils';

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
