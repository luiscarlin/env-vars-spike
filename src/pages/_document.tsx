import { env } from '@/env';
import { Html, Head, Main, NextScript } from 'next/document';

const PUBLIC_ENV_KEYS = ['APP_ENV'] as const;

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
