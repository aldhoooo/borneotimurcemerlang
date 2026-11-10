
// ============================================================
// catalog.js – PT Borneo Timur Cemerlang
// Homepage Featured Products + Catalog Page Logic
// ============================================================

(function () {
  'use strict';

  // STATE
  let activeCategory = null;
  let activeSubcat = null;
  let searchQuery = '';
  let sidebarOpen = false;

  // DOM REFERENCES
  let grid, desktopCount, mobileCount, searchEl, clearBtn;
  let sidebar, overlay, mobileToggle;

  // FORMAT RUPIAH
  const fmt = n => 'Rp ' + n.toLocaleString('id-ID');

  // WHATSAPP ICON
  const WA_SVG = `
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  `;

  // WHATSAPP URL
  function getWhatsAppUrl(number, productName) {
    const message = encodeURIComponent(
      `Halo PT Borneo Timur Cemerlang, saya ingin menanyakan produk: ${productName}`
    );

    return `https://wa.me/${number}?text=${message}`;
  }

  // WHATSAPP BUTTON
  function whatsappButton(number, label, productName, type = 'primary') {
    return `
      <a
        class="product-wa-button product-wa-button--${type}"
        href="${getWhatsAppUrl(number, productName)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi ${label} melalui WhatsApp">

        ${WA_SVG}
        <span>${label}</span>
      </a>
    `;
  }

  // WHATSAPP ACTIONS
  function whatsappActions(productName) {
    return `
      <div class="product-wa-actions">
        ${whatsappButton('6281268577849', t('wa_admin_1'), productName, 'primary')}
        ${whatsappButton('628117753350', t('wa_admin_2'), productName, 'secondary')}
      </div>
    `;
  }

  // FILTERED PRODUCTS
  function filtered() {
    const q = searchQuery.toLowerCase();

    return PRODUCTS.filter(p => {
      const catOk = !activeCategory || p.cat === activeCategory;
      const subOk = !activeSubcat || p.subcat === activeSubcat;

      const searchOk = !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        (p.desc && p.desc.toLowerCase().includes(q));

      return catOk && subOk && searchOk;
    });
  }

  // UPDATE PRODUCT COUNT
  function updateCount(n) {
    const text = `${n} produk ditemukan`;

    if (desktopCount) desktopCount.textContent = text;
    if (mobileCount) mobileCount.textContent = text;
  }

  // PRODUCT BADGES
  function renderBadges(badges, featured = false) {
    return (badges || []).map(b => `
      <span class="badge badge-${b === 'SOLAS' || b === 'IMO' ? 'teal' : 'gold'}">
        ${b}
      </span>
    `).join('');
  }

  // CATALOG PRODUCT CARD
  function productCard(p) {
    const badges = renderBadges(p.badges);

    return `
      <div class="product-card reveal">
        <div class="product-card__img-wrap">
          <img
            src="${p.img}"
            alt="${p.name}"
            loading="lazy"
            class="product-card__img">

          ${badges ? `
            <div class="product-card__badges">${badges}</div>
          ` : ''}
        </div>

        <div class="product-card__body">
          <p class="product-card__brand">${p.brand}</p>
          <h3 class="product-card__name">${p.name}</h3>

          <div class="product-card__desc-wrap">
            <p class="product-card__desc">${p.desc || ''}</p>
            <div class="product-card__desc-glass">${p.desc || ''}</div>
          </div>

          <div class="product-card__bottom">
  <span class="product-card__price">
    ${fmt(p.price)}
    <small>/${p.unit}</small>
  </span>

  ${whatsappActions(p.name)}

  ${addToCartButton(p)}
</div>
        </div>
      </div>
    `;
  }

  // RENDER CATALOG GRID
  function renderGrid(scrollToTop = false) {
    if (!grid) return;

    const list = filtered();
    updateCount(list.length);

    if (!list.length) {
      grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-light);">
          <div style="font-size:2.5rem;margin-bottom:12px;">🔍</div>
          <p style="font-size:1rem;font-weight:600;margin-bottom:6px;">
            Produk tidak ditemukan
          </p>
          <p style="font-size:.875rem;">
            Coba ubah filter atau kata kunci pencarian
          </p>
        </div>
      `;

      if (scrollToTop) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }

      return;
    }

    grid.innerHTML = list.map(productCard).join('');

    requestAnimationFrame(() => {
      if (scrollToTop) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }

      grid.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.04}s`;
        el.classList.add('revealed');
      });

      // Mobile description interaction
      grid.querySelectorAll('.product-card__desc-wrap').forEach(wrap => {
        wrap.addEventListener('touchstart', e => {
          const card = wrap.closest('.product-card');
          if (!card) return;

          const isOpen = card.classList.contains('desc-open');

          grid.querySelectorAll('.product-card.desc-open').forEach(item => {
            item.classList.remove('desc-open');
          });

          if (!isOpen) card.classList.add('desc-open');

          e.stopPropagation();
        }, { passive: true });
      });
    });

    // Close description when tapping outside
    if (!grid.dataset.outsideTouchBound) {
      document.addEventListener('touchstart', () => {
        grid.querySelectorAll('.product-card.desc-open').forEach(card => {
          card.classList.remove('desc-open');
        });
      }, { passive: true });

      grid.dataset.outsideTouchBound = 'true';
    }
  }

  // FILTER TRAIL
  function renderTrail() {
    const trail = document.getElementById('filter-trail');
    if (!trail) return;

    trail.innerHTML = '';
    if (!activeCategory) return;

    const catObj = CATEGORIES.find(c => c.id === activeCategory);
    if (!catObj) return;

    const catChip = document.createElement('button');
    catChip.type = 'button';
    catChip.className = 'filter-trail__chip';

    catChip.innerHTML = `
      ${catObj.icon} ${catObj.label}
      <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    `;

    catChip.addEventListener('click', () => applyFilter(null, null));
    trail.appendChild(catChip);

    if (!activeSubcat) return;

    const arrow = document.createElement('span');
    arrow.style.cssText = 'color:var(--text-light);font-size:.75rem;';
    arrow.textContent = '›';
    trail.appendChild(arrow);

    const subObj = catObj.subs.find(s => s.id === activeSubcat);
    if (!subObj) return;

    const subChip = document.createElement('button');
    subChip.type = 'button';
    subChip.className = 'filter-trail__chip';

    subChip.innerHTML = `
      ${subObj.label}
      <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    `;

    subChip.addEventListener('click', () => {
      applyFilter(activeCategory, null);
    });

    trail.appendChild(subChip);
  }

  // APPLY FILTER
  function applyFilter(cat, sub) {
    activeCategory = cat || null;
    activeSubcat = sub || null;

    if (document.activeElement) document.activeElement.blur();

    renderSidebar();
    renderGrid(true);
    renderTrail();
    syncMobileLabel();
  }

  // SIDEBAR
  function renderSidebar() {
    const container = document.getElementById('sidebar-nav');
    if (!container) return;

    let html = `
      <button
        type="button"
        class="sf-item ${!activeCategory ? 'sf-item--active' : ''}"
        data-cat=""
        data-sub="">
        <span class="sf-item__icon">🌐</span>
        <span class="sf-item__label">
          ${typeof t === 'function' ? t('cat_all') + ' Produk' : 'Semua Produk'}
        </span>
        <span class="sf-item__count">${PRODUCTS.length}</span>
      </button>
    `;

    CATEGORIES.forEach(cat => {
      const catCount = PRODUCTS.filter(p => p.cat === cat.id).length;
      const isOpen = activeCategory === cat.id;

      html += `
        <div class="sf-group ${isOpen ? 'sf-group--open' : ''}">
          <button
            type="button"
            class="sf-item sf-item--cat ${isOpen ? 'sf-item--active' : ''}"
            data-cat="${cat.id}"
            data-sub="">
            <span class="sf-item__icon">${cat.icon}</span>
            <span class="sf-item__label">${cat.label}</span>
            <span class="sf-item__count">${catCount}</span>
            <svg class="sf-item__chevron" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          <div class="sf-subs">
            ${cat.subs.map(sub => {
              const subCount = PRODUCTS.filter(p =>
                p.cat === cat.id && p.subcat === sub.id
              ).length;

              if (!subCount) return '';

              const isActiveSub =
                activeCategory === cat.id &&
                activeSubcat === sub.id;

              return `
                <button
                  type="button"
                  class="sf-sub ${isActiveSub ? 'sf-sub--active' : ''}"
                  data-cat="${cat.id}"
                  data-sub="${sub.id}">
                  <span class="sf-sub__dot"></span>
                  <span>${sub.label}</span>
                  <span class="sf-item__count">${subCount}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;

    container.querySelectorAll('button[data-cat]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();

        const cat = btn.dataset.cat || null;
        const sub = btn.dataset.sub || null;

        if (cat && cat === activeCategory && !sub && !activeSubcat) {
          applyFilter(null, null);
        } else {
          applyFilter(cat, sub);
        }

        if (sub && window.innerWidth < 1024) closeSidebar();
      });
    });
  }

  // MOBILE SIDEBAR
  function openSidebar() {
    if (!sidebar || !overlay) return;

    sidebarOpen = true;
    sidebar.classList.add('sidebar--open');
    overlay.classList.add('overlay--show');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    if (!sidebar || !overlay) return;

    sidebarOpen = false;
    sidebar.classList.remove('sidebar--open');
    overlay.classList.remove('overlay--show');
    document.body.style.overflow = '';
  }

  // MOBILE FILTER LABEL
  function syncMobileLabel() {
    const label = document.getElementById('mobile-filter-label');
    if (!label) return;

    if (!activeCategory) {
      label.textContent = typeof t === 'function'
        ? t('catalog_filter')
        : 'Filter Kategori';
      return;
    }

    const cat = CATEGORIES.find(c => c.id === activeCategory);

    if (!activeSubcat) {
      label.textContent = cat ? catLabel(cat) : 'Filter';
      return;
    }

    const sub = cat ? cat.subs.find(s => s.id === activeSubcat) : null;
    label.textContent = sub ? subLabel(sub) : 'Filter';
  }

  // HOMEPAGE FEATURED PRODUCT CARD
  function featuredCardHtml(p) {
    const badges = renderBadges(p.badges, true);

    return `
      <article class="product-card featured-product-card reveal">
        <div class="product-card__img-wrap featured-product-card__media">
          <img
            src="${p.img}"
            alt="${p.name}"
            loading="lazy"
            class="product-card__img">

          ${badges ? `
            <div class="product-card__badges featured-product-card__badges">
              ${badges}
            </div>
          ` : ''}
        </div>

        <div class="product-card__body featured-product-card__body">
          <p class="product-card__brand">${p.brand}</p>
          <h3 class="product-card__name">${p.name}</h3>

          <div class="product-card__desc-wrap">
            <p class="product-card__desc">${p.desc || ''}</p>
            <div class="product-card__desc-glass">${p.desc || ''}</div>
          </div>

          <div class="featured-product-card__bottom">
  <span class="product-card__price">
    ${fmt(p.price)}
    <small>/${p.unit}</small>
  </span>

  ${whatsappActions(p.name)}

  ${addToCartButton(p)}
</div>
        </div>
      </article>
    `;
  }

  // FEATURED PRODUCT CAROUSEL
  function initFeaturedCarousel(trackId, intervalMs) {
    const track = document.getElementById(trackId);
    if (!track) return;

    const originalCards = Array.from(track.children);
    if (!originalCards.length) return;

    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.classList.add('revealed');
      track.appendChild(clone);
    });

    const total = originalCards.length;
    let index = 0;
    let timer = null;

    function cardStep() {
      const first = track.children[0];
      if (!first) return 0;

      const style = getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap) || 0;

      return first.getBoundingClientRect().width + gap;
    }

    function goTo(i, animate = true) {
      track.style.transition = animate ? '' : 'none';
      track.style.transform = `translateX(-${cardStep() * i}px)`;

      if (!animate) {
        void track.offsetHeight;
        track.style.transition = '';
      }
    }

    function stop() {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    }

    function next() {
      index++;
      goTo(index, true);

      if (index >= total) {
        window.setTimeout(() => {
          index = 0;
          goTo(index, false);
        }, 650);
      }
    }

    function start() {
      stop();
      timer = window.setInterval(next, intervalMs);
    }

    start();

    track.addEventListener('mouseenter', stop);
    track.addEventListener('mouseleave', start);

    window.addEventListener('resize', () => goTo(index, false));

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else start();
    });
  }

  // RENDER HOMEPAGE FEATURED PRODUCTS
  function renderFeatured() {
    const grid1 = document.getElementById('featured-grid-1');
    const grid2 = document.getElementById('featured-grid-2');

    if (!grid1 || !grid2) return;

    const grid1Ids = [
      'd1407', 'd1420', 'd75001', 'd1401',
      'd1422', 'd1409', 's1101', 'd1406'
    ];

    const grid2Ids = [
      'd1404', 'd1405', '0021', 'e0103',
      's1253', 's1254', 'n1542', 'n1502'
    ];

    const featuredGrid1 = grid1Ids
      .map(id => PRODUCTS.find(p => p.id === id))
      .filter(Boolean);

    const featuredGrid2 = grid2Ids
      .map(id => PRODUCTS.find(p => p.id === id))
      .filter(Boolean);

    grid1.innerHTML = featuredGrid1.map(featuredCardHtml).join('');
    grid2.innerHTML = featuredGrid2.map(featuredCardHtml).join('');

    [grid1, grid2].forEach(gridEl => {
      requestAnimationFrame(() => {
        gridEl.querySelectorAll('.reveal').forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.08}s`;

          requestAnimationFrame(() => {
            el.classList.add('revealed');
          });
        });
      });
    });

    initFeaturedCarousel('featured-grid-1', 3200);
    initFeaturedCarousel('featured-grid-2', 3800);
  }

  // URL PARAMETERS
  function readUrlParams() {
    const params = new URLSearchParams(window.location.search);

    activeCategory = params.get('cat') || null;
    activeSubcat = params.get('subcat') || null;

    const query = params.get('q');
    if (query) searchQuery = query.trim();
  }

  // INITIALIZATION
  document.addEventListener('DOMContentLoaded', () => {
    grid = document.getElementById('catalog-grid');
    desktopCount = document.getElementById('catalog-count');
    mobileCount = document.getElementById('mobile-count');
    searchEl = document.getElementById('catalog-search');
    clearBtn = document.getElementById('clear-search');
    sidebar = document.getElementById('catalog-sidebar');
    overlay = document.getElementById('sidebar-overlay');
    mobileToggle = document.getElementById('mobile-filter-btn');

    renderFeatured();

    if (!grid) return;

    readUrlParams();

    if (searchEl && searchQuery) {
      searchEl.value = searchQuery;
      if (clearBtn) clearBtn.classList.add('visible');
    }

    renderSidebar();
    renderGrid();
    renderTrail();
    syncMobileLabel();

    // SEARCH
    if (searchEl) {
      searchEl.addEventListener('input', e => {
        searchQuery = e.target.value.trim();

        if (clearBtn) {
          clearBtn.classList.toggle('visible', searchQuery.length > 0);
        }

        renderGrid();
      });
    }

    // CLEAR SEARCH
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchEl) searchEl.value = '';
        searchQuery = '';
        clearBtn.classList.remove('visible');
        renderGrid();
      });
    }

    // MOBILE SIDEBAR TOGGLE
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        sidebarOpen ? closeSidebar() : openSidebar();
      });
    }

    const closeBtn = document.getElementById('sidebar-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);

    if (overlay) overlay.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && sidebarOpen) closeSidebar();
    });
  });

  // LANGUAGE CHANGE EVENT
  document.addEventListener('langChanged', () => {
    if (typeof syncProductAliases === 'function') {
      syncProductAliases();
    }

    renderSidebar();

    if (grid) {
      renderGrid();
      renderTrail();
      syncMobileLabel();
    }

    renderFeatured();
  });

})();


// ADD TO CART BUTTON

// ADD TO CART BUTTON
function addToCartButton(p) {
  const isEnglish = document.documentElement.lang === 'en';

  const label = isEnglish
    ? 'Add to Inquiry'
    : 'Tambah ke Keranjang';

  const ariaLabel = isEnglish
    ? `Add ${p.name} to inquiry cart`
    : `Tambah ${p.name} ke keranjang`;

  return `
    <button
      type="button"
      class="btc-add-cart-btn"
      data-cart-add="${p.id}"
      aria-label="${ariaLabel}">

      <svg width="17" height="17" fill="none"
        stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24">
        <path d="M3 3h2l2.4 12.4a2 2 0 002 1.6h8.8a2 2 0 002-1.6L22 8H6"/>
        <circle cx="10" cy="21" r="1"/>
        <circle cx="19" cy="21" r="1"/>
      </svg>

      <span>${label}</span>
    </button>
  `;
}
