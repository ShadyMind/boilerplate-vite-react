import type { BaseMiddleware } from '../types';
import { Env } from 'normal-env';
export const modeMiddleware: BaseMiddleware = (config) => {
  const env = Env.from(process.env.NODE_ENV || 'dev');

  return config
    .when(
      env.isProduction(),
      (config) => config.mode('production')
    )
    .when(
      env.isDevelopment(),
      (config) => config.mode('development')
    );
}; 
