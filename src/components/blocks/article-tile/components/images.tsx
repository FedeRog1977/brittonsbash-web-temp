import { ImageMatrixProps, ImageMatrix } from '~/components-basics/image-matrix';
import { FC } from 'react';

export type ImagesProps = { images: ImageMatrixProps['images'] };

export const Images: FC<ImagesProps> = ({ images }) => <ImageMatrix images={images} />;
