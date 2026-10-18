(() => {
  const header = document.querySelector('[data-site-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const navWrap = document.querySelector('.header-nav-wrap');
  const nav = document.querySelector('[data-primary-nav]');

  const updateHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const closeNav = () => {
    if (!toggle || !navWrap) return;
    toggle.setAttribute('aria-expanded', 'false');
    navWrap.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  };

  if (toggle && navWrap) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      navWrap.classList.toggle('is-open', !open);
      document.body.classList.toggle('nav-open', !open);
    });
  }

  if (nav) {
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a') && window.matchMedia('(max-width: 900px)').matches) closeNav();
    });
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNav();
  });
  window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 900px)').matches) closeNav();
  });

  const locales = ['en', 'zh', 'es', 'fr', 'de'];
  const languageLinks = document.querySelectorAll('[data-language-link]');
  if (languageLinks.length) {
    const parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length && locales.includes(parts[0])) parts.shift();
    let basePath = '/' + parts.join('/');
    if (window.location.pathname.endsWith('/') && !basePath.endsWith('/')) basePath += '/';
    if (basePath === '') basePath = '/';
    languageLinks.forEach((link) => {
      const locale = link.getAttribute('data-language-link');
      link.href = locale === 'en' ? basePath : `/${locale}${basePath === '/' ? '/' : basePath}`;
    });
  }
})();
