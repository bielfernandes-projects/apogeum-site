import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales: [...locales],
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true,
});

export const config = {
  matcher: ['/', '/(pt|en|es|fr)/:path*'],
};
