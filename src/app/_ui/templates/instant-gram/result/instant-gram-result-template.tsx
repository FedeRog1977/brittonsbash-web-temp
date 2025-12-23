'use client';

import { FC, useState } from 'react';
import { Button } from '~/libs/components-basics/client-form';
import { Flex } from '~/libs/components-basics/flex';
import { ImageMatrix } from '~/libs/components-basics/image-matrix';
import { ImageSlider } from '~/libs/components-basics/image-slider';
import { Modal } from '~/libs/components-basics/modal';
import { RowTable } from '~/libs/components-basics/table';
import { Tile } from '~/libs/components-basics/tile';
import { Typography } from '~/libs/components-basics/typography';
import { PageLayout } from '~/libs/components-templates/page-layout';
import { GenericDataContent, Img, MappedEventProject } from '~/libs/types';

export type InstantGramResultTemplateProps = {
  prefix?: string;
  names: string[];
  startDate: string;
  endDate?: string;
  description: string;
  features?: GenericDataContent[];
  sport?: MappedEventProject;
  images: Img[];
};

export const InstantGramResultTemplate: FC<InstantGramResultTemplateProps> = ({
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
    <PageLayout background={{ type: 'ig', content: 'Instant Gram' }}>
      <Tile type="clear" width="wide">
        <Flex direction="vertical" gap="sm">
          {prefix ? <Typography variant="t2">{prefix}:</Typography> : null}

          <Flex direction="vertical" rowGap="3xs">
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

          <Typography variant="h4" color="lightGrey">
            {startDate}
            {endDate ? <>&nbsp;&#8212;&nbsp;{endDate}</> : null}
          </Typography>

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

          <Typography variant="footnote" textAlign="justify" markdown>
            {description}
          </Typography>

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
