import { URL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
import { fetch } from './fetch';

const provideFile = (filepath: string) => {
  return fs.readFile(filepath);
};

const provideHttpResponse = async (url: URL) => {
  return fetch({
    bufferResponse: true,
    method: 'GET',
    url: url.toString(),
  });
};

export const dataProvider = async (datasource: string) => {
  const url = new URL(datasource);
  let data: Buffer = Buffer.from('');

  if (url.protocol === 'file:') {
    let filepath = url.pathname;

    if (path.sep !== '/') {
      filepath = url.pathname.replace(/\//g, path.sep)
    }

    data = await provideFile(filepath);
  } else if (url.protocol === 'http:' || url.protocol) {
    data = await provideHttpResponse(url);
  }

  return data;
};
