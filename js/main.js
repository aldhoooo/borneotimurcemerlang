// ===========================
//  KARYA TIMUR CEMERLANG - Main App JS
// ===========================

/* ========== NAVBAR ========== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!navbar) return;

  // Scroll effect
  function handleScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    // Back to top
    const btt = document.querySelector('.back-to-top');
    if (btt) {
      btt.classList.toggle('visible', window.scrollY > 400);
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Hamburger
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');

  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));

  document.body.style.overflow = isOpen ? 'hidden' : '';
});

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Jangan tutup menu jika yang diklik adalah accordion toggle (Blog group)
        if (link.classList.contains('mobile-nav-group__toggle')) return;
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPage || (currentPage === 'index.html' && href === '#')) {
      link.classList.add('active');
    }
  });

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

/* ========== HERO SLIDER ========== */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let current  = 0;
  let timer    = null;
  const DURATION = 5500;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, DURATION);
  }

  // Arrow buttons
  document.querySelector('.hero-arrow--next')?.addEventListener('click', () => { next(); startTimer(); });
  document.querySelector('.hero-arrow--prev')?.addEventListener('click', () => { prev(); startTimer(); });

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startTimer(); });
  });

  // Touch swipe
  let touchStartX = 0;
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    heroEl.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    heroEl.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); startTimer(); }
    }, { passive: true });
  }

  // Init
  slides[0].classList.add('active');
  dots[0]?.classList.add('active');
  startTimer();
}

/* ========== SCROLL REVEAL ========== */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ========== COUNTER ANIMATION ========== */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    const value = Math.floor(eased * target);
    el.textContent = value.toLocaleString('id-ID') + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = '1';
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ========== SEARCH (Navbar) ========== */
function initNavSearch() {
  // Event delegation pada document agar bekerja meski input
  // baru di-inject partials.js setelah DOMContentLoaded.
  // Tangkap Enter dari nav-search-input MAUPUN mobile-search-input.
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const el = e.target;
    if (el.id === 'nav-search-input' || el.id === 'mobile-search-input') {
      const q = el.value.trim();
      if (q) window.location.href = new URL('catalog.html?q=' + encodeURIComponent(q), document.baseURI).href;
    }
  });

  // Jika sudah di halaman catalog, sync nilai dari URL ke input catalog
  const params = new URLSearchParams(window.location.search);
  const qParam = params.get('q');
  if (qParam) {
    const catalogInput = document.getElementById('catalog-search');
    if (catalogInput) {
      catalogInput.value = qParam;
      catalogInput.dispatchEvent(new Event('input'));
    }
  }
}

/* ========== BACK TO TOP ========== */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ========== TOAST ========== */
function showToast(msg, duration = 2800) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ========== NAVBAR SEARCH TOGGLE (mobile) ========== */
function initMobileSearch() {
  document.addEventListener('click', (e) => {
    const toggler = e.target.closest('#mobile-search-toggle');
    if (!toggler) return;

    const bar        = document.getElementById('mobile-search-bar');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger  = document.getElementById('hamburger');
    if (!bar) return;

    // Buka mobile menu dulu jika belum terbuka
    if (mobileMenu && !mobileMenu.classList.contains('open')) {
      mobileMenu.classList.add('open');
      hamburger?.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    bar.classList.toggle('hidden');
    if (!bar.classList.contains('hidden')) {
      bar.querySelector('input')?.focus();
    }
  });
}

/* ========== LAZY IMAGES ========== */
function initLazyImages() {
  const imgs = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          img.classList.add('loaded');
          obs.unobserve(img);
        }
      });
    });
    imgs.forEach(img => obs.observe(img));
  }
}

/* ========== BOOT ========== */
// partials.js (loaded before this file) injects nav/footer on DOMContentLoaded
// and calls applyTranslations() right after injection.
// This listener runs after partials.js because scripts are executed in order.
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroSlider();
  initScrollReveal();
  initCounters();
  initNavSearch();
  initBackToTop();
  initMobileSearch();
  initLazyImages();

  // Page-specific
  const page = document.body.dataset.page;
  if (page === 'catalog') initCatalogPage();
  if (page === 'contact') initContactPage();
});



/* ==========================================
   BTC CATEGORY SLIDER
   Mobile Auto Slide + Manual Navigation
========================================== */

(() => {
  const track = document.getElementById('categoryTrack');
  const prev = document.getElementById('catPrev');
  const next = document.getElementById('catNext');

  if (!track || !prev || !next) return;

  const mobileQuery = window.matchMedia('(max-width: 600px)');
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  );

  let autoSlide = null;
  let resumeTimeout = null;

  const getScrollAmount = () => {
    const card = track.querySelector('.btc-cat-item');
    if (!card) return 300;

    const gap = parseFloat(getComputedStyle(track).gap) || 0;

    return card.getBoundingClientRect().width + gap;
  };

  const updateButtons = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;

    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= maxScroll - 2;
  };

  // Move to next category
  const slideNext = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;

    if (track.scrollLeft >= maxScroll - 5) {
      track.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      track.scrollBy({
        left: getScrollAmount(),
        behavior: 'smooth'
      });
    }
  };

  // Manual navigation
  prev.addEventListener('click', () => {
    pauseAutoSlide();

    track.scrollBy({
      left: -getScrollAmount(),
      behavior: 'smooth'
    });

    resumeAutoSlide();
  });

  next.addEventListener('click', () => {
    pauseAutoSlide();
    slideNext();
    resumeAutoSlide();
  });

  // Start autoplay
  const startAutoSlide = () => {
    stopAutoSlide();

    if (
      !mobileQuery.matches ||
      reducedMotion.matches ||
      document.hidden
    ) return;

    autoSlide = setInterval(slideNext, 2000);
  };

  // Stop autoplay
  const stopAutoSlide = () => {
    clearInterval(autoSlide);
    clearTimeout(resumeTimeout);

    autoSlide = null;
    resumeTimeout = null;
  };

  // Pause temporarily during interaction
  const pauseAutoSlide = () => {
    stopAutoSlide();
  };

  // Resume after interaction
  const resumeAutoSlide = () => {
    clearTimeout(resumeTimeout);

    if (!mobileQuery.matches) return;

    resumeTimeout = setTimeout(() => {
      startAutoSlide();
    }, 4000);
  };

  // Touch interaction
  track.addEventListener('touchstart', pauseAutoSlide, {
    passive: true
  });

  track.addEventListener('touchend', resumeAutoSlide, {
    passive: true
  });

  track.addEventListener('touchcancel', resumeAutoSlide, {
    passive: true
  });

  // Mouse interaction
  track.addEventListener('mouseenter', pauseAutoSlide);
  track.addEventListener('mouseleave', resumeAutoSlide);

  // Update navigation state
  track.addEventListener('scroll', updateButtons, {
    passive: true
  });

  // Responsive behavior
  mobileQuery.addEventListener('change', () => {
    stopAutoSlide();
    startAutoSlide();
    updateButtons();
  });

  // Respect reduced motion preference
  reducedMotion.addEventListener('change', () => {
    stopAutoSlide();
    startAutoSlide();
  });

  // Pause when tab is inactive
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoSlide();
    } else {
      startAutoSlide();
    }
  });

  updateButtons();
  startAutoSlide();

})();

