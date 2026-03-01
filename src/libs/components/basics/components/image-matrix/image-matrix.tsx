'use client';

// import imageThumbnail from 'image-thumbnail';
import { FC, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Img } from '~/libs/types';
import { ColumnSpan } from '../../reference/index.js';
import { FlexItem } from '../flex/flex-item.js';
import { Flex } from '../flex/flex.js';
import { Image } from '../image/image.js';
import { Modal } from '../modal/modal.js';
import { Typography } from '../typography/typography.js';
import styles from './image-matrix.module.scss.js';

export type ImageMatrixProps = {
  images: Img[];
  columns?: number;
};

export const ImageMatrix: FC<ImageMatrixProps> = ({ images, columns }) => {
  const [showModal, setShowModal] = useState(false);

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const basis: ColumnSpan = columns ? ((12 / columns) as ColumnSpan) : 3;

  const [image, setImage] = useState<Img>();

  // type ImgWithThumbnail = Img & { urlThumbnail: string };
  // let imagesWithThumbnails: ImgWithThumbnail[] = [];

  // for (const image of images) {
  //   const urlThumbnail = imageThumbnail(image.url);

  //   imagesWithThumbnails.push({ urlThumbnail, ...image });
  // }

  return (
    <>
      <Flex direction="horizontal" alignHorizontal="center" alignVertical="center" wrap gap="2xs">
        {images.map(({ url, alt, description }) => (
          <FlexItem key={alt} basis={{ xs: 12, lg: basis }}>
            <Flex direction="vertical" alignHorizontal="center" gap="2xs">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
              <a
                onClick={(): void => {
                  setImage({ url, alt, description });
                  setShowModal(!showModal);
                }}
              >
                <LazyLoadImage className={styles.image} src={url} alt={alt} />
              </a>

              {description ? (
                <Typography variant="footnote" textAlign="center" markdown>
                  {description}
                </Typography>
              ) : null}
            </Flex>
          </FlexItem>
        ))}
      </Flex>

      <Modal
        isOpen={showModal}
        onClose={(): void => {
          setShowModal(!showModal);
        }}
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading, @typescript-eslint/consistent-type-assertions */}
        <Image {...(image as Img)} />
      </Modal>
    </>
  );
};
