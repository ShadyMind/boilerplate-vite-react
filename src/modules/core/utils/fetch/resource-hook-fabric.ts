import type { Method } from 'axios';
import type { Key, Fetcher } from 'swr';
import useSWR from 'swr';

export const resourceHookFabric = <Keys extends Key>(fetcher: Fetcher<unknown, Keys>) => {
  const useResource = <Data, Err extends Error = Error>(url: string, method: Method, params: Record<string, unknown>) => {
    // @ts-ignore
    return useSWR<Data, Err, Keys>([url, method, params], fetcher as Fetcher<Data, Keys> , { suspense: true });
  };

  return useResource;
};