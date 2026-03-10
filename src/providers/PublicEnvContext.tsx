import { env, PUBLIC_ENV_KEYS } from '@/env';
import { createContext, useContext } from 'react';

const PublicEnvContext = createContext<Record<string, string>>({});

export const PublicEnvProvider = ({
  children,
  publicEnv,
}: {
  children: React.ReactNode;
  publicEnv: Record<string, string>;
}) => {
  return (
    <PublicEnvContext.Provider value={publicEnv}>
      {children}
    </PublicEnvContext.Provider>
  );
};

export const loadPublicEnvServerSide = () => {
  return Object.fromEntries(PUBLIC_ENV_KEYS.map((key) => [key, env[key]]));
};

export const usePublicEnv = () => {
  const publicEnv = useContext(PublicEnvContext);

  if (!publicEnv) {
    throw new Error('usePublicEnv must be used within a PublicEnvProvider');
  }

  return publicEnv;
};
