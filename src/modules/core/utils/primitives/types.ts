import type { Primitive } from 'type-fest';

export type PrimitiveKind<P extends Primitive> =
  P extends void
  ? 'undefined'
  : P extends null
  ? 'null'
  : P extends boolean
  ? 'boolean'
  : P extends number
  ? 'number'
  : P extends bigint
  ? 'bigint'
  : P extends string
  ? 'string'
  : P extends symbol
  ? 'symbol'
  : never

  export type PrimitiveFromKind<Token extends string> =
  Token extends 'undefined'
  ? void
  : Token extends 'null'
  ? null
  : Token extends 'boolean'
  ? boolean
  : Token extends 'number'
  ? number
  : Token extends 'bigint'
  ? bigint
  : Token extends 'string'
  ? string
  : Token extends 'symbol'
  ? symbol
  : never
