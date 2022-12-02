import type { PluginMiddleware } from '../types';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export const tsCheckerPlugin: PluginMiddleware = (config) =>
  config
    .resolve
    .plugin('tsconfig-paths')
      .use(TsconfigPathsPlugin)
      .end()
    .end();
