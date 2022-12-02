import type { BaseMiddleware } from '../types';
import path from 'node:path';
import { ROOT_SRC } from '../constants';
import forkTSChecker from 'fork-ts-checker-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export const typescriptFeature: BaseMiddleware = (config) =>
  config
    .module
      .rule('typescript')
        .test(/\.tsx?$/)
        .use('typescript')
          .loader('ts-loader')
          .end()
        .end()
      .end()
    .resolve
      .plugin('tsconfig-paths')
        .use(TsconfigPathsPlugin)
        .end()
      .end()
    .plugin('ts-checker')
      .use(forkTSChecker, [{
        typescript: {
          mode: 'readonly',
          configFile: path.resolve(ROOT_SRC, '..', 'tsconfig.json')
        },
        issue: {},
        formatter: 'basic'
      }])
      .end();