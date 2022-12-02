import path from 'node:path';
import { BUILDER_DIR } from '../constants';
import type { RuleMiddleware } from '../types';

export const paletteRules: RuleMiddleware = (module) =>
  module
    .rule('palette')
      .test(/palette.css?$/)
        .set('issuer', /\.tsx?$/)
        .use('palette')
        .loader(path.resolve(BUILDER_DIR, 'extensions', 'loaders', 'palette-loader.ts'))
        .end()
      .end();
