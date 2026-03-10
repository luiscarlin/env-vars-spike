import Example from '@/components/Example';
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
      <Example />
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
