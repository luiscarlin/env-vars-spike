import { usePublicEnv } from '@/providers/PublicEnvContext';
import Link from 'next/link';

export default function Example() {
  const publicEnv = usePublicEnv();

  return (
    <div>
      <h1>Example</h1>
      <Link href="/">Home</Link>
      <p>APP_ENV: {publicEnv.APP_ENV}</p>
      <p>TITLE: {publicEnv.TITLE}</p>
      <button
        onClick={() => {
          alert(publicEnv.TITLE);
        }}
      >
        Alert TITLE
      </button>
    </div>
  );
}
