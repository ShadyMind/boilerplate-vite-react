import { DevServerMiddleware } from '../types';

export const devServerMiddleware: DevServerMiddleware = (devServer) =>
  devServer
    .hot(true)
    .port(14300)
    .compress(true)
    .historyApiFallback(true)
    .set('client', {
      overlay: { errors: true, warnings: false }
    })
    .set('setupExitSignals', true)


