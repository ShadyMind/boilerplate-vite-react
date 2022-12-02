import { Method } from 'axios';
import { resourceHookFabric, httpFetcherFabric } from '../../../core/utils/fetch';

const fetcher = httpFetcherFabric({
    baseURL: 'https://api.nasa.gov/neo/rest/v1',
    params: { api_key: '3hAgfdKru7giRbUumyCpGXzizwS3vygS492NnFms' }
});

// @ts-ignore
export const useAsteroidsResource = resourceHookFabric<[string, Method, Record<string, unknown>]>(fetcher);