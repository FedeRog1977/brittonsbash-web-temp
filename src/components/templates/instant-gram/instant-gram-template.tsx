/* eslint-disable @typescript-eslint/no-non-null-assertion */

'use client';

import { FC, useState } from 'react';
import {
  Button,
  ClientForm as Form,
  SubmitHandler,
  useClientSubmit,
  Select,
  SelectOption,
} from '~/components-basics/client-form';
import { Flex } from '~/components-basics/flex';
import { Spacing } from '~/components-basics/spacing';
import { Tile } from '~/components-basics/tile';
import { Typography } from '~/components-basics/typography';
import { PageLayout } from '~/components-layouts/page-layout';
import { mapEventTagReadable } from '~/constants';
import { instantGramCustomErrors, instantGramDataValidationSchema } from '~/schema/constants';
import { EventNamesByTag, EventNamesByYear, InstantGramData } from '~/schema/types';
import { EventTag } from '~/types';
import { sortAlphabetical } from '~/utils';

export type InstantGramTemplateProps = {
  onSubmit: SubmitHandler<InstantGramData>;
  defaultValues?: Partial<InstantGramData>;
  tags: EventTag[];
  years: string[];
  eventNamesByTag: EventNamesByTag[];
  eventNamesByYear: EventNamesByYear[];
};

export const InstantGramTemplate: FC<InstantGramTemplateProps> = ({
  onSubmit,
  defaultValues,
  tags,
  years,
  eventNamesByTag,
  eventNamesByYear,
}) => {
  const [selectedTag, setSelectedTag] = useState<EventTag | undefined>(undefined);
  const [selectedYear, setSelectedYear] = useState<string | undefined>(undefined);
  const [eventsDisabled, setEventsDisabled] = useState<boolean>(true);

  const onSelectTag = (tag: EventTag): void => {
    setSelectedTag(tag);
    setEventsDisabled(false);
  };

  const onSelectYear = (year: string): void => {
    // Prevent error API calls
    if (year === '') {
      return;
    }
    setSelectedYear(year);
    setEventsDisabled(false);
  };

  const tagOptions: Array<SelectOption<EventTag>> = tags
    .map((tag) => ({ label: mapEventTagReadable(tag), value: tag }))
    .sort(({ value: a }, { value: b }) => sortAlphabetical(b, a));

  const yearOptions: SelectOption[] = years
    .map((year) => ({
      label: year,
      value: year,
    }))
    .sort(({ value: a }, { value: b }) => sortAlphabetical(b, a));

  const eventsFilteredByTag = eventNamesByTag.find((event) => event.tag === selectedTag);

  const eventsFilteredByYear = eventNamesByYear.find((event) => event.year === selectedYear);

  const eventsFilteredByTagOptions: SelectOption[] | undefined = selectedTag
    ? eventsFilteredByTag?.events
        .map((event) => ({
          label: `${event.prefix ? `${event.prefix}: ` : ''}${event.names.join(', ')}`,
          value: event.id.toLowerCase(),
        }))
        .sort(({ value: a }, { value: b }) => sortAlphabetical(b, a))!
    : undefined;

  const eventsFilteredByYearOptions: SelectOption[] | undefined = selectedYear
    ? eventsFilteredByYear?.events
        .map((event) => ({
          label: `${event.prefix ? `${event.prefix}: ` : ''}${event.names.join(', ')}`,
          value: event.id.toLowerCase(),
        }))
        .sort(({ value: a }, { value: b }) => sortAlphabetical(b, a))!
    : undefined;

  // eslint-disable-next-line @typescript-eslint/init-declarations
  let eventsOptions: SelectOption[] | undefined;
  if (selectedTag && !selectedYear) {
    eventsOptions = eventsFilteredByTagOptions;
  }
  if (selectedYear && !selectedTag) {
    eventsOptions = eventsFilteredByYearOptions;
  }

  const { handleSubmit, isSubmitting } = useClientSubmit(onSubmit);

  return (
    <PageLayout background={{ type: 'instagram', content: 'Instant Gram' }}>
      <Tile type="clear" width="wide">
        <Flex direction="vertical" gap="md">
          <Form
            mode="onTouched"
            validationSchema={instantGramDataValidationSchema}
            customErrors={instantGramCustomErrors}
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
                  // This type cannot be inferred from `tagOptions` -> `value`, despite line 56
                  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                  onSelectTag(event as EventTag);
                }}
                defaultValue=""
                disabled={Boolean(selectedYear)}
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
                options={eventsOptions}
                disabled={eventsDisabled}
              />

              <Button variant="solidDark" type="submit" width="quarter" isSubmitting={isSubmitting}>
                Submit
              </Button>
            </Flex>
          </Form>
        </Flex>
      </Tile>
    </PageLayout>
  );
};
