export const toKebabCase = (text: string): string => {
  return text.replace(/(?![A-Z]|^)(([0-9a-z]|\s)[A-Z])/g, (input) => {
    if (input.at(0) === ' ') {
      return `-${input.at(1)}`;
    }
  
    return `${input.at(0)}-${input.at(1)}`;
  }).toLowerCase();
};
