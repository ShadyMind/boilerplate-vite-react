import type { AxiosInstance, CreateAxiosDefaults } from 'axios';
import type { HttpFetcher } from './types';
import axiosStatic from 'axios';

/**
 * Fabric method for resource ({@link https://swr.vercel.app swr}) fetcher
 * generator based on {@link https://axios-http.com Axios}
 * 
 * @experimental
 * 
 * @param [config=undefined] Axios defaults those will be applied to every request started
 *               from instance inside closure of this fabric method
 * @return method that creates and return method from axios instance from fabric
 *         closure
 * 
 * @example
 * ```javascript
 * const usersFetcher = httpFetcherFabric({ baseUrl: 'api/users/' });
 * const useUsersResource = resourceHookFabric(usersFetcher);
 * 
 * const Component: FC<ComponentProps> = () => {
 *   const { data, error } = useUsersResource('/me');
 * 
 *   return (<div>{my.name}</div>);
 * };
 * ```
 */
export const httpFetcherFabric = <Payload>(config?: CreateAxiosDefaults): HttpFetcher<Payload> => {
    let axios: AxiosInstance;

    if (config) {
        axios = axiosStatic.create(config);
    } else {
        axios = axiosStatic;
    }

    return async (url, method = 'GET', data) => {
        const response = await axios({ url, method, data });

        return response.data;
    }
}