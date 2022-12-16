import * as dotenv from 'dotenv';

let _dotEnvLoaded = false;

export default async function resolveProcessEnv() {
  if (_dotEnvLoaded) return;

  const NODE_ENV = (process.env?.NODE_ENV ?? 'development').trim();

  if (!NODE_ENV || NODE_ENV === 'development') {
    dotenv.config();
    _dotEnvLoaded = true;
  }
}
