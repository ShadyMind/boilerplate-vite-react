import type { RuleMiddleware } from '../types';

export const fluentRules: RuleMiddleware = (module) =>
  module
    .rule('fluent')
      .test(/\.ftl?$/)
        .use('fluent')
        .loader('project-fluent-loader')
        .end()
      .end();
