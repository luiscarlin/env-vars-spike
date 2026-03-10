import { useGetPublicEnv } from '@/hooks/useGetPublicEnv';
import Link from 'next/link';

export default function WindowExample() {
  const { APP_ENV } = useGetPublicEnv();

  return (
    <div>
      <h1>Window Example</h1>
      <Link href="/">Home</Link>
      <p>APP_ENV: {APP_ENV}</p>
      <button
        onClick={() => {
          alert(APP_ENV);
        }}
      >
        Alert public env
      </button>
    </div>
  );
}
