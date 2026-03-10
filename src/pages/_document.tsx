import { env, PUBLIC_ENV_KEYS } from '@/env';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const publicEnv = Object.fromEntries(
    PUBLIC_ENV_KEYS.map((key) => [key, env[key]]),
  );

  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__ENV__ = ${JSON.stringify(publicEnv)}`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
