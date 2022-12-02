import type { RuleMiddleware } from '../types';

export const typescriptRules: RuleMiddleware = (module) => 
  module
    .rule('babel')
      .test(/\.tsx?$/)
        .use('babel')
        .loader('babel-loader')
        .options({
          presets: ["@babel/preset-env"],
        })
        .end()
      .end()
  ;

