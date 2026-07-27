import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['pt', 'en', 'es', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt';

export const localeLabels: Record<Locale, { label: string; country: string; flag: string }> = {
  pt: { label: 'PT-BR', country: 'Brasil', flag: '\u{1F1E7}\u{1F1F7}' },
  en: { label: 'EN-US', country: 'EUA', flag: '\u{1F1FA}\u{1F1F8}' },
  es: { label: 'ES-ES', country: 'Espanha', flag: '\u{1F1EA}\u{1F1F8}' },
  fr: { label: 'FR-FR', country: 'França', flag: '\u{1F1EB}\u{1F1F7}' },
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
