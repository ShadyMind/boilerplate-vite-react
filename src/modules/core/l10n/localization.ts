import 'intl-polyfill';
import { negotiateLanguages } from '@fluent/langneg';
import { FluentBundle, FluentResource } from '@fluent/bundle';
import { ReactLocalization } from '@fluent/react';
import englishL10n from './translations/en-US.ftl';
import trL10n from './translations/tr.ftl';

export type Locale = 'en-US' | 'tr';

const RESOURCES: Record<Locale, FluentResource> = {
  'tr': trL10n,
  'en-US': englishL10n
};


export function* generateBundles(userLocales: Readonly<string[]>) {
  const currentLocales = negotiateLanguages(
      userLocales,
      ['tr', 'en-US'],
      { defaultLocale: 'tr' }
  );

  for (const locale of currentLocales) {
      const bundle = new FluentBundle(locale);
      bundle.addResource(RESOURCES[locale as Locale]);
      yield bundle;
  }
}

export const l10n = new ReactLocalization(generateBundles(navigator.languages));
