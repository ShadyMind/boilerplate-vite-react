import type { PluginMiddleware } from '../types';
import Notifier from 'webpack-notifier';
import { projectName } from '../utils';

export const HTMLPlugin: PluginMiddleware = (config) =>
  config
    .plugin('notifier')
      .use(Notifier, [{
        title: projectName(),
        onlyOnError: true
      }])
    .end();
