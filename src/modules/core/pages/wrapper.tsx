import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { Header } from '~/core/components';
import { LocalizationProvider, ReactLocalization } from '@fluent/react';
import { FluentBundle } from '@fluent/bundle';
import translationEn from '~/core/translations/en-US.ftl';

export const Wrapper: FC = () => {
  const bundle = new FluentBundle('en-US');
  bundle.addResource(translationEn);

  const localization = new ReactLocalization([bundle]);

  return (
    <>
      <Header />
      <LocalizationProvider l10n={localization}>
        <Outlet />
      </LocalizationProvider>
    </>
  );
};