import type { BaseMiddleware } from '../types';
import Notifier from 'webpack-notifier';
import { projectName } from '../utils';
import forkTSCheckerNotifier from 'fork-ts-checker-notifier-webpack-plugin';

export const NotificationsFeature: BaseMiddleware = (config) =>
  config
    .plugin('notifier')
      .use(Notifier, [{
        title: projectName(),
        onlyOnError: true
      }])
      .end()
    .plugin('ts-checker-notifier')
      .use(forkTSCheckerNotifier, [{ title: projectName() }])
      .end()
;