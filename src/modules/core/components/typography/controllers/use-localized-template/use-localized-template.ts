import type { ReactNode, ReactElement } from 'react';
import { useMemo, isValidElement } from 'react';
import { isPrimitiveTypeOf } from '~/core/utils/primitives';

export const useLocalizedTemplate = (children: ReactNode): [string, Record<string, ReactElement>] => {
  return useMemo(() => {
    if (isPrimitiveTypeOf(children, 'string')) {
      return [children, {}];
    } else if (isValidElement(children)) {
      return ['', {}];
    }

    return ['', {}];
  }, [children]);
};
