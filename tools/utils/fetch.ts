import type { RequestOptions, IncomingMessage, ClientRequest } from 'node:http';
import https from 'node:https';
import http from 'node:http';

interface FetchModule {
  request(
    options: RequestOptions | string | URL,
    callback?: (res: IncomingMessage) => void
  ): ClientRequest;
  request(
      url: string | URL,
      options: RequestOptions,
      callback?: (res: IncomingMessage) => void,
  ): ClientRequest;
}

type FetchOptions = {
  url: string;
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTION' | 'HEAD'; 
  auth?: Record<'user' | 'password', string>;
  data?: Record<string, string>;
  headers?: Record<string, string>;
  params?: Record<string, string>;
  bufferResponse?: boolean;
};

const encodingTypes = ['ascii', 'utf8', 'utf-8', 'utf16le', 'ucs2', 'ucs-2', 'base64', 'base64url', 'latin1', 'binary', 'hex'];

const isEncoding = (input: string): input is BufferEncoding => 
  encodingTypes.includes(input);

/** Makes HTTP request by received parameters */
export const fetch = async <TResponse extends unknown, TOptions extends FetchOptions>(options: TOptions): Promise<TOptions extends { bufferResponse: true } ? Buffer : TResponse> => {
  const url = new URL(options.url);

  const buffer: Buffer[] = [];
  let shouldParsedAsJSON = false;
  let module: FetchModule = https;

  if (url.protocol !== 'https:') {
    module = http;
  }

  if (options.method === 'GET' && options.params) {
    Object.entries(options.params).forEach(
        ([key, value]) => url.searchParams.append(key, value)
    );
  }

  return new Promise((resolve, reject) => {

    const request = module.request(url, {
      method: options.method,
      timeout: 1000,
      headers: {
        Accept: 'application/json,text/plain,*/*',
        Origin: url.hostname,
        'X-Requested-With': 'XMLHttpRequest',
        ...options.headers
      }
    }, (response) => {
      response.on('data', (chunk) => {
          buffer.push(chunk);
      });

      response.on('end', () => {
          const finalBuffer = Buffer.concat(buffer);

          if (options.bufferResponse) {
            // @ts-ignore
            resolve(finalBuffer);
            return;
          }
          const encodingHeader = response.headers['content-encoding'];
          const encoding = encodingHeader && isEncoding(encodingHeader) ? encodingHeader : 'utf-8';
          let data = finalBuffer.toString(encoding);

          if (shouldParsedAsJSON) {
            data = JSON.parse(data);
          }

          // @ts-ignore
          resolve(data);
      });

      response.on('error', reject);

      if (response.headers['content-type'] === 'application/json') {
          shouldParsedAsJSON = true;
      }
    });

    if (options.method !== 'GET' && options.method !== 'HEAD' && options.method !== 'OPTION') {
      request.write(JSON.stringify(options.params));
    }

    request.on('error', reject);
    request.on('timeout', () => {
        request.destroy();
        reject();
    });
    request.end();
  });
};
