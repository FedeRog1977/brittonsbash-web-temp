'use client';

import { useState } from 'react';

export const useShowElement = () => {
  const [showElement, setShowElement] = useState(false);
  return { showElement, setShowElement };
};
