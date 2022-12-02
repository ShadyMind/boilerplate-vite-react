  import Config from 'webpack-chain';
import { compose } from '../utils';
import {
  logConfigMiddleware,
  isolateWebpackConfigWithOutput,
  isolateWebpackConfigWithResolve,
  isolateWebpackConfigWithDevServer
} from './utils';
import {
  nameMiddleware,
  contextMiddleware,
  devServerMiddleware,
  entriesMiddleware,
  extensionsMiddleware,
  modeMiddleware,
  outputsMiddleware,
  summaryMiddleware,
  performanceMiddleware
} from './base';
import { rulesMiddleware } from './rules';
import { pluginsMiddleware } from './plugins';

const configPromise = async () => {
  return compose(
    // Sets name of this config
    nameMiddleware,

    // Sets base context (folder) for whole bundling process
    contextMiddleware,

    // Settings for entries
    entriesMiddleware,
    
    // Settings for search variations in file resolution
    isolateWebpackConfigWithResolve(extensionsMiddleware),

    // instructions where compilation result should be written
    isolateWebpackConfigWithOutput(outputsMiddleware),

    // Add instruction which mode webpack running
    modeMiddleware,

    // Controls output to console of webpack's work
    summaryMiddleware,

    // Sets performance marks to optimization
    performanceMiddleware,

    // attach listed rules to config
    await rulesMiddleware,

    // attach listed plugins to config
    await pluginsMiddleware,

    // configure watch options
    // watchMiddleware,

    // enables and configure devServer
    isolateWebpackConfigWithDevServer(devServerMiddleware),

    // Prints current config object to console through node:utils/inspect
    logConfigMiddleware
  )(new Config());
};

export const config = configPromise;
