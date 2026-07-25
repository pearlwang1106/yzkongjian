import type { Locale, SiteContent } from './types';
import { en } from '../data/en';
import { zh } from '../data/zh';
import { ru } from '../data/ru';

export type { Locale, SiteContent };

export const defaultLocale: Locale = 'en';

export const locales: Locale[] = ['en', 'zh', 'ru'];

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  zh: '中文',
  ru: 'RU',
};

export const localeHreflang: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-CN',
  ru: 'ru',
};

const content: Record<Locale, SiteContent> = { en, zh, ru };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}

export function getLocalePath(locale: Locale, base = import.meta.env.BASE_URL): string {
  const normalized = base.endsWith('/') ? base : `${base}/`;
  return locale === defaultLocale ? normalized : `${normalized}${locale}/`;
}
