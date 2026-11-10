
/* ============================================================
   BTC SHOPPING CART + WHATSAPP INQUIRY
   PT Borneo Timur Cemerlang
   Storage: localStorage
   Checkout: WhatsApp RFQ
============================================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'btc_cart_v1';

  const ADMINS = [
    {
      name: 'Jhony Chua',
      number: '6281268577849'
    },
    {
      name: 'John',
      number: '628117753350'
    }
  ];

  let cart = loadCart();

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  function loadCart() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

      if (!saved || typeof saved !== 'object') return {};

      const clean = {};

      Object.entries(saved).forEach(([id, qty]) => {
        const quantity = Number(qty);

        if (id && Number.isInteger(quantity) && quantity > 0) {
          clean[String(id)] = quantity;
        }
      });

      return clean;
    } catch (error) {
      return {};
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.warn('BTC Cart: gagal menyimpan keranjang.', error);
    }
  }

  function getProducts() {
    return Array.isArray(window.PRODUCTS) ? window.PRODUCTS :
      (typeof PRODUCTS !== 'undefined' ? PRODUCTS : []);
  }

  function getProduct(id) {
    return getProducts().find(p => String(p.id) === String(id));
  }

  function getCartItems() {
    return Object.entries(cart)
      .map(([id, qty]) => {
        const product = getProduct(id);

        return product ? {
          product,
          id,
          qty
        } : null;
      })
      .filter(Boolean);
  }

  function getTotalQuantity() {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  }

  function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    })[char]);
  }

  function getLanguage() {
    return document.documentElement.lang.toLowerCase().startsWith('en')
      ? 'en'
      : 'id';
  }

  function text(id, en) {
    return getLanguage() === 'en' ? en : id;
  }

  // ----------------------------------------------------------
  // CART UI
  // ----------------------------------------------------------

  function injectCartUI() {
    if ($('#btc-cart-root')) return;

    const root = document.createElement('div');
    root.id = 'btc-cart-root';

    root.innerHTML = `
      <div class="btc-cart-overlay" id="btc-cart-overlay"></div>

      <aside
        class="btc-cart-drawer"
        id="btc-cart-drawer"
        aria-label="Shopping cart"
        aria-hidden="true">

        <div class="btc-cart-header">
          <div>
            <span class="btc-cart-eyebrow">BTC SHOPPING</span>
            <h2>${text('Keranjang Inquiry', 'Inquiry Cart')}</h2>
            <p id="btc-cart-subtitle">0 produk dipilih</p>
          </div>

          <button
            type="button"
            class="btc-cart-close"
            id="btc-cart-close"
            aria-label="Tutup keranjang">
            &times;
          </button>
        </div>

        <div class="btc-cart-content">
          <div id="btc-cart-items"></div>

          <div class="btc-cart-empty" id="btc-cart-empty">
            <div class="btc-cart-empty-icon">
              <svg width="34" height="34" fill="none"
                stroke="currentColor" stroke-width="1.5"
                viewBox="0 0 24 24">
                <path d="M3 3h2l2.4 12.4a2 2 0 002 1.6h8.8a2 2 0 002-1.6L22 8H6"/>
                <circle cx="10" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
              </svg>
            </div>
            <h3>${text('Keranjang masih kosong', 'Your cart is empty')}</h3>
            <p>${text(
              'Tambahkan produk dari katalog untuk memulai inquiry.',
              'Add products from the catalog to start an inquiry.'
            )}</p>
            <button type="button" id="btc-cart-browse">
              ${text('Jelajahi Katalog', 'Browse Catalog')}
            </button>
          </div>
        </div>

        <div class="btc-cart-footer" id="btc-cart-footer">
          <div class="btc-cart-footer-info">
            <span>${text('Total item', 'Total items')}</span>
            <strong id="btc-cart-total">0</strong>
          </div>

          <p>
            ${text(
              'Harga dan ketersediaan produk akan dikonfirmasi oleh tim BTC.',
              'Product prices and availability will be confirmed by BTC.'
            )}
          </p>

          <button
            type="button"
            class="btc-cart-checkout"
            id="btc-cart-checkout">
            <svg width="18" height="18" fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
            </svg>
            ${text('Lanjutkan Inquiry', 'Continue Inquiry')}
          </button>
        </div>
      </aside>

      <div class="btc-checkout-overlay" id="btc-checkout-overlay">
        <div class="btc-checkout-modal" role="dialog" aria-modal="true"
          aria-labelledby="btc-checkout-title">

          <div class="btc-checkout-header">
            <div>
              <span class="btc-cart-eyebrow">REQUEST FOR QUOTATION</span>
              <h2 id="btc-checkout-title">
                ${text('Informasi Inquiry', 'Inquiry Information')}
              </h2>
            </div>
            <button type="button" id="btc-checkout-close"
              class="btc-cart-close" aria-label="Tutup">&times;</button>
          </div>

          <form id="btc-checkout-form">
            <label>
              ${text('Nama Lengkap', 'Full Name')} *
              <input type="text" name="customerName"
                placeholder="${text('Masukkan nama Anda', 'Enter your name')}"
                required maxlength="100">
            </label>

            <label>
              ${text('Nama Perusahaan', 'Company Name')}
              <input type="text" name="company"
                placeholder="${text('Nama perusahaan (opsional)', 'Company name (optional)')}"
                maxlength="120">
            </label>

            <label>
              ${text('Lokasi', 'Location')} *
              <input type="text" name="location"
                placeholder="${text('Kota / negara', 'City / country')}"
                required maxlength="120">
            </label>

            <label>
              ${text('Catatan Tambahan', 'Additional Notes')}
              <textarea name="notes" rows="3"
                placeholder="${text(
                  'Tuliskan kebutuhan atau spesifikasi tambahan...',
                  'Write any additional requirements or specifications...'
                )}"
                maxlength="1000"></textarea>
            </label>

            <label>
              ${text('Kirim Inquiry Kepada', 'Send Inquiry To')} *
              <select name="admin" required>
                ${ADMINS.map((admin, index) => `
                  <option value="${index}">
                    ${escapeHTML(admin.name)}
                  </option>
                `).join('')}
              </select>
            </label>

            <div class="btc-checkout-note">
              ${text(
                'Pesan akan disiapkan di WhatsApp. Anda tetap perlu menekan tombol Send untuk mengirimkannya.',
                'Your message will be prepared in WhatsApp. You still need to press Send to submit it.'
              )}
            </div>

            <button type="submit" class="btc-cart-checkout">
              ${text('Kirim melalui WhatsApp', 'Continue to WhatsApp')}
            </button>
          </form>
        </div>
      </div>
    `;

    document.body.appendChild(root);
  }

  // ----------------------------------------------------------
  // RENDER
  // ----------------------------------------------------------

  function updateBadge() {
    const count = getTotalQuantity();
    const badge = $('#btc-cart-count');

    if (badge) {
      badge.textContent = count > 99 ? '99+' : count;
      badge.classList.toggle('is-visible', count > 0);
    }

    const toggle = $('#btc-cart-toggle');

    if (toggle) {
      toggle.setAttribute('aria-label',
        `${text('Keranjang', 'Cart')}: ${count} ${text('item', 'items')}`
      );
    }
  }

  function renderCart() {
    const container = $('#btc-cart-items');
    const empty = $('#btc-cart-empty');
    const footer = $('#btc-cart-footer');
    const subtitle = $('#btc-cart-subtitle');
    const total = $('#btc-cart-total');

    if (!container) return;

    const items = getCartItems();
    const quantity = getTotalQuantity();

    updateBadge();

    if (subtitle) {
      subtitle.textContent = `${quantity} ${text('item dipilih', 'items selected')}`;
    }

    if (total) total.textContent = quantity;

    if (!items.length) {
      container.innerHTML = '';
      empty.style.display = 'flex';
      footer.style.display = 'none';
      return;
    }

    empty.style.display = 'none';
    footer.style.display = 'block';

    container.innerHTML = items.map(({ product, id, qty }) => `
      <div class="btc-cart-item" data-cart-item="${escapeHTML(id)}">

        <div class="btc-cart-item-image">
          <img
            src="${escapeHTML(product.img || 'assets/images/placeholder.png')}"
            alt="${escapeHTML(product.name)}"
            onerror="this.style.display='none'">
        </div>

        <div class="btc-cart-item-info">
          <span class="btc-cart-item-brand">
            ${escapeHTML(product.brand || 'BTC Product')}
          </span>

          <h3>${escapeHTML(product.name)}</h3>

          <span class="btc-cart-item-unit">
            ${escapeHTML(product.unit || 'Unit')}
          </span>

          <div class="btc-cart-quantity">
            <button type="button" data-cart-minus="${escapeHTML(id)}"
              aria-label="Kurangi jumlah">−</button>

            <span>${qty}</span>

            <button type="button" data-cart-plus="${escapeHTML(id)}"
              aria-label="Tambah jumlah">+</button>
          </div>
        </div>

        <button type="button"
          class="btc-cart-remove"
          data-cart-remove="${escapeHTML(id)}"
          aria-label="Hapus produk">
          &times;
        </button>
      </div>
    `).join('');
  }

  // ----------------------------------------------------------
  // CART ACTIONS
  // ----------------------------------------------------------

  function add(id) {
    const product = getProduct(id);

    if (!product) {
      console.warn('BTC Cart: produk tidak ditemukan:', id);
      return;
    }

    const key = String(id);
    cart[key] = (cart[key] || 0) + 1;

    saveCart();
    renderCart();
    openCart();

    const button = document.querySelector(
      `[data-cart-add="${CSS.escape(key)}"]`
    );

    if (button) {
      const label = button.querySelector('span');

      if (label) {
        const original = label.textContent;
        label.textContent = text('Ditambahkan!', 'Added!');

        window.setTimeout(() => {
          label.textContent = original;
        }, 1200);
      }
    }
  }

  function changeQuantity(id, amount) {
    const key = String(id);
    if (!cart[key]) return;

    cart[key] += amount;

    if (cart[key] <= 0) {
      delete cart[key];
    }

    saveCart();
    renderCart();
  }

  function remove(id) {
    delete cart[String(id)];
    saveCart();
    renderCart();
  }

  function clear() {
    cart = {};
    saveCart();
    renderCart();
  }

  // ----------------------------------------------------------
  // OPEN / CLOSE DRAWER
  // ----------------------------------------------------------

  function openCart() {
    const drawer = $('#btc-cart-drawer');
    const overlay = $('#btc-cart-overlay');

    if (!drawer || !overlay) return;

    renderCart();

    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('btc-cart-lock');
  }

  function closeCart() {
    const drawer = $('#btc-cart-drawer');
    const overlay = $('#btc-cart-overlay');

    if (!drawer || !overlay) return;

    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('btc-cart-lock');
  }

  // ----------------------------------------------------------
  // CHECKOUT / WHATSAPP
  // ----------------------------------------------------------

  function openCheckout() {
    if (!getCartItems().length) return;

    closeCart();

    const overlay = $('#btc-checkout-overlay');
    if (overlay) overlay.classList.add('is-open');
  }

  function closeCheckout() {
    const overlay = $('#btc-checkout-overlay');
    if (overlay) overlay.classList.remove('is-open');
  }

  function buildWhatsAppMessage(data) {
    const items = getCartItems();

    const english = getLanguage() === 'en';

    const lines = items.map(({ product, qty }) =>
      `• ${product.name} — ${qty} ${product.unit || 'unit'}`
    );

    const message = [
      english
        ? 'Hello PT Borneo Timur Cemerlang, I would like to request a quotation for the following products:'
        : 'Halo PT Borneo Timur Cemerlang, saya ingin mengajukan inquiry untuk produk berikut:',
      '',
      ...lines,
      '',
      `${english ? 'Name' : 'Nama'}: ${data.customerName}`,
      `${english ? 'Company' : 'Perusahaan'}: ${data.company || '-'}`,
      `${english ? 'Location' : 'Lokasi'}: ${data.location}`,
      `${english ? 'Additional Notes' : 'Catatan'}: ${data.notes || '-'}`,
      '',
      english
        ? 'Please provide product availability, specifications, and quotation. Thank you.'
        : 'Mohon informasikan ketersediaan produk, spesifikasi, dan penawaran harga. Terima kasih.',
      '',
      'PT Borneo Timur Cemerlang'
    ];

    return message.join('\n');
  }

  function submitInquiry(event) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);

    const data = {
      customerName: String(formData.get('customerName') || '').trim(),
      company: String(formData.get('company') || '').trim(),
      location: String(formData.get('location') || '').trim(),
      notes: String(formData.get('notes') || '').trim()
    };

    const adminIndex = Number(formData.get('admin'));
    const admin = ADMINS[adminIndex];

    if (!admin || !getCartItems().length) return;

    const message = buildWhatsAppMessage(data);
    const url = `https://wa.me/${admin.number}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // ----------------------------------------------------------
  // EVENT LISTENERS
  // ----------------------------------------------------------

  function bindEvents() {
    document.addEventListener('click', event => {
      const addButton = event.target.closest('[data-cart-add]');

      if (addButton) {
        event.preventDefault();
        add(addButton.dataset.cartAdd);
        return;
      }

      if (event.target.closest('#btc-cart-toggle')) {
        openCart();
        return;
      }

      if (event.target.closest('#btc-cart-close') ||
          event.target.closest('#btc-cart-overlay')) {
        closeCart();
        return;
      }

      if (event.target.closest('#btc-cart-browse')) {
        closeCart();

        const catalog = document.getElementById('catalog-grid');

        if (catalog) {
          catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.location.href = 'catalog.html';
        }

        return;
      }

      if (event.target.closest('#btc-cart-checkout')) {
        openCheckout();
        return;
      }

      if (event.target.closest('#btc-checkout-close') ||
          event.target.id === 'btc-checkout-overlay') {
        closeCheckout();
        return;
      }

      const plus = event.target.closest('[data-cart-plus]');
      if (plus) {
        changeQuantity(plus.dataset.cartPlus, 1);
        return;
      }

      const minus = event.target.closest('[data-cart-minus]');
      if (minus) {
        changeQuantity(minus.dataset.cartMinus, -1);
        return;
      }

      const removeButton = event.target.closest('[data-cart-remove]');
      if (removeButton) {
        remove(removeButton.dataset.cartRemove);
      }
    });

    const form = $('#btc-checkout-form');

    if (form) {
      form.addEventListener('submit', submitInquiry);
    }

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeCart();
        closeCheckout();
      }
    });

    document.addEventListener('langChanged', renderCart);
  }

  // ----------------------------------------------------------
  // INIT
  // ----------------------------------------------------------

  document.addEventListener('DOMContentLoaded', () => {
    injectCartUI();
    bindEvents();
    renderCart();
  });

  // Public API
  window.BTCCart = {
    add,
    remove,
    clear,
    open: openCart,
    close: closeCart,
    render: renderCart,
    getItems: getCartItems
  };

})();
