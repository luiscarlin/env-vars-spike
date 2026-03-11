import ExampleContext from '@/components/ExampleContext';
import { env } from '@/env';
import {
  loadPublicEnvServerSide,
  PublicEnvProvider,
} from '@/providers/PublicEnvContext';

export default function EnvContextExample({
  publicEnv,
}: {
  publicEnv: Record<string, string>;
}) {
  return (
    <PublicEnvProvider publicEnv={publicEnv}>
      <ExampleContext />
    </PublicEnvProvider>
  );
}

export function getServerSideProps() {
  console.log('SECRET_KEY', env.SECRET_KEY);
  return {
    props: {
      publicEnv: loadPublicEnvServerSide(),
    },
  };
}
