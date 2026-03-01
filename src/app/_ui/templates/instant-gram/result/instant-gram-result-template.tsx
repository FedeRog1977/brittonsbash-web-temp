'use client';

import { FC, useState } from 'react';
import { Flex } from '~/libs/components-basics/flex';
import { Button } from '~/libs/components-basics/form';
import { ImageMatrix } from '~/libs/components-basics/image-matrix';
import { ImageSlider } from '~/libs/components-basics/image-slider';
import { Modal } from '~/libs/components-basics/modal';
import { RowTable } from '~/libs/components-basics/table';
import { Tile } from '~/libs/components-basics/tile';
import { Typography } from '~/libs/components-basics/typography';
import { PageLayout } from '~/libs/components-templates/page-layout';
import { mapEventTagReadable } from '~/libs/constants';
import { EventTag, GenericDataContent, Img, MappedEventProject } from '~/libs/types';
import { Description } from './components/description.jsx';

export type InstantGramResultTemplateProps = {
  year: string;
  tags: EventTag[];
  prefix?: string;
  names: string[];
  startDate: string;
  endDate?: string;
  description: string | string[];
  features?: GenericDataContent[];
  sport?: MappedEventProject;
  images: Img[];
};

export const InstantGramResultTemplate: FC<InstantGramResultTemplateProps> = ({
  year,
  tags,
  prefix,
  names,
  startDate,
  endDate,
  description,
  features,
  sport,
  images,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <PageLayout background={{ type: 'instagram', content: 'Instant Gram' }}>
      <Tile type="clear" width="wide">
        <Flex direction="vertical" gap="sm">
          <Flex direction="vertical" rowGap="3xs">
            {prefix ? <Typography variant="t2">{prefix}:</Typography> : null}

            {names.length > 1 ? (
              names.map((name, index) => (
                <Flex key={name} direction="horizontal" gap="xs">
                  <Typography variant="t2" color="lightGrey" textAlign="right">
                    Part&nbsp;
                    {index + 1}
                  </Typography>

                  <Typography variant="t2" textAlign="left" markdown>
                    {name}
                  </Typography>
                </Flex>
              ))
            ) : (
              <Typography variant="t2" markdown>
                {names[0]}
              </Typography>
            )}
          </Flex>

          <Typography variant="h4" color="lightGrey" markdown>
            {`${startDate}${endDate ? ` - ${endDate}` : ''}, ${year}`}
          </Typography>

          <Flex direction="horizontal" alignVertical="center" gap={{ xs: 'xs', lg: 'sm' }}>
            {tags.map((tag) => (
              // TODO: add this functionality to the `Typography` component once concat is repaired
              <div
                key={tag}
                style={{
                  border: '0.5px solid white',
                  borderRadius: '8px',
                  padding: '4px 8px 4px 8px',
                }}
              >
                <Typography variant="body">{mapEventTagReadable(tag)}</Typography>
              </div>
            ))}
          </Flex>

          {features ? (
            <RowTable
              titleRow={{
                leftItem: 'Features',
              }}
              rows={features.map(({ title, content }) => ({
                leftItem: title,
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                rightItem: content as string,
              }))}
            />
          ) : null}

          {sport ? (
            <RowTable
              titleRow={{
                leftItem: 'Sport',
                rightItem: [sport.distance, sport.elevation, sport.time].join(', '),
              }}
              rows={sport.features.map(({ title, content }) => ({
                leftItem: title,
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                rightItem: content as string,
              }))}
            />
          ) : null}

          <Description text={description} />

          <Button
            variant="solidDark"
            onClick={(): void => {
              setShowModal(true);
            }}
          >
            Show Modal
          </Button>

          <Modal
            isOpen={showModal}
            onClose={(): void => {
              setShowModal(!showModal);
            }}
          >
            <ImageSlider slides={images} />
          </Modal>

          <ImageMatrix images={images} />
        </Flex>
      </Tile>
    </PageLayout>
  );
};
