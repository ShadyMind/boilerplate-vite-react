import type { BaseMiddleware } from '../types';

export const javascriptFeature: BaseMiddleware = (config) =>
  config
    .resolve
      .extensions
      .add('.js')
      .end()
    .end()
    .module
      .rule('babel')
        .test(/\.tsx?$/)
        .use('babel')
        .loader('babel-loader')
          .options({ presets: ["@babel/preset-env"] })
        .end()
      .end()
    .end()
  ;
