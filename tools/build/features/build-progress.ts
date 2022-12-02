import type { BaseMiddleware } from '../types';
import { ProgressPlugin } from 'webpack';

export const BuildProgressFeature: BaseMiddleware = (config) =>
  config
    .plugin('progress')
      .use(ProgressPlugin, [{
        activeModules: false,
        entries: true,
        modules: true,
        modulesCount: 5000,
        profile: false,
        dependencies: true,
        dependenciesCount: 10000,
        percentBy: null
      }])
    .end();
