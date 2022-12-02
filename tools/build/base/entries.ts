import type { BaseMiddleware } from '../types';

export const entriesMiddleware: BaseMiddleware = (config) =>
  config
    .entry('web')
      .add('./index.ts')
      .end();
