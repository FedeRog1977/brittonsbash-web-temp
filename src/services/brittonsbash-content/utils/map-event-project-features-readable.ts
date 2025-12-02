import { Features, GenericDataContent } from '~/libs/types';

export const mapEventProjectFeaturesReadable = (
  islands?: string[],
  munros?: string[],
  munroTops?: string[],
  corbetts?: string[],
  corbettTops?: string[],
  grahams?: string[],
  subTwos?: string[],
  donalds?: string[],
): GenericDataContent[] => [
  {
    title: 'Islands',
    content: islands && islands?.length > 0 ? islands.sort().join(', ') : undefined,
  },
  {
    title: 'Munros',
    content: munros && munros.length > 0 ? munros.sort().join(', ') : undefined,
  },
  {
    title: 'Munro Tops',
    content: munroTops && munroTops.length > 0 ? munroTops.sort().join(', ') : undefined,
  },
  {
    title: 'Corbetts',
    content: corbetts && corbetts.length > 0 ? corbetts.sort().join(', ') : undefined,
  },
  {
    title: 'Corbett Tops',
    content: corbettTops && corbettTops.length > 0 ? corbettTops.sort().join(', ') : undefined,
  },
  {
    title: 'Grahams',
    content: grahams && grahams.length > 0 ? grahams.sort().join(', ') : undefined,
  },
  {
    title: 'SubTwos',
    content: subTwos && subTwos.length > 0 ? subTwos.sort().join(', ') : undefined,
  },
  {
    title: 'Donalds',
    content: donalds && donalds.length > 0 ? donalds.sort().join(', ') : undefined,
  },
];
