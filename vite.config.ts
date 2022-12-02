import type { UserConfigExport } from 'vite';

const config: UserConfigExport = {
  esbuild: {
    jsxInject: 'import React from \'React\';'
  }
};

export default config;
