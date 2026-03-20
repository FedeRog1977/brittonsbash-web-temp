import { FC, ReactNode } from 'react';

export type AnchorProps = {
  id: string;
  children?: ReactNode;
};

export const Anchor: FC<AnchorProps> = ({ id, children }) => (
  <div id={id}>{children}</div>
);
