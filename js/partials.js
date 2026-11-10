// ===========================
//  KARYA TIMUR CEMERLANG - Shared HTML Partials
// ===========================


// ===========================
//  BORNEO TIMUR CEMERLANG - Shared HTML Partials
// ===========================

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <div class="container">
    <div class="nav-inner">
      <!-- LOGO -->
      <a href="index.html" class="nav-logo" aria-label="PT BORNEO TIMUR CEMERLANG">
        <div class="nav-logo__mark">
          <img src="assets/icons/icon_btc.png" alt="Borneo Timur Cemerlang Logo">
        </div>

        <div class="nav-logo__text">
          <span class="nav-logo__name">PT BORNEO TIMUR CEMERLANG</span>
          <span class="nav-logo__sub">MARINE SUPPLIER</span>
        </div>
      </a>

      <!-- DESKTOP LINKS -->
      <ul class="nav-links" role="list">
        <li><a href="index.html" class="nav-link" data-i18n="nav_home">Beranda</a></li>
        <li><a href="catalog.html" class="nav-link" data-i18n="nav_catalog">Katalog</a></li>
        <li><a href="about.html" class="nav-link" data-i18n="nav_about">About</a></li>
        <li class="nav-dropdown">
          <a href="blog.html" class="nav-link nav-dropdown__trigger" data-i18n="nav_blog">Blog
            <svg class="nav-dropdown__chevron" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <ul class="nav-dropdown__menu" role="list">
            <li>
              <a href="blog.html" class="nav-dropdown__item">
                <span class="nav-dropdown__item-icon">
                  <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </span>
                <span class="nav-dropdown__item-text">
                  <strong>Semua Artikel</strong>
                  <small>Lihat semua tulisan blog</small>
                </span>
              </a>
            </li>
            <li>
              <a href="article.html" class="nav-dropdown__item">
                <span class="nav-dropdown__item-icon">
                  <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
                </span>
                <span class="nav-dropdown__item-text">
                  <strong>Baca Artikel</strong>
                  <small>Artikel detail & panduan produk</small>
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li><a href="contact.html" class="nav-link" data-i18n="nav_contact">Hubungi Kami</a></li>
      </ul>

      <!-- ACTIONS -->
      <div class="nav-actions">
        <!-- Search -->
        <div class="search-bar" style="width:200px;display:none;transition:all var(--dur-mid) var(--ease-out);" id="desktop-search">
          <svg class="search-bar__icon" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="search" id="nav-search-input" data-i18n-placeholder="nav_search_placeholder" autocomplete="off">
        </div>

        <!-- SHOPPING CART -->
<button
  type="button"
  class="btc-nav-cart"
  id="btc-cart-toggle"
  aria-label="Buka keranjang"
  title="Shopping Cart">

  <svg width="21" height="21"
    fill="none" stroke="currentColor"
    stroke-width="1.8" viewBox="0 0 24 24">
    <path d="M3 3h2l2.4 12.4a2 2 0 002 1.6h8.8a2 2 0 002-1.6L22 8H6"/>
    <circle cx="10" cy="21" r="1"/>
    <circle cx="19" cy="21" r="1"/>
  </svg>

  <span class="btc-cart-count" id="btc-cart-count">0</span>
</button>

        <!-- Lang Toggle -->
        <div class="lang-toggle" role="group" aria-label="Language switcher">
          <button class="lang-btn" data-lang="id">ID</button>
          <button class="lang-btn" data-lang="en">EN</button>
        </div>

        <!-- Search icon button -->
        <button type="button" id="search-toggle-btn" aria-label="Search" aria-expanded="false" aria-controls="desktop-search">
          <svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>

        <!-- CTA -->
        <a href="contact.html" class="btn btn-primary btn-sm nav-cta" data-i18n="nav_cta"></a>

        <!-- Search icon button (mobile only) -->
        <button type="button" id="mobile-search-toggle" aria-label="Search" aria-expanded="false" aria-controls="mobile-search-bar">
          <svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>

        <!-- Hamburger -->
        <button type="button" class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </div>
</nav>

<!-- INDEPENDENT MOBILE SEARCH PANEL -->
<div class="mobile-search" id="mobile-search-bar" aria-hidden="true">
  <div class="search-bar">
    <svg class="search-bar__icon" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
    <input type="search" id="mobile-search-input" data-i18n-placeholder="nav_search_placeholder" autocomplete="off">
  </div>
</div>

<!-- MOBILE MENU -->
<div class="mobile-menu" id="mobile-menu" role="dialog" aria-label="Mobile navigation" aria-hidden="true">
  <a href="index.html" class="mobile-nav-link" data-i18n="nav_home">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
    Beranda
  </a>
  <a href="catalog.html" class="mobile-nav-link" data-i18n="nav_catalog">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    Katalog
  </a>
  <a href="about.html" class="mobile-nav-link" data-i18n="nav_about">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
    Tentang Kami
  </a>
  <div class="mobile-nav-group">
    <button class="mobile-nav-link mobile-nav-group__toggle" id="mobile-blog-toggle" aria-expanded="false">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      <span data-i18n="nav_blog">Blog</span>
      <svg class="mobile-nav-group__chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" style="margin-left:auto;transition:transform .25s;"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div class="mobile-nav-group__sub" id="mobile-blog-sub" style="display:none;padding-left:16px;">
      <a href="blog.html" class="mobile-nav-link mobile-nav-link--sub">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        Semua Artikel
      </a>
      <a href="article.html" class="mobile-nav-link mobile-nav-link--sub">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        Baca Artikel
      </a>
    </div>
  </div>
  <a href="contact.html" class="mobile-nav-link" data-i18n="nav_contact">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
    Hubungi Kami
  </a>

  <div class="mobile-menu__bottom">
    <button id="mobile-wa-btn" class="btn btn-wa wa-modal-trigger" style="width:100%;justify-content:center;border:none;cursor:pointer;">
      <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      WhatsApp
    </button>
    <div class="lang-toggle" style="justify-content:center;">
      <button class="lang-btn" data-lang="id">ID</button>
      <button class="lang-btn" data-lang="en">EN</button>
    </div>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <!-- Brand -->
      <div>
        <a href="index.html" class="nav-logo">
          <div class="nav-logo__mark">
            <img src="assets/icons/icon_btc.png" alt="Borneo Timur Cemerlang Logo">
          </div>
          <div class="nav-logo__text">
            <span class="nav-logo__name">PT Borneo Timur Cemerlang</span>
            <span class="nav-logo__sub">Marine Supplier</span>
          </div>
        </a>
        <p class="footer-brand__desc" data-i18n="footer_desc"></p>
        <div class="footer-socials">
          <a href="#" class="social-btn" aria-label="Instagram">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" class="social-btn" aria-label="Facebook">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" class="social-btn" aria-label="WhatsApp">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="#" class="social-btn" aria-label="YouTube">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="footer-col__title" data-i18n="footer_links"></h4>
        <ul class="footer-links">
          <li><a href="index.html" data-i18n="nav_home"></a></li>
          <li><a href="catalog.html" data-i18n="nav_catalog"></a></li>
          <li><a href="about.html" data-i18n="nav_about"></a></li>
          <li><a href="blog.html" data-i18n="nav_blog"></a></li>
          <li><a href="contact.html" data-i18n="nav_contact"></a></li>
        </ul>
      </div>

      <!-- Categories -->
      <div>
        <h4 class="footer-col__title" data-i18n="footer_cats"></h4>
        <ul class="footer-links">
          <li><a href="catalog.html?cat=safety" data-i18n="cat_safety"></a></li>
          <li><a href="catalog.html?cat=navigation" data-i18n="cat_navigation"></a></li>
          <li><a href="catalog.html?cat=engine" data-i18n="cat_engine"></a></li>
          <li><a href="catalog.html?cat=deck" data-i18n="cat_deck"></a></li>
          <li><a href="catalog.html?cat=communication" data-i18n="cat_comm"></a></li>
          <li><a href="catalog.html?cat=tools" data-i18n="cat_tools"></a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="footer-col__title" data-i18n="footer_contact"></h4>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Ruko Palaran City, Block A No. 17, 18 &amp; 19, Simpang Pasir, Kec. Palaran,<br>Kota Samarinda, Kalimantan Timur</span>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
          <a href="tel:+6281295549800">+62 812 9554 9800</a>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:general@borneotimurcemerlang.co.id">general@borneotimurcemerlang.co.id</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p data-i18n="footer_copy"></p>
      <div class="footer-cert">
        <span class="cert-badge"></span>
        <span class="cert-badge"></span>
        <span class="cert-badge"></span>
      </div>
    </div>
  </div>
</footer>
`;


const WA_SVG_PATH = `M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z`;

const WA_FLOAT_HTML = `
<!-- WA POPUP PANEL -->
<div class="wa-popup" id="wa-popup" role="dialog" aria-label="Hubungi kami via WhatsApp" aria-hidden="true">
  <div class="wa-popup__header">
    <div class="wa-popup__header-icon">
      <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="${WA_SVG_PATH}"/></svg>
    </div>
    <div class="wa-popup__header-text">
      <strong>PT Borneo Timur Cemerlang</strong>
      <span>Silakan pilih kontak kami</span>
    </div>
    <button class="wa-popup__close" id="wa-popup-close" aria-label="Tutup">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </div>
  <div class="wa-popup__body">
    <p class="wa-popup__label">Hubungi kami melalui WhatsApp resmi:</p>
    <a class="wa-popup__contact"
       href="https://wa.me/6281295549800?text=Halo%2C+saya+dari+website+PT+BorneoTimurCemerlang.%0A%0ANama+%3A%0APerusahaan+%3A%0AKebutuhan+%3A%0A%0ATerima+kasih."
       target="_blank" rel="noopener">
      <div class="wa-popup__avatar">
        <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="${WA_SVG_PATH}"/></svg>
      </div>
      <div class="wa-popup__contact-text">
        <strong>WhatsApp Resmi BTC</strong>
        <span>+62 812-9554-9800</span>
      </div>
      <svg class="wa-popup__arrow" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
    </a>
  </div>
</div>

<!-- WA FLOAT TRIGGER -->
<button class="wa-float" id="wa-float-btn" aria-label="Hubungi kami via WhatsApp" aria-expanded="false">
  <svg class="wa-float__icon-wa" width="26" height="26" fill="white" viewBox="0 0 24 24"><path d="${WA_SVG_PATH}"/></svg>
  <svg class="wa-float__icon-close" width="22" height="22" fill="none" stroke="white" stroke-width="2.5" viewBox="0 0 24 24" style="display:none;">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
</button>

<button class="back-to-top" aria-label="Back to top">
  <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
    <polyline points="18 15 12 9 6 15"/>
  </svg>
</button>

<style>
/* === WA POPUP === */
.wa-popup {
  position: fixed;
  bottom: 90px;
  right: 20px;
  z-index: 1002;
  width: 300px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(10,22,40,0.22), 0 2px 8px rgba(10,22,40,0.10);
  overflow: hidden;
  transform: scale(0.85) translateY(16px);
  transform-origin: bottom right;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s cubic-bezier(0.22,1,0.36,1), transform 0.25s cubic-bezier(0.22,1,0.36,1);
}
.wa-popup.open {
  opacity: 1;
  pointer-events: all;
  transform: scale(1) translateY(0);
}
.wa-popup__header {
  background: #25D366;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.wa-popup__header-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.wa-popup__header-text {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}
.wa-popup__header-text strong {
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.wa-popup__header-text span {
  color: rgba(255,255,255,0.8);
  font-size: 0.72rem;
  margin-top: 1px;
}
.wa-popup__close {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  transition: background 0.15s;
}
.wa-popup__close:hover { background: rgba(255,255,255,0.3); }
.wa-popup__body {
  padding: 14px 16px 16px;
  background: #f0f2f5;
}
.wa-popup__label {
  font-size: 0.72rem;
  color: #667;
  margin-bottom: 10px;
  font-weight: 500;
}
.wa-popup__contact {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border-radius: 12px;
  padding: 10px 12px;
  margin-bottom: 8px;
  text-decoration: none;
  border: 1.5px solid transparent;
  transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
  cursor: pointer;
}
.wa-popup__contact:last-child { margin-bottom: 0; }
.wa-popup__contact:hover {
  border-color: #25D366;
  box-shadow: 0 2px 12px rgba(37,211,102,0.15);
  transform: translateY(-1px);
}
.wa-popup__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.wa-popup__contact-text {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}
.wa-popup__contact-text strong {
  font-size: 0.8rem;
  font-weight: 700;
  color: #111b21;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.wa-popup__contact-text span {
  font-size: 0.72rem;
  color: #667;
  margin-top: 1px;
}
.wa-popup__arrow { color: #aaa; flex-shrink: 0; }

/* Override wa-float to be a button */
.wa-float {
  border: none;
  cursor: pointer;
}
.wa-float.popup-open {
  background: #128c7e;
  box-shadow: 0 8px 24px rgba(18,140,126,0.45);
}
</style>
`;

// WA Popup toggle logic — runs after DOM injection
function initWaPopup() {
  const btn = document.getElementById('wa-float-btn');
  const popup = document.getElementById('wa-popup');
  const closeBtn = document.getElementById('wa-popup-close');
  if (!btn || !popup) return;

  const iconWa = btn.querySelector('.wa-float__icon-wa');
  const iconClose = btn.querySelector('.wa-float__icon-close');

  function openPopup() {
    popup.classList.add('open');
    popup.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-expanded', 'true');
    btn.classList.add('popup-open');
    iconWa.style.display = 'none';
    iconClose.style.display = '';
  }

  function closePopup() {
    popup.classList.remove('open');
    popup.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.classList.remove('popup-open');
    iconWa.style.display = '';
    iconClose.style.display = 'none';
  }

  btn.addEventListener('click', () => {
    popup.classList.contains('open') ? closePopup() : openPopup();
  });

  if (closeBtn) closeBtn.addEventListener('click', closePopup);

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !popup.contains(e.target)) closePopup();
  });

  // Handle wa-modal-trigger clicks (mobile menu WA button & CTA buttons)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.wa-modal-trigger')) return;

    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');

    if (mobileMenu && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      if (hamburger) {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
      document.body.classList.remove('mobile-nav-open');
      document.body.style.overflow = '';
    }

    const modal = document.getElementById('wa-admin-modal');
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  });
}

// Mobile Blog accordion toggle
function initMobileBlogAccordion() {
  const toggle = document.getElementById('mobile-blog-toggle');
  const sub = document.getElementById('mobile-blog-sub');
  if (!toggle || !sub) return;

  function openSub() {
    sub.style.display = '';
    toggle.setAttribute('aria-expanded', 'true');
    const chevron = toggle.querySelector('.mobile-nav-group__chevron');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  }

  function closeSub() {
    sub.style.display = 'none';
    toggle.setAttribute('aria-expanded', 'false');
    const chevron = toggle.querySelector('.mobile-nav-group__chevron');
    if (chevron) chevron.style.transform = '';
  }

  const page = window.location.pathname.split('/').pop() || '';

  if (page === 'blog.html' || page === 'article.html') {
    openSub();
  } else {
    closeSub();
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeSub() : openSub();
  });
}

// ======================================================
// BTC NAVIGATION CONTROLS
// Hamburger and mobile search are independent controls.
// ======================================================

function initMobileNavigation() {
  // Delegated listener: reliable even though the navbar is injected dynamically.
  // Install only once, even if injectPartials() is called again.
  if (document.documentElement.dataset.mobileNavigationInitialized === 'true') return;
  document.documentElement.dataset.mobileNavigationInitialized = 'true';

  const getElements = () => ({
    hamburger: document.getElementById('hamburger'),
    mobileMenu: document.getElementById('mobile-menu'),
    searchToggle: document.getElementById('mobile-search-toggle'),
    searchPanel: document.getElementById('mobile-search-bar'),
    searchInput: document.getElementById('mobile-search-input')
  });

  function closeMenu() {
    const { hamburger, mobileMenu } = getElements();
    if (mobileMenu) {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
    if (hamburger) {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('mobile-nav-open');
    document.body.style.overflow = '';
  }

  function openMenu() {
    const { hamburger, mobileMenu } = getElements();
    if (!hamburger || !mobileMenu) return;
    closeSearch();
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-nav-open');
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    const { searchToggle, searchPanel } = getElements();
    if (searchPanel) {
      searchPanel.classList.remove('show');
      searchPanel.setAttribute('aria-hidden', 'true');
    }
    if (searchToggle) searchToggle.setAttribute('aria-expanded', 'false');
  }

  function openSearch() {
    const { searchToggle, searchPanel, searchInput } = getElements();
    if (!searchToggle || !searchPanel) return;
    closeMenu();
    searchPanel.classList.add('show');
    searchPanel.setAttribute('aria-hidden', 'false');
    searchToggle.setAttribute('aria-expanded', 'true');
    window.setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 50);
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target || typeof target.closest !== 'function') return;

    const { hamburger, mobileMenu, searchToggle, searchPanel } = getElements();
    const hamburgerButton = target.closest('#hamburger');
    const searchButton = target.closest('#mobile-search-toggle');

    // Handle the actual control before outside-click logic.
    if (hamburgerButton) {
      event.preventDefault();
      event.stopPropagation();
      if (mobileMenu && mobileMenu.classList.contains('open')) closeMenu();
      else openMenu();
      return;
    }

    if (searchButton) {
      event.preventDefault();
      event.stopPropagation();
      if (searchPanel && searchPanel.classList.contains('show')) closeSearch();
      else openSearch();
      return;
    }

    // Close the drawer after choosing a destination.
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      if (target.closest('#mobile-menu a')) {
        closeMenu();
        return;
      }
      if (!mobileMenu.contains(target)) closeMenu();
    }

    // Close the search popover when clicking outside it.
    if (
      searchPanel && searchPanel.classList.contains('show') &&
      !searchPanel.contains(target) &&
      !(searchToggle && searchToggle.contains(target))
    ) {
      closeSearch();
    }
  }, true);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      closeSearch();
    }
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 900px)').matches) {
      closeMenu();
      closeSearch();
    }
  }, { passive: true });
}

// Desktop search toggle
function initDesktopSearch() {
  const toggle = document.getElementById('search-toggle-btn');
  const search = document.getElementById('desktop-search');
  const input = search && search.querySelector('input');

  if (!toggle || !search || toggle.dataset.searchInitialized === 'true') return;
  toggle.dataset.searchInitialized = 'true';

  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    const isOpen = search.style.display === 'flex';
    search.style.display = isOpen ? 'none' : 'flex';
    toggle.setAttribute('aria-expanded', String(!isOpen));

    if (!isOpen && input) input.focus();
  });

  document.addEventListener('click', (event) => {
    if (!search.contains(event.target) && !toggle.contains(event.target)) {
      search.style.display = 'none';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      search.style.display = 'none';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Inject partials then immediately re-apply translations.
function injectPartials() {
  const navSlot = document.getElementById('nav-slot');
  const footerSlot = document.getElementById('footer-slot');
  const floatSlot = document.getElementById('float-slot');

  if (navSlot && !navSlot.dataset.partialsInjected) {
    navSlot.innerHTML = NAV_HTML;
    navSlot.dataset.partialsInjected = 'true';
  }

  if (footerSlot && !footerSlot.dataset.partialsInjected) {
    footerSlot.innerHTML = FOOTER_HTML;
    footerSlot.dataset.partialsInjected = 'true';
  }

  if (floatSlot && !floatSlot.dataset.partialsInjected) {
    floatSlot.innerHTML = WA_FLOAT_HTML;
    floatSlot.dataset.partialsInjected = 'true';
  }

  // Keep the existing cart relocation behavior, without duplicating listeners.
  const cartButton = document.getElementById('btc-cart-toggle');

  if (cartButton && floatSlot && !cartButton.dataset.positionInitialized) {
    const originalParent = cartButton.parentNode;
    const originalPosition = document.createComment('BTC cart position');
    originalParent.insertBefore(originalPosition, cartButton);

    function positionCart() {
      const isMobile = window.matchMedia('(max-width: 899px)').matches;

      if (isMobile) {
        if (cartButton.parentNode !== floatSlot) floatSlot.appendChild(cartButton);
        cartButton.classList.add('btc-cart-floating');
      } else {
        if (originalPosition.parentNode) {
          originalPosition.parentNode.insertBefore(cartButton, originalPosition.nextSibling);
        }
        cartButton.classList.remove('btc-cart-floating');
      }
    }

    cartButton.dataset.positionInitialized = 'true';
    positionCart();
    window.addEventListener('resize', positionCart, { passive: true });
  }

  initMobileNavigation();
  initDesktopSearch();
  initWaPopup();
  initMobileBlogAccordion();

  if (typeof applyTranslations === 'function') applyTranslations();
  if (typeof updateLangButtons === 'function') updateLangButtons();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectPartials, { once: true });
} else {
  injectPartials();
}
