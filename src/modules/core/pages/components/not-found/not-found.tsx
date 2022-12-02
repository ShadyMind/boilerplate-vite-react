import type { FC } from 'react';
import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '~/core/components/header';
import { /* useLocalization, */ Localized } from '@fluent/react';

export const NotFound: FC = memo(() => {
  // const { l10n } = useLocalization();
  return (
    <>
      <Header />
      <Localized id="cannot-find-page" vars={useMemo(() => ({
        address: decodeURIComponent(location.pathname.slice(1))
      }), [])}>
        <h1>Cannot find page at $address</h1>
      </Localized>
      <Localized
        id="go-back-home"
        elems={useMemo(() => ({
          backLink: <Link to="/"></Link>
        }), [])}
      >
        <p>{'Go back <backLink>Home</backLink>.'}</p>
      </Localized>
    </>
  );
});
