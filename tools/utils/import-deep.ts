import path from 'node:path';
import { BasicMiddleware } from '../build/types';
import { asyncGlob } from './async-glob';

export const importDeep = async (root: string, currentFile: string) => {
  return (await asyncGlob('./**/*.ts', { cwd: root }))
    .map((filename) => path.resolve(root, filename))
    .filter((filename) => filename !== currentFile)
    .map(filename => ({ filename, module: require(path.resolve(root, filename)) }))
    .reduce<BasicMiddleware<unknown>[]>((acc, { filename, module }) => {
      const fnPair = Object.entries(module).find(([_, exported]) => typeof exported === 'function');

      if (!fnPair) {
        return acc;
      }

      const [name, fn] = fnPair as [string, BasicMiddleware<unknown>];

      // @ts-ignore
      fn.meta = {};

      // @ts-ignore
      fn.meta.name = name;
  
      // @ts-ignore
      fn.meta.filename = filename;
      acc.push(fn);
      return acc;
    }, []);
};
