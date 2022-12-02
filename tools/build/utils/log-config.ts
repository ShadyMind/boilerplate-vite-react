import { inspect } from 'node:util';
import Config from 'webpack-chain';

import { BaseMiddleware } from '../types';

export const logConfigMiddleware: BaseMiddleware = (config: Config) => {
  config
    .when(
      typeof process.env.CONFIG_DUMP !== 'undefined',
      (config) => console.log(
        inspect(
          config.toConfig(),
          true,
          10,
          true
        )
      )
    )
  
  
  return config;
}
