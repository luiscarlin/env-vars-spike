import ExampleContext from '@/components/ExampleContext';
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
  return {
    props: {
      publicEnv: loadPublicEnvServerSide(),
    },
  };
}
