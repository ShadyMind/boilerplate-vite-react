import Config from 'webpack-chain';
import { Get } from 'type-fest';
import { BasicMiddleware } from '../types';

export const isolateWebpackConfig = <
  ConfigSpace extends Get<Config, string>,
  Middleware extends BasicMiddleware<ConfigSpace>
>
  (isolateFn: (config: Config) => ConfigSpace) =>
    (middleware: Middleware) =>
      (config: Config) => {
        middleware(isolateFn(config));
        return config;
      }

export const isolateWebpackConfigWithOutput = isolateWebpackConfig((config) => config.output);
export const isolateWebpackConfigWithModule = isolateWebpackConfig((config) => config.module);
export const isolateWebpackConfigWithPlugins = isolateWebpackConfig((config) => config.plugins);
export const isolateWebpackConfigWithResolve = isolateWebpackConfig((config) => config.resolve);
export const isolateWebpackConfigWithDevServer = isolateWebpackConfig((config) => config.devServer);
export const isolateWebpackConfigWithPerformance = isolateWebpackConfig((config) => config.performance);
