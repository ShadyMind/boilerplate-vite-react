import { toCamelCase } from '../../../utils';

const loader = (source: string) => {
  let depth = 0;

  const variables = source.split('\n')
    .reduce<string[]>((acc, line) => {
      if (line.startsWith(':root {')) {
        depth = 1;
        return acc;
      } else if (line.includes('{')) {
        depth += 1;
      } else if (line.includes('}')) {
        depth -= 1;
      }

      line = line.trim();

      if (depth === 0 || line.startsWith('/*') || !line) {
        return acc;
      }

      let [property, value] = line.split(':');
      property = property!.trim().replace(/^\-\-/, '');

      const propertyCamel = JSON.stringify(toCamelCase(property, true));

      property = JSON.stringify(property);

      value = value!.slice(0, value!.indexOf(';'));

      if (value) {
        value = `"${value!.trim()}"`;
      }

      if (property && value) {
        acc.push(`${property}: ${value}`);

        if (property.includes('-')) {
          acc.push(`${propertyCamel}: ${value}`);
        }
      }

      return acc;
    }, []);

  return `export default {
  ${variables.join(',\n  ')}
};
`;
}

export default loader;
