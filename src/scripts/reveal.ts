function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function revealAll(elements: NodeListOf<Element>) {
  elements.forEach((el) => el.classList.add('is-visible'));
}

function initScrollReveal() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  if (prefersReducedMotion()) {
    revealAll(elements);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
  );

  elements.forEach((el) => {
    if (el.closest('[data-hero]')) return;
    observer.observe(el);
  });
}

function initHeroReveal() {
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;

  const items = hero.querySelectorAll('[data-animate]');
  if (!items.length) return;

  if (prefersReducedMotion()) {
    revealAll(items);
    return;
  }

  requestAnimationFrame(() => {
    items.forEach((el, index) => {
      window.setTimeout(() => el.classList.add('is-visible'), index * 100);
    });
  });
}

function initHeaderScroll() {
  const header = document.querySelector('[data-header]');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 16);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function init() {
  initHeroReveal();
  initScrollReveal();
  initHeaderScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
