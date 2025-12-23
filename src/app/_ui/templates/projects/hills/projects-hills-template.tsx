'use client';

import { FC } from 'react';
import { Flex } from '~/libs/components-basics/flex';
import { Tile } from '~/libs/components-basics/tile';
import { Typography } from '~/libs/components-basics/typography';
import { PageLayout } from '~/libs/components-templates/page-layout';
import { HillType } from '~/libs/types';
import { isMobile } from '~/libs/utils';
import { getParsedHillUrl } from '../../../../_libs/utils/get-parsed-hill-url.js';
import { ProjectsHills } from '../../../../_schema/types/projects-hills.js';

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
