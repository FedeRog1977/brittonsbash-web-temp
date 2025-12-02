'use client';

import { FC, ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import { Loading } from '../../loading/loading.js';
import styles from './form-content.module.scss.js';

export type FormContentProps = {
  children: ReactNode;
};

export const FormContent: FC<FormContentProps> = ({ children }) => {
  const { pending } = useFormStatus();

  return <div className={styles.formContent}>{pending ? <Loading /> : children}</div>;
};
