import type { SiteContent } from '../i18n/types';
import { siteImages } from './images';

export const en: SiteContent = {
  site: {
    brand: 'Spatial Design Studio',
    lang: 'en',
    title:
      'Multi-Style Residential Design | French Light Luxury · Russian · Italian · Modern · American · Chinese',
    description:
      'Bespoke residential interiors across French light luxury, Russian classical, Italian minimal, modern minimal, American, and Chinese styles—warm palettes, refined detailing, and end-to-end delivery for homes and expanding European markets.',
  },
  ui: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    languageLabel: 'Language',
  },
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ],
  philosophy: {
    items: [
      {
        title: 'Refined Simplicity',
        description:
          'We design with clear spatial logic and meticulous construction detail. Warm materials, elegant lines, and practical storage work in harmony—whether French mouldings, Russian classical woodwork, or quiet modern planes. Each choice balances visual refinement with the routines of real households.',
        image: siteImages.philosophy[0],
        imageAlt: 'Classical hallway with warm lighting and refined detailing',
      },
      {
        title: 'Warm Details',
        description:
          'A fine home unfolds over time—the shift of light, framed views, and the rhythm of space. We craft living moments that grow more captivating with every season. Layered textures, soft ambient lighting, and carefully framed sightlines turn everyday rooms into places you want to linger.',
        image: siteImages.philosophy[1],
        imageAlt: 'Warm classical bedroom with layered lighting',
      },
      {
        title: 'Co-Creation',
        description:
          'Design is not a one-way deliverable, but a process we complete together. From floor plan discussions to material selection, your designer stays with you—ensuring the plan fits your lifestyle, style preference, and budget. You see progress at every stage, with direct communication and no intermediary sales.',
        image: siteImages.philosophy[2],
        imageAlt: 'Warm sitting room for design conversations',
      },
    ],
  },
  hero: {
    label: 'Multi-Style · Residential Design',
    title:
      'French Light Luxury & Warm Classical Homes · Italian · Modern · American · Chinese',
    subtitle:
      'From cream French salons and Russian classical suites to Italian calm and modern clarity—bespoke plans for how you live, with France and the UK among markets we are growing into.',
    primaryBtn: 'Free Layout Review',
    secondaryBtn: 'View Portfolio',
    image: siteImages.hero,
    imageAlt: 'French light-luxury living room in cream and soft blue',
  },
  about: {
    label: 'About Us',
    paragraphs: [
      'We design residential interiors across French light luxury, Russian classical, Italian minimal, modern minimal, American, and Chinese styles—warm palettes, clear lines, and sensitive renovation of existing homes.',
      'One-to-one original design, layout optimization, furnishing schemes, storage upgrades, and construction follow-through—homes that feel intentional and genuinely lived-in, ready for clients at home and in European markets.',
      'We reject cold, template-driven presentations. Every full-home plan is tailored to household structure, daily habits, style preference, and budget—with direct designer contact and no intermediary sales.',
    ],
  },
  services: {
    label: 'Expertise',
    title: 'Design Services',
    items: [
      {
        number: '01',
        title: 'Full-Home Design',
        image: siteImages.services[0],
        imageAlt: 'Grand classical foyer with staircase and warm wood',
        description: [
          'Full-home plans across French, Russian, Italian, modern, American, and Chinese styles—layouts, warm renderings, and construction drawings',
          'Layout and daylight optimization for living rooms, bedrooms, and kitchen-dining areas',
          'Renovation upgrades: mouldings, flooring, and layered lighting atmospheres',
        ],
      },
      {
        number: '02',
        title: 'Warm Furnishing Scheme',
        image: siteImages.services[1],
        imageAlt: 'Cream walk-in wardrobe with crystal chandelier',
        description: [
          'Coordinated furniture, lighting, and drapery matched to your chosen style',
          'Decorative elements balanced with contemporary living needs',
        ],
      },
      {
        number: '03',
        title: 'Selective Renovation',
        image: siteImages.services[2],
        imageAlt: 'Glass and wood room divider renovation detail',
        description: [
          'Feature walls, walk-in wardrobes, entryways, kitchens, and baths—detailing applied with restraint',
        ],
      },
    ],
  },
  included: {
    label: 'Included',
    items: [
      'Complimentary layout review',
      'Palette & style guidance',
      'Material selection',
      'Budget reference',
      'Construction Q&A',
    ],
  },
  portfolio: {
    label: 'Selected Work',
    title: 'Projects by Style',
    archiveLink: 'Start a Project',
    filterAll: 'All styles',
    comingSoon: 'Chinese-style cases coming soon—ask us to reserve a consultation.',
    featuredBadge: 'Signature Series',
    projects: [
      {
        title: 'Euro-American Signature',
        category: 'Euro-American',
        styleKey: 'american',
        tagline:
          'Dark timber, marble planes, and layered light—botanical pattern and metal accents for villa-level drama.',
        images: [...siteImages.portfolio.american],
        featured: true,
      },
      {
        title: 'French Light Luxury',
        category: 'French',
        styleKey: 'french',
        tagline:
          'Cream stone, crystal light, and soft classical lines—refined warmth for villas and city homes.',
        images: [...siteImages.portfolio.french],
      },
      {
        title: 'Italian Minimal',
        category: 'Italian',
        styleKey: 'italian',
        tagline:
          'Quiet luxury in warm neutrals—marble, timber, and calm proportions for everyday elegance.',
        images: [...siteImages.portfolio.italian],
      },
      {
        title: 'Modern Minimal',
        category: 'Modern',
        styleKey: 'modern',
        tagline:
          'Clean planes and layered light for residences—plus contemporary commercial and workplace spaces.',
        images: [...siteImages.portfolio.modern],
      },
      {
        title: 'Russian Classical',
        category: 'Russian',
        styleKey: 'russian',
        tagline:
          'Deep wood, gold accent, and formal symmetry—grand yet livable European-Russian suites.',
        images: [...siteImages.portfolio.russian],
      },
      {
        title: 'Chinese Style',
        category: 'Chinese',
        styleKey: 'chinese',
        tagline:
          'New Chinese and contemporary oriental residences—cases in preparation; style direction available now.',
        images: [...siteImages.portfolio.chinese],
        comingSoon: true,
      },
    ],
  },
  advantages: {
    label: 'Our Approach',
    title: 'Why Choose Us',
    items: [
      {
        number: '01',
        icon: 'warmth',
        title: 'Multi-Style Expertise',
        description:
          'French light luxury, Russian classical, Italian, modern, American, and Chinese—warm, buildable schemes',
      },
      {
        number: '02',
        icon: 'transparency',
        title: 'No Hidden Costs',
        description: 'Clear proposals, drawings, and itemized scope from the start',
      },
      {
        number: '03',
        icon: 'personal',
        title: 'Dedicated Designer',
        description: 'One designer, direct contact—no handoffs mid-project',
      },
      {
        number: '04',
        icon: 'craft',
        title: 'Built to Last',
        description: 'Atmospheres that are livable, maintainable, and ready to build',
      },
    ],
  },
  process: {
    label: 'Process',
    title: 'From Consultation to Completion',
    steps: [
      'Initial consultation',
      'Brief & style confirmation',
      'Complimentary layout plan',
      'Scheme approval',
      'Full drawing set',
      'Material guidance',
      'Construction support',
      'Final walkthrough',
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Common Questions',
    items: [
      {
        question: 'Which styles do you offer?',
        answer:
          'French light luxury, Russian classical, Italian minimal, modern minimal, American, and Chinese. We help you choose a direction that fits your floor plan, lifestyle, and budget.',
      },
      {
        question: 'How is design priced?',
        answer:
          'A fixed fee based on area and scope, quoted upfront with no later add-ons.',
      },
      {
        question: 'Do you work remotely or for overseas homes?',
        answer:
          'Yes. We serve clients nationwide and support growing interest in France and the UK with full drawing sets, detailed specifications, and ongoing online support.',
      },
      {
        question: 'What drawings are included?',
        answer:
          'Layout, demolition, MEP, ceiling, flooring, elevations, detail drawings, warm renderings, and a material schedule.',
      },
    ],
  },
  cta: {
    label: 'Private Consultation',
    title: 'Begin Your Home Project',
    quote: 'Every line and warm glow is composed for the comfort of home.',
    contact: 'WeChat · Complimentary Consultation',
    button: 'Book a Consultation',
    wechatId: 'yzkongjian',
    modalTitle: 'Add on WeChat',
    modalHint: 'Copy the WeChat ID, then search and add us in WeChat for a free consultation.',
    copyLabel: 'Copy WeChat ID',
    copiedLabel: 'Copied',
    closeLabel: 'Close',
  },
  footer: {
    about:
      'Multi-style residential design—French light luxury, Russian classical, Italian, modern, American, and Chinese—bespoke schemes that are beautiful, buildable, and made to be lived in.',
    columns: [
      {
        title: 'Studio',
        links: [
          { label: 'About', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'Portfolio', href: '#portfolio' },
        ],
      },
      {
        title: 'Inquire',
        links: [
          { label: 'Free Layout Review', href: '#contact' },
          { label: 'Book Design', href: '#contact' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
    ],
    copyright: '© 2026 Spatial Design Studio. All rights reserved.',
  },
};
