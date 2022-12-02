import { glob } from 'glob';
import { promisify } from 'node:util';

export const asyncGlob = promisify(glob);

