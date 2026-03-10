import { useEffect, useState } from 'react';

export const useGetPublicEnv = () => {
  const [publicEnv, setPublicEnv] = useState<Record<string, string>>({});

  useEffect(() => {
    setPublicEnv(window.__ENV__);
  }, []);

  return publicEnv;
};
