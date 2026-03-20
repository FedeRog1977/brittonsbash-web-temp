'use client';

import { FC } from 'react';
import { Flex } from '~/components-core/flex';
import { Tile } from '~/components-core/tile';
import { Typography } from '~/components-core/typography';
import { PageLayout } from '~/components-layouts/page-layout';
import { ProjectsHills } from '~/schema/types';
import { HillType } from '~/types';
import { isMobile, getParsedHillUrl } from '~/utils';

export type ProjectsHillsTemplateProps = {
  hillType: HillType;
  hillTypeReadable: string;
  hillTypeCount: number;
  hillTypeCompletionRate: string;
  projectsHills: ProjectsHills;
};

export const ProjectsHillsTemplate: FC<ProjectsHillsTemplateProps> = ({
  hillType,
  hillTypeReadable,
  hillTypeCount,
  hillTypeCompletionRate,
  projectsHills,
}) => (
  <PageLayout background={{ type: 'sport', content: `${hillTypeReadable}` }}>
    <Tile type="clear" width="wide">
      <Flex direction="vertical" alignHorizontal="center" gap={isMobile() ? 'xs' : 'md'}>
        <Typography variant="h4">
          I have bagged {projectsHills.unique} of {hillTypeCount} ({hillTypeCompletionRate}){' '}
          {hillTypeReadable}, with {projectsHills.total} total ascents.
        </Typography>

        <Flex direction="vertical" alignHorizontal="center" gap="2xs">
          {projectsHills.hills.map((hill) => (
            <Typography key={hill} variant="caption">
              <a href={getParsedHillUrl(hill, hillType)}>{hill}</a>
            </Typography>
          ))}
        </Flex>
      </Flex>
    </Tile>
  </PageLayout>
);
