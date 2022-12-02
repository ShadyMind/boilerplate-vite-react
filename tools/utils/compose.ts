type Compositable<T> = (acc: T, idx: number) => T;

export const compose = <T>(...fns: Compositable<T>[]) => (initial: T) =>
  fns.reduce((prevResult, fn, idx) => {
    return fn(prevResult, idx);
  }, initial);
