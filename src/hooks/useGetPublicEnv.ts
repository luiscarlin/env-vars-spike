import { useState } from 'react';

const getPublicEnv = (): Window['__ENV__'] | null =>
  typeof window !== 'undefined' ? (window.__ENV__ ?? null) : null;

export const useGetPublicEnv = () => {
  const [publicEnv] = useState<Window['__ENV__'] | null>(getPublicEnv);
  return publicEnv;
};
