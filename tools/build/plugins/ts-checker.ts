import type { PluginMiddleware } from '../types';
import path from 'node:path';
import forkTSChecker from 'fork-ts-checker-webpack-plugin';
import forkTSCheckerNotifier from 'fork-ts-checker-notifier-webpack-plugin';
import { ROOT_SRC } from '../constants';
import { projectName } from '../utils';

export const tsCheckerPlugin: PluginMiddleware = (config) =>
  config
    .plugin('ts-checker')
      .use(forkTSChecker, [{
        typescript: {
          mode: 'readonly',
          configFile: path.resolve(ROOT_SRC, '..', 'tsconfig.json')
        },
        issue: {},
        formatter: 'basic'
      }])
      .end()
    .plugin('ts-checker-notifier')
      .use(forkTSCheckerNotifier, [{ title: projectName() }])
      .end();
