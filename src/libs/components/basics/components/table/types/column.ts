import { ReactElement } from 'react';

export type Column = {
  title?: string | ReactElement;
  entries: (string | ReactElement | undefined)[];
};
