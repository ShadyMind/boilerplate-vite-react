
import type { RuleMiddleware } from '../types';

export const typescriptRules: RuleMiddleware = (module) =>
  module
    .rule('styles')
      .test(/\.css?$/)
        .exclude
        .add(/palette\.css$/)
        .end()
        .use('style')
        .loader('style-loader')
        .end()
        .use('css')
        .loader('css-loader')
        .options({
          importLoaders: 1,
          modules: {
            localIdentName: '[name]-[local]-[hash:base64:5]',
            exportLocalsConvention: 'camelCaseOnly'
          },
        })
        .end()
        .use('postcss')
        .loader('postcss-loader')
        .options({
          
        })
      .end()
    .end()
  ;
