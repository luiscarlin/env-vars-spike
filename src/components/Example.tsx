import { usePublicEnv } from '@/providers/PublicEnvContext';

export default function Example() {
  const publicEnv = usePublicEnv();

  return (
    <div>
      <h1>Example</h1>
      <p>APP_ENV: {publicEnv.APP_ENV}</p>
    </div>
  );
}
