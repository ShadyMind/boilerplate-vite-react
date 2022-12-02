import type { FC } from 'react';
import { Localized } from '@fluent/react';
import React from 'react';
import { Header } from '~/core/components';

export const Home: FC = () => (
  <>
    <Header />
    <Localized id="welcome-home">
      <h1>Welcome Home!</h1>
    </Localized>
  </>
);
