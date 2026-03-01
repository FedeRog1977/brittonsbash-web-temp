import { ReactElement } from 'react';

export type Column = {
  title?: string | ReactElement;
  entries: Array<string | ReactElement | undefined>;
};
