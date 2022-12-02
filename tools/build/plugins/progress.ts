import type { PluginMiddleware } from '../types';
import { ProgressPlugin } from 'webpack';

export const HTMLPlugin: PluginMiddleware = (config) =>
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
