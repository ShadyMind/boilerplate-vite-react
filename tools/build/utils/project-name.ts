import {
  name as packageJSONName,
  version as packageJSONVersion
} from '../../../package.json';
import { toCamelCase } from '../../utils';

export const projectName = (name: string = packageJSONName, version = packageJSONVersion) => 
  `${toCamelCase(name)} v${version}`;
