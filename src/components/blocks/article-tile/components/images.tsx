import { FC } from 'react';
import { ImageMatrixProps, ImageMatrix } from '~/components-basics/image-matrix';

export type ImagesProps = { images: ImageMatrixProps['images'] };

export const Images: FC<ImagesProps> = ({ images }) => <ImageMatrix images={images} />;
