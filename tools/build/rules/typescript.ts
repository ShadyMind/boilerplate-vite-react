import type { RuleMiddleware } from '../types';

export const typescriptRules: RuleMiddleware = (module) =>
  module
    .rule('typescript')
      .test(/\.tsx?$/)
      .use('typescript')
        .loader('ts-loader')
      .end()
    .end()
  ;
