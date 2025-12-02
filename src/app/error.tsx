'use client';

import { FC } from 'react';

type ErrorProps = {
  reset: () => void;
};

const Error: FC<ErrorProps> = () => <div>Something went wrong</div>;

export default Error;
