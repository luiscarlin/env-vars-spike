import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    APP_ENV: z.enum(['dev', 'uat', 'prod']),
    SOMETHING_SHARED: z.string().min(1),
    TITLE: z.string().min(1),
  },
  runtimeEnv: {
    APP_ENV: process.env.APP_ENV,
    SOMETHING_SHARED: process.env.SOMETHING_SHARED,
    TITLE: process.env.TITLE,
  },
});

export const PUBLIC_ENV_KEYS = ['APP_ENV'] as const;
