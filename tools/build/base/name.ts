import type { BaseMiddleware } from '../types';
import { projectName } from '../utils';

/**
 * Sets project name in config for better logging experience
 * https://webpack.js.org/configuration/#options
 */
export const nameMiddleware: BaseMiddleware = (config) =>
  config
    .name(projectName())
