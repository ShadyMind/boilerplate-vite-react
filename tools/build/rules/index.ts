import type { BaseMiddleware, RuleMiddleware } from '../types';
import { compose, importDeep } from '../../utils';
import { isolateWebpackConfigWithModule } from '../utils';

export const rulesMiddleware = new Promise<BaseMiddleware>(async (resolve) => {
  const middlewares = (await importDeep(__dirname, __filename)) as RuleMiddleware[];

  return resolve((config) => compose(
    ...middlewares.map((module) => isolateWebpackConfigWithModule(module))
  )(config));

});

