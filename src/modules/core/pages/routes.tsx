import React from 'react';
import { Home, NotFound, UnexpectedError } from './components';
import { Wrapper } from './wrapper';

export const routes = [
  {
    element: <Wrapper />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/error',
        element: <UnexpectedError />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];
