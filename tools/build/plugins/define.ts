import type { PluginMiddleware } from '../types';
import { DefinePlugin } from 'webpack';
import { Env } from 'normal-env';

export const definePlugin: PluginMiddleware = (config) =>
  config
    .plugin('define')
      .use(DefinePlugin, [{
        NODE_ENV: JSON.stringify(new Env(process.env.NODE_ENV)),
        BUILT_AT: DefinePlugin.runtimeValue(Date.now),
        DEBUG: JSON.stringify(Boolean(process.env.DEBUG))
      }])
    .end();
