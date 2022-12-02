/**
 * Returns constructor name of object for given link at argument 
 * 
 * @example
 * ```js
 * console.log(constructorName(1)); // "Number"`
 * ```
 * ```js
 * console.log(constructorName('1')); // "String"
 * ```
 * ```js
 * console.log(constructorName(Symbol(1))); // "Symbol"
 * ```
 * ```js
 * console.log(constructorName(document)); // "HTMLDocument"
 * ```
 * @param input gitven lint
 * @return {string}
 */
export const ctorName = (input: unknown): string => {
  return Object.prototype.toString.call(input).slice(8, -1);
};
