
import type { BaseMiddleware } from '../types';
import { Env } from 'normal-env';

export const performanceMiddleware: BaseMiddleware = (config) => {
  const env = new Env(process.env.NODE_ENV);

  return config
    .performance
      .hints('warning')
      .maxAssetSize(1024 * 512)
      .maxEntrypointSize(1024 * 512)
      .end()
    .optimization
      .when(
        env.isProduction(),
        (optimization) => optimization.minimize(true),
        (optimization) => optimization.minimize(false)
      )
      .end()
  ;
};
