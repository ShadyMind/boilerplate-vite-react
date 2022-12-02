import type { BaseMiddleware } from '../types';
import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ROOT_SRC } from '../constants';
import { description } from '../../../package.json';
import { projectName } from '../utils';

export const PageFeature: BaseMiddleware = (config) =>
  config
    .plugin('html')
      .use(HtmlWebpackPlugin, [{
        scriptLoading: 'defer',
        cache: true,
        minify: 'auto',
        template: path.resolve(ROOT_SRC, 'index.html'),
        title: projectName(),
        meta: {
          viewport: 'width=device-width,initial-scale=1,shrink-to-fit=no',
          description
        },
      }])
    .end();
