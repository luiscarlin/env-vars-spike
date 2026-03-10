import path from "path";
import { config as loadDotenvx } from "@dotenvx/dotenvx";

const envFiles = ['.env', `.env.${process.env.APP_ENV}`];


if (!process.env.APP_ENV) {
  throw new Error('APP_ENV is not set');
}

// load .env.local to override previous vals if running locally
if (process.env.RUN_ENV === 'local') {
  envFiles.push('.env.local');
}

loadDotenvx({
  path: [
    ...envFiles.map(file => path.resolve(process.cwd(), "env", file)),
  ],
  overload: true,
});