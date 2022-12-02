import type { BaseMiddleware, PluginMiddleware } from '../types';
import { compose, importDeep } from '../../utils';

export const pluginsMiddleware = new Promise<BaseMiddleware>(async (resolve) => {
  const middlewares = (await importDeep(__dirname, __filename)) as PluginMiddleware[];

  return resolve((config) => compose(...middlewares)(config));

});

