import type { FC, ReactNode } from 'react';
import React from 'react';
import { LocalizationProvider } from '@fluent/react';
import { l10n } from '../../localization';

export interface TranslationProviderProps {
  children?: ReactNode | undefined;
};

export const TranslationProvider: FC<TranslationProviderProps> = ({ children }) => {
  return (
    <LocalizationProvider l10n={l10n}>
      {children}
    </LocalizationProvider>
  )
};
