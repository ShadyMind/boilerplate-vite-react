import type { Method } from 'axios';
import type { Fetcher } from 'swr';

export type HttpFetcher<P, D = Record<string, unknown>> = Fetcher<
    D,
    [
        string,
        Method | undefined,
        P
    ]
>;