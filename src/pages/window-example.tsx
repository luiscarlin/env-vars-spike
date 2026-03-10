import { useGetPublicEnv } from '@/hooks/useGetPublicEnv';

export default function WindowExample() {
  const { APP_ENV } = useGetPublicEnv();

  return (
    <div>
      <h1>Window Example</h1>
      <p>APP_ENV: {APP_ENV}</p>
    </div>
  );
}
