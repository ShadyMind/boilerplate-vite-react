import type { Get } from 'type-fest';
import Config from 'webpack-chain';

type AnyNamespace = Config | Get<Config, string>;

export interface BasicMiddleware<
  TOutput extends AnyNamespace,
  TInput extends Get<Config, string> = TOutput
> {
  (config: TInput): TOutput;
}

export type BaseMiddleware = BasicMiddleware<Config>;
export type BaseAsyncMiddleware = BasicMiddleware<Promise<Config>>;
export type OutputMiddleware = BasicMiddleware<Get<Config, 'output'>>;
export type RuleMiddleware = BasicMiddleware<Get<Config, 'module'>>;
export type ResolveMiddleware = BasicMiddleware<Get<Config, 'resolve'>>;
export type DevServerMiddleware = BasicMiddleware<Get<Config, 'devServer'>>;
export type PluginMiddleware = BasicMiddleware<Config>;
export type PerformanceMiddleware = BasicMiddleware<Get<Config, 'performance'>>;
