import type { RuleMiddleware } from '../types';

export const svgRules: RuleMiddleware = (module) =>
  module
    .rule('svg')
    .test(/\.svg$/)
      .use('svg')
      .loader('@svgr/webpack')
      .options({
        jsxRuntime: 'classic-preact',
        runtimeConfig: false,
        ref: true,
        memo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  inlineStyles: { onlyMatchedOnce: false },
                  removeDoctype: false,
                },
              },
            },
          ],
        }
      })
      .end()
    .end()
  ;
