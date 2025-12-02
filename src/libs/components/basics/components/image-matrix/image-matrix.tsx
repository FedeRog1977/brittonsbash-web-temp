'use client';

import styles from './image-matrix.module.scss.js';
// import imageThumbnail from 'image-thumbnail';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FC, useState } from 'react';
import { useShowElement } from '~/libs/hooks';
import { generateUniqueKey } from '~/libs/utils';
import { FlexItem } from '../flex/flex-item.js';
import { Flex } from '../flex/flex.js';
import { Typography } from '../typography/typography.js';
import { Modal } from '../modal/modal.js';
import { Image } from '../image/image.js';
import { Img } from '~/libs/types';
import { ColumnSpan } from '../../reference/index.js';

export type ImageMatrixProps = {
  images: Img[];
  columns?: number;
};

export const ImageMatrix: FC<ImageMatrixProps> = ({ images, columns }) => {
  const { showElement: showModal, setShowElement: setShowModal } = useShowElement();

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
        {images.map(({ url, alt, description }, index) => {
          return (
            <FlexItem key={generateUniqueKey(index)} basis={{ xs: 12, lg: basis }}>
              <Flex direction="vertical" alignHorizontal="center" gap="2xs">
                <a
                  onClick={() => {
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
          );
        })}
      </Flex>

      <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
        <Image {...(image as Img)} />
      </Modal>
    </>
  );
};
