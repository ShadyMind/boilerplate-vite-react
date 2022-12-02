import path from 'node:path';

/** Points to root of this project */
export const PROJECT_DIR = path.resolve(process.cwd());

export const BUILDER_DIR = __dirname;

/** Points to root of source files location */
export const ROOT_SRC = path.resolve(process.cwd(), 'src') as `${string}/src`;

/** Points to path where build should be stored */
export const ROOT_DIST = path.resolve(process.cwd(), '.artifacts', 'build') as `${string}/.artifacts/build`;
