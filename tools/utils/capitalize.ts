export const capitalize = <T extends string>(text: T): Capitalize<T> => 
  `${text.slice(0, 1).toUpperCase()}${text.slice(1)}` as Capitalize<T>;
