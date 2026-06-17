import type { Locale, SiteContent } from './types';
import { en } from '../data/en';
import { zh } from '../data/zh';

export type { Locale, SiteContent };

export const defaultLocale: Locale = 'en';

const content: Record<Locale, SiteContent> = { en, zh };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}

export function getLocalePath(locale: Locale, base = import.meta.env.BASE_URL): string {
  const normalized = base.endsWith('/') ? base : `${base}/`;
  return locale === defaultLocale ? normalized : `${normalized}zh/`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'zh' : 'en';
}
