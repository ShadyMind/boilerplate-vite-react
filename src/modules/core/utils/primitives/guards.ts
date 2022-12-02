import { Primitive } from 'type-fest';
import { ctorName } from '../constructors/constructor-name';
import type { PrimitiveKind, PrimitiveFromKind } from './types';

/**
 * Checks given primitive value for specific type via those constructor
 * 
 * @param input subject
 * @param type insurance type
 * 
 * @example
 * checks number 1 to type number:
 * ```javascript
 * isPrimitiveTypeOf(1, 'number'); // true
 * ```
 * ----
 * checks number 1 to type string:
 * ```javascript
 * isPrimitiveTypeOf(1, 'string'); // false
 * ```
 * ----
 * checks string "token" to type symbol:
 * ```javascript
 * isPrimitiveTypeOf('token', 'symbol'); // false
 * ```
 * ----
 * checks symbol "token" to type symbol:
 * ```javascript
 * isPrimitiveTypeOf(Symbol('token'), 'symbol'); // true
 * ```
 * ----
 * checks bigint number "100" to type bigint:
 * ```javascript
 * isPrimitiveTypeOf(100n, 'bigint'); // true
 * ```
 */
export const isPrimitiveTypeOf = <T extends PrimitiveKind<Primitive>>(input: unknown, type: T): input is PrimitiveFromKind<T> => {
  const token = ctorName(input);
  
  return token.toLowerCase() === type;
};
