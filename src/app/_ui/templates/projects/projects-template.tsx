'use client';

import { FC } from 'react';
import { Button, Form, Select, useClientSubmit } from '~/libs/components-basics/client-form';
import { Flex } from '~/libs/components-basics/flex';
import { CustomErrors, SelectOption, SubmitHandler } from '~/libs/components-basics/form';
import { Loading } from '~/libs/components-basics/loading';
import { ColumnTable } from '~/libs/components-basics/table';
import { Tile } from '~/libs/components-basics/tile';
import { Typography } from '~/libs/components-basics/typography';
import { PageLayout } from '~/libs/components-templates/page-layout';
import { hillTypes, hillTypesReadableMap } from '~/libs/constants';
import { isMobile, sortAlphabetical } from '~/libs/utils';
import { projectsEventsDataValidationSchema } from '../../../_schema/constants/projects-events-data-validation-schema.js';
import { projectsHillsDataValidationSchema } from '../../../_schema/constants/projects-hills-data-validation-schema.js';
import { ProjectsEventsData } from '../../../_schema/types/projects-events-data.js';
import { ProjectsHillsData } from '../../../_schema/types/projects-hills-data.js';
import { ProjectsStats } from '../../../_schema/types/projects-stats.js';
import { ProjectsSummary } from '../../../_schema/types/projects-summary.js';

export type ProjectsTemplateProps = {
  onEventsSubmit: SubmitHandler<ProjectsEventsData>;
  defaultEventsValues?: Partial<ProjectsEventsData>;
  onHillsSubmit: SubmitHandler<ProjectsHillsData>;
  defaultHillsValues?: Partial<ProjectsHillsData>;
  years: string[];
  projectsSummary: ProjectsSummary;
  projectsStats: ProjectsStats;
};

export const ProjectsTemplate: FC<ProjectsTemplateProps> = ({
  onEventsSubmit,
  defaultEventsValues,
  onHillsSubmit,
  defaultHillsValues,
  years,
  projectsSummary,
  projectsStats,
}) => {
  const customEventsErrors: CustomErrors<ProjectsEventsData> = {
    properties: {
      year: {
        required: 'Required field, input a value',
        enum: 'Required field, input a value',
      },
    },
  };

  const customHillsErrors: CustomErrors<ProjectsHillsData> = {
    properties: {
      type: {
        required: 'Required field, input a value',
        enum: 'Required field, input a value',
      },
    },
  };

  const yearOptions: SelectOption[] = years
    .map((year) => ({
      label: year,
      value: year,
    }))
    .sort(({ value: a }, { value: b }) => sortAlphabetical(b, a));

  const typeOptions: SelectOption[] = hillTypes.map((hillType) => ({
    label: hillTypesReadableMap[hillType],
    value: hillType,
  }));

  const { handleSubmit: handleEventsSubmit, isSubmitting: isEventsSubmitting } =
    useClientSubmit(onEventsSubmit);
  const { handleSubmit: handleHillsSubmit, isSubmitting: isHillsSubmitting } =
    useClientSubmit(onHillsSubmit);

  return (
    <PageLayout background={{ type: 'sport', content: 'Projects' }}>
      <Tile type="clear" width="wide">
        <Flex direction="vertical" gap={isMobile() ? 'xs' : 'md'}>
          <Typography variant="t2">Search</Typography>

          <Form
            validationSchema={projectsEventsDataValidationSchema}
            customErrors={customEventsErrors}
            onSubmit={handleEventsSubmit}
            defaultValues={defaultEventsValues}
          >
            <Flex direction="vertical" alignHorizontal="left" gap="md">
              <Select name="year" label="Find Projects by Year" options={yearOptions} />

              {isEventsSubmitting ? (
                <Loading />
              ) : (
                <Button variant="solidDark" type="submit" width="quarter">
                  Find Projects
                </Button>
              )}
            </Flex>
          </Form>

          <Form
            validationSchema={projectsHillsDataValidationSchema}
            customErrors={customHillsErrors}
            onSubmit={handleHillsSubmit}
            defaultValues={defaultHillsValues}
          >
            <Flex direction="vertical" alignHorizontal="left" gap="md">
              <Select name="type" label="Find Hills by Type" options={typeOptions} />

              {isHillsSubmitting ? (
                <Loading />
              ) : (
                <Button variant="solidDark" type="submit" width="quarter">
                  Find Hills
                </Button>
              )}
            </Flex>
          </Form>

          <ColumnTable
            leftColumn={{
              title: 'Summary',
              entries: projectsSummary.labels,
            }}
            rightColumns={[
              {
                title: 'Instances',
                entries: projectsSummary.instances,
              },
              {
                title: 'Distance',
                entries: projectsSummary.distances,
              },
              {
                title: 'Elevation',
                entries: projectsSummary.elevations,
              },
            ]}
          />

          <ColumnTable
            leftColumn={{
              title: 'Hill Stats',
              entries: projectsStats.labels,
            }}
            rightColumns={[
              {
                title: 'Munros',
                entries: projectsStats.munros,
              },
              {
                title: 'Munro Tops',
                entries: projectsStats.munroTops,
              },
              {
                title: 'Corbetts',
                entries: projectsStats.corbetts,
              },
              {
                title: 'Grahams',
                entries: projectsStats.grahams,
              },
              {
                title: 'Sub2000s',
                entries: projectsStats.subTwos,
              },
              {
                title: 'Donalds',
                entries: projectsStats.donalds,
              },
            ]}
          />

          <Typography variant="footnote">
            Islands and Corbett Tops stats are not included in the above table, in the interest of
            aesthetics.
          </Typography>

          {/* <ColumnTable
            leftColumn={{
              title: 'Hill Stats Cont.',
              entries: projectsStats.labels,
            }}
            rightColumns={[
              {
                title: 'Islands',
                entries: projectsStats.islands,
              },
              {
                title: 'Corbett Tops',
                entries: projectsStats.corbettTops,
              },
            ]}
          /> */}
        </Flex>
      </Tile>
    </PageLayout>
  );
};
