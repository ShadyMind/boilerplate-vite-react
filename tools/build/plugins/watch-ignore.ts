import type { PluginMiddleware } from '../types';
import path from 'node:path';
import { WatchIgnorePlugin } from 'webpack';
import { PROJECT_DIR } from '../constants';

export const watchIgnorePlugin: PluginMiddleware = (config) =>
  config
    .plugin('define')
      .use(WatchIgnorePlugin, [{
        paths: [
          path.resolve(PROJECT_DIR, 'tools/'),
          path.resolve(PROJECT_DIR, 'node_modules/'),
          path.resolve(PROJECT_DIR, '.artifacts/'),
          path.resolve(PROJECT_DIR, '.vscode/'),
          path.resolve(PROJECT_DIR, 'webpack.config.ts'),
          path.resolve(PROJECT_DIR, 'package.json'),
          path.resolve(PROJECT_DIR, 'package-lock.json'),
          path.resolve(PROJECT_DIR, 'tsconfig.json'),
        ]
      }])
    .end();
