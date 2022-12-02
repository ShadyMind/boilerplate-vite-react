import 'ts-node/register';
import { config } from './tools/build';

export default async () => (await config()).toConfig();
