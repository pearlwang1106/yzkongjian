export type Locale = 'en' | 'zh' | 'ru';

export type IconName = 'warmth' | 'transparency' | 'personal' | 'craft';

export interface SiteContent {
  site: {
    brand: string;
    lang: string;
    title: string;
    description: string;
  };
  ui: {
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    mobileNav: string;
    languageLabel: string;
  };
  nav: { label: string; href: string }[];
  philosophy: {
    items: {
      title: string;
      description: string;
      image: string;
      imageAlt: string;
    }[];
  };
  hero: {
    label: string;
    title: string;
    subtitle: string;
    primaryBtn: string;
    secondaryBtn: string;
    image: string;
    imageAlt: string;
  };
  about: {
    label: string;
    paragraphs: string[];
  };
  services: {
    label: string;
    title: string;
    items: {
      number: string;
      title: string;
      image: string;
      imageAlt: string;
      description: string[];
    }[];
  };
  included: {
    label: string;
    items: string[];
  };
  portfolio: {
    label: string;
    title: string;
    archiveLink: string;
    filterAll: string;
    comingSoon: string;
    projects: {
      title: string;
      category: string;
      styleKey: string;
      tagline: string;
      images: string[];
      comingSoon?: boolean;
    }[];
  };
  advantages: {
    label: string;
    title: string;
    items: {
      number: string;
      icon: IconName;
      title: string;
      description: string;
    }[];
  };
  process: {
    label: string;
    title: string;
    steps: string[];
  };
  faq: {
    label: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    label: string;
    title: string;
    quote: string;
    contact: string;
    button: string;
  };
  footer: {
    about: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    copyright: string;
    social: { label: string; href: string }[];
  };
}
