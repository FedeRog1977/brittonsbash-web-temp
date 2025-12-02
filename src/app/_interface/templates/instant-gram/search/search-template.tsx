'use client';

import { instantGramDataValidationSchema } from '../../../../_common/constants/instant-gram-data-validation-schema.js';
import { Event } from '../../../../_common/types/event.js';
import { InstantGramData } from '../../../../_common/types/instant-gram-data.js';
import { Button, Form, Select, useClientSubmit } from '~/libs/components-basics/client-form';
import { Flex } from '~/libs/components-basics/flex';
import { CustomErrors, SelectOption, SubmitHandler } from '~/libs/components-basics/form';
import { Loading } from '~/libs/components-basics/loading';
import { Tile } from '~/libs/components-basics/tile';
import { Spacing } from '~/libs/components-basics/spacing';
import { PageLayout } from '~/libs/components-templates/page-layout';
import { sortAlphabetical } from '~/libs/utils';
import { FC, useState } from 'react';
import { Typography } from '~/libs/components-basics/typography';

export type SearchTemplateProps = {
  onSubmit: SubmitHandler<InstantGramData>;
  defaultValues?: Partial<InstantGramData>;
  years: string[];
  events: Event[];
};

export const SearchTemplate: FC<SearchTemplateProps> = ({
  onSubmit,
  defaultValues,
  years,
  events,
}) => {
  const customErrors: CustomErrors<InstantGramData> = {
    properties: {
      year: {
        required: 'Required field, input a value',
        enum: 'Required field, input a value',
      },
      event: {
        required: 'Required field, input a value',
        enum: 'Required field, input a value',
      },
    },
  };

  const [selectedYear, setSelectedYear] = useState<string>(years[0]!);
  const [eventDisabled, setEventDisabled] = useState<boolean>(true);

  const yearOptions: SelectOption[] = years
    .map((year) => ({
      label: year,
      value: year,
    }))
    .sort(({ value: a }, { value: b }) => sortAlphabetical(b, a));

  const eventOptions: SelectOption[] = events
    .find((event) => event.year === selectedYear)
    ?.events.map((event) => ({
      label: `${event.prefix ? `${event.prefix}: ` : ''}${event.names!.join(', ')}`,
      value: event.id.toLowerCase(),
    }))
    .sort(({ value: a }, { value: b }) => sortAlphabetical(b, a))!;

  const onSelectYear = (year: string): void => {
    setSelectedYear(year);
    setEventDisabled(false);
  };

  const { handleSubmit, isSubmitting } = useClientSubmit(onSubmit);

  return (
    <PageLayout background={{ type: 'ig', content: 'Instant Gram' }}>
      <Tile type="clear" width="wide">
        <Spacing marginY="xl">
          <Flex direction="vertical" gap="md">
            <Form
              validationSchema={instantGramDataValidationSchema}
              customErrors={customErrors}
              onSubmit={handleSubmit}
              defaultValues={defaultValues}
            >
              <Flex direction="vertical" alignHorizontal="center" gap="md">
                <Typography variant="t2">Search Events</Typography>

                <Select
                  name="year"
                  label="Select event year"
                  options={yearOptions}
                  onChange={(event): void => {
                    onSelectYear(event);
                  }}
                  defaultValue={selectedYear}
                />

                <Select
                  name="event"
                  label="Select event"
                  options={eventOptions}
                  disabled={eventDisabled}
                />

                {isSubmitting ? (
                  <Loading />
                ) : (
                  <Button variant="default" type="submit" width="quarter">
                    Submit
                  </Button>
                )}
              </Flex>
            </Form>

            {/* <form method="GET" action="/instant-gram/result">
            <Flex direction="vertical" alignHorizontal="center" gap="md">
              <input id="yearTestId" name="year"></input>
              <select
                id="yearTestId"
                name="year"
                onChange={(event): void => {
                  onSelectYear(event.target.value);
                }}
              >
                {yearOptions.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>

              <input id="idTestId" name="event"></input>
              <select id="idTestId" name="event">
                {eventOptions.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>

              {isSubmitting ? (
                <Loading />
              ) : (
                <Button variant="default" type="submit" width="quarter">
                  Submit
                </Button>
              )}
            </Flex>
          </form> */}
          </Flex>
        </Spacing>
      </Tile>
    </PageLayout>
  );
};
