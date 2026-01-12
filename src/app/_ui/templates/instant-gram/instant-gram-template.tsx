/* eslint-disable @typescript-eslint/no-non-null-assertion */

'use client';

import { FC, useState } from 'react';
import { Button, Form, Select, useClientSubmit } from '~/libs/components-basics/client-form';
import { Flex } from '~/libs/components-basics/flex';
import { CustomErrors, SelectOption, SubmitHandler } from '~/libs/components-basics/form';
import { Loading } from '~/libs/components-basics/loading';
import { Spacing } from '~/libs/components-basics/spacing';
import { Tile } from '~/libs/components-basics/tile';
import { Typography } from '~/libs/components-basics/typography';
import { PageLayout } from '~/libs/components-templates/page-layout';
import { EventTag, Event as ClientEvent } from '~/libs/types';
import { sortAlphabetical, toSentenceCase } from '~/libs/utils';
import { instantGramDataValidationSchema } from '../../../_schema/constants/instant-gram-data-validation-schema.js';
import { Event } from '../../../_schema/types/event.js';
import { InstantGramData } from '../../../_schema/types/instant-gram-data.js';

export type InstantGramTemplateProps = {
  onSubmit: SubmitHandler<InstantGramData>;
  defaultValues?: Partial<InstantGramData>;
  tags: EventTag[];
  years: string[];
  events: Event[];
  flatEvents: Array<Pick<ClientEvent, 'id' | 'tags' | 'prefix' | 'names'>>;
};

export const InstantGramTemplate: FC<InstantGramTemplateProps> = ({
  onSubmit,
  defaultValues,
  tags,
  years,
  events,
  flatEvents,
}) => {
  const customErrors: CustomErrors<InstantGramData> = {
    properties: {
      event: {
        required: 'Required field, input a value',
        enum: 'Required field, input a value',
      },
    },
  };

  const [selectedTag, setSelectedTag] = useState<EventTag | undefined>(undefined);
  const [selectedYear, setSelectedYear] = useState<string>(years[0]!);
  const [eventsDisabled, setEventsDisabled] = useState<boolean>(true);

  const onSelectTag = (tag: EventTag): void => {
    setSelectedTag(tag);
    setEventsDisabled(false);
  };

  const onSelectYear = (year: string): void => {
    if (year === '') {
      return;
    }
    setSelectedYear(year);
    setEventsDisabled(false);
  };

  const tagOptions: SelectOption[] = tags
    .map((tag) => ({ label: toSentenceCase(tag), value: tag }))
    .sort(({ value: a }, { value: b }) => sortAlphabetical(b, a));

  const yearOptions: SelectOption[] = years
    .map((year) => ({
      label: year,
      value: year,
    }))
    .sort(({ value: a }, { value: b }) => sortAlphabetical(b, a));

  const eventsFilteredByTag = [];
  for (const flatEvent of flatEvents) {
    if (selectedTag && flatEvent.tags?.includes(selectedTag)) {
      eventsFilteredByTag.push(flatEvent);
    }
  }
  const eventsFilteredByTagOptions: SelectOption[] | undefined = selectedTag
    ? eventsFilteredByTag
        .map((event) => ({
          label: `${event.prefix ? `${event.prefix}: ` : ''}${event.names.join(', ')}`,
          value: event.id.toLowerCase(),
        }))
        .sort(({ value: a }, { value: b }) => sortAlphabetical(b, a))!
    : undefined;

  const eventsFilteredByYear = events.find((event) => event.year === selectedYear);
  const eventsFilteredByYearOptions: SelectOption[] = eventsFilteredByYear?.events
    .map((event) => ({
      label: `${event.prefix ? `${event.prefix}: ` : ''}${event.names.join(', ')}`,
      value: event.id.toLowerCase(),
    }))
    .sort(({ value: a }, { value: b }) => sortAlphabetical(b, a))!;

  const { handleSubmit, isSubmitting } = useClientSubmit(onSubmit);

  return (
    <PageLayout background={{ type: 'ig', content: 'Instant Gram' }}>
      <Tile type="clear" width="wide">
        <Flex direction="vertical" gap="md">
          <Form
            validationSchema={instantGramDataValidationSchema}
            customErrors={customErrors}
            onSubmit={handleSubmit}
            defaultValues={defaultValues}
          >
            <Flex direction="vertical" alignHorizontal="left" gap="md">
              <Typography variant="t2">Search Events</Typography>

              <Select
                name="tag"
                label="Filter by Tag"
                options={tagOptions}
                onChange={(event): void => {
                  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                  onSelectTag(event as EventTag);
                }}
                defaultValue=""
              />

              <Select
                name="year"
                label="Filter By Year"
                options={yearOptions}
                onChange={(event): void => {
                  onSelectYear(event);
                }}
                defaultValue=""
                disabled={Boolean(selectedTag)}
              />

              <Spacing marginBottom="xl" />

              <Select
                name="event"
                label="Select Event"
                options={eventsFilteredByTagOptions ?? eventsFilteredByYearOptions}
                disabled={eventsDisabled}
              />

              {isSubmitting ? (
                <Loading />
              ) : (
                <Button variant="solidDark" type="submit" width="quarter">
                  Submit
                </Button>
              )}
            </Flex>
          </Form>
        </Flex>
      </Tile>
    </PageLayout>
  );
};
