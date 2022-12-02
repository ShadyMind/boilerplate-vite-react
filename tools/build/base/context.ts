import type { BaseMiddleware } from '../types';
import { ROOT_SRC } from '../constants';

/**
 * Sets base root folder to work with
 * {@see https://webpack.js.org/configuration/entry-context/#context}
 * @memberof {import('../index.ts').config}
 */
export const contextMiddleware: BaseMiddleware = (config) =>
  config.context(ROOT_SRC);
