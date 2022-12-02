import type { BaseMiddleware } from '../types';
import { DefinePlugin } from 'webpack';
import { Env } from 'normal-env';

export const envVariablesFeature: BaseMiddleware = (config) =>
  config
    .plugin('define')
      .use(DefinePlugin, [{
        NODE_ENV: JSON.stringify(new Env(process.env.NODE_ENV)),
        BUILT_AT: DefinePlugin.runtimeValue(Date.now),
        DEBUG: JSON.stringify(Boolean(process.env.DEBUG))
      }])
    .end()
  ;