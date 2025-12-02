import './styles.css';
import { FC, ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
  <html lang="en">
    <head />
    <body>{children}</body>
  </html>
);

export default Layout;
