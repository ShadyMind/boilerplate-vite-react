import { Config as JestConfig} from '@jest/types';

const config: JestConfig.InitialOptions = {
  // preset: 'ts-jest',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tools/test/setup-tests.ts'],
  bail: 1,
  verbose: true,
  coverageProvider: 'v8',
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/modules/$1"
  }
};

export default config;
