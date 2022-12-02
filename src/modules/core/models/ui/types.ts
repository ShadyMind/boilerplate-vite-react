type Decrease<T extends number, Result extends unknown[] = []> = Result['length'] extends T
  ? Result extends [unknown, ...infer R] ? R['length'] : never : Decrease<T, [unknown, ...Result]>
;

type SizePowerPrefix = 'x';
type SizePowerPostfix = '';
type SizePower = 2;

type SizeMiddleToken = 'm';

type SizeGreaterToken = 'l';
type SizeSmallerToken = 's';

type SizePoweredToken<Token extends string, Depth extends number = SizePower> =
  Depth extends 0
    ? Token
    : Token | SizePoweredToken<`${SizePowerPrefix}${Token}${SizePowerPostfix}`, Decrease<Depth>>
;

export type Size =
  | SizeMiddleToken
  | SizePoweredToken<SizeGreaterToken | SizeSmallerToken>;
