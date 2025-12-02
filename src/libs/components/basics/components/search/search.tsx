import { FC } from 'react';
import styles from './search.module.scss.js';

export type SearchProps = {
  func: (() => void) | ((e: any) => void);
  placeholder?: string;
};

export const Search: FC<SearchProps> = ({ func, placeholder }) => (
  <input type="text" className={styles.search} onChange={func} placeholder={placeholder} />
);
