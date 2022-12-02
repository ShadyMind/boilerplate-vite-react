import { ResolveMiddleware } from '../types';

export const extensionsMiddleware: ResolveMiddleware = (resolve) =>
  resolve
    .extensions
    .add('.js')
    .add('.ts')
    .add('.tsx')
    .add('.ftl')
    .add('.css')
    .end();
