import type { FC } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '~/core/components/header';

export const UnexpectedError: FC = () => (
  <>
    <Header />
    <h1>Cannot find page by address {location.href}</h1>
    <p>
      Go back{' '}
      <Link to="/">Home</Link>
    </p>
  </>
);
