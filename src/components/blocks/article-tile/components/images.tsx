import { FC } from 'react';
import { ImageMatrixProps, ImageMatrix } from '~/components-core/image-matrix';

export type ImagesProps = { images: ImageMatrixProps['images'] };

export const Images: FC<ImagesProps> = ({ images }) => <ImageMatrix images={images} />;
