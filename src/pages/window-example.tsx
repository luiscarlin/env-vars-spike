import { useGetPublicEnv } from '@/hooks/useGetPublicEnv';
import Link from 'next/link';

export default function WindowExample() {
  const publicEnv = useGetPublicEnv();

  return (
    <div>
      <h1>Window Example</h1>
      <Link href="/">Home</Link>
      <p>APP_ENV: {publicEnv?.APP_ENV}</p>
      <button
        onClick={() => {
          alert(publicEnv?.TITLE ?? '');
        }}
      >
        Alert TITLE
      </button>
    </div>
  );
}
