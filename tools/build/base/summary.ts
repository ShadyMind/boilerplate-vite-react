import type { BaseMiddleware } from '../types';

export const summaryMiddleware: BaseMiddleware = (config) =>
  config.stats('minimal')
