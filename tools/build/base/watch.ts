import path from 'path';
import type { BaseMiddleware } from '../types';
import { PROJECT_DIR } from '../constants';
export const watchMiddleware: BaseMiddleware = (config) =>
  config
    .watch(true)
    .watchOptions({
      followSymlinks: false,
      stdin: true,
      ignored: [
        path.resolve(PROJECT_DIR, '.artifacts'),
        path.resolve(PROJECT_DIR, '.vscode'),
        path.resolve(PROJECT_DIR, 'node_modules'),
        path.resolve(PROJECT_DIR, 'tools'),
        path.resolve(PROJECT_DIR, 'package.json'),
        path.resolve(PROJECT_DIR, 'package-lock.json'),
        path.resolve(PROJECT_DIR, 'tsconfig.json'),
        path.resolve(PROJECT_DIR, 'webpack.config.ts'),
      ]
    });
