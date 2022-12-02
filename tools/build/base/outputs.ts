import type { OutputMiddleware } from '../types';
import { Env } from 'normal-env';
import { ROOT_DIST } from '../constants';


export const outputsMiddleware: OutputMiddleware = (output) => {
  const env = new Env(process.env.NODE_ENV);

  return output
    .path(ROOT_DIST)
    .filename(`[name].${env}.js`)
    .end()
    .target('web')
    .output;
};
