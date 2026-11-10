

  // ===========================
  //  ARTICLE PAGE LOGIC
  // ===========================

  function renderArticle(article) {
    // Page title
    document.title = article.title + ' – PT Borneo Timur Cemerlang';
    document.getElementById('page-title').textContent = document.title;

    // SEO: meta description, canonical, Open Graph, Twitter Card, JSON-LD
    const seoDesc = article.excerpt || article.title;
    const seoUrl  = new URL('articles/' + article.id + '/article.html', document.baseURI).href;
    const seoImg  = article.image
      ? new URL(article.image.replace(/^\.\//,''), document.baseURI).href
      : new URL('assets/icons/icon_btc.png', document.baseURI).href;

    const descTag = document.getElementById('page-description');
    if (descTag) descTag.setAttribute('content', seoDesc);

    const canonicalTag = document.getElementById('page-canonical');
    if (canonicalTag) canonicalTag.setAttribute('href', seoUrl);

    const ogTitle = document.getElementById('og-title');
    if (ogTitle) ogTitle.setAttribute('content', document.title);
    const ogDesc = document.getElementById('og-description');
    if (ogDesc) ogDesc.setAttribute('content', seoDesc);
    const ogUrl = document.getElementById('og-url');
    if (ogUrl) ogUrl.setAttribute('content', seoUrl);
    const ogImage = document.getElementById('og-image');
    if (ogImage) ogImage.setAttribute('content', seoImg);

    const twTitle = document.getElementById('twitter-title');
    if (twTitle) twTitle.setAttribute('content', document.title);
    const twDesc = document.getElementById('twitter-description');
    if (twDesc) twDesc.setAttribute('content', seoDesc);

    const jsonLd = document.getElementById('article-jsonld');
    if (jsonLd) {
      jsonLd.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': article.title,
        'description': seoDesc,
        'image': seoImg,
        'datePublished': (function(){ const m={'Januari':'01','Februari':'02','Maret':'03','April':'04','Mei':'05','Juni':'06','Juli':'07','Agustus':'08','September':'09','Oktober':'10','November':'11','Desember':'12'}; const p=String(article.date||'').split(' '); return p.length===3 ? p[2]+'-'+(m[p[1]]||'01')+'-'+String(p[0]).padStart(2,'0') : undefined; })(),
        'url': seoUrl,
        'author': { '@type': 'Organization', 'name': 'PT Borneo Timur Cemerlang' },
        'publisher': {
          '@type': 'Organization',
          'name': 'PT Borneo Timur Cemerlang',
          'logo': { '@type': 'ImageObject', 'url': new URL('assets/icons/icon_btc.png', document.baseURI).href }
        }
      });
    }

    // Hero image
    const img = document.getElementById('article-hero-img');
    img.src = article.image;
    img.alt = article.title;

    // Badge
    const badge = document.getElementById('article-badge');
    badge.textContent = article.category;
    badge.className = 'article-category-badge badge ' + article.categoryClass;

    // Title
    document.getElementById('article-title').textContent = article.title;

    // Meta
    document.getElementById('article-date').textContent = article.date;
    document.getElementById('article-read-time').textContent = article.readTime;

    // Body
    document.getElementById('article-body').innerHTML = article.body;

    // Tags
    const tagsEl = document.getElementById('article-tags');
    tagsEl.innerHTML = article.tags.map(tag =>
      `<a href="blog.html?cat=${encodeURIComponent(tag.toLowerCase())}" class="article-tag"># ${tag}</a>`
    ).join('');

    // TOC
    const tocEl = document.getElementById('toc-list');
    tocEl.innerHTML = article.toc.map(item =>
      `<a href="#${item.id}" class="toc-item">${item.text}</a>`
    ).join('');

    // Active TOC on scroll
    setupTOCHighlight(article.toc);
  }

  function renderSidebar(currentId) {
    const container = document.getElementById('sidebar-articles');
    const others = ARTICLE_INDEX.filter(a => a.id !== currentId);
    container.innerHTML = others.map(a => `
      <a href="articles/${a.id}/article.html" class="sidebar-article">
        <img src="${a.image}" alt="${a.title}" class="sidebar-article__img" loading="lazy">
        <div class="sidebar-article__info">
          <div class="sidebar-article__title">${a.title}</div>
          <div class="sidebar-article__meta">
            <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
            ${a.readTime}
          </div>
        </div>
      </a>
    `).join('');
  }

  function setupTOCHighlight(toc) {
    const tocItems = document.querySelectorAll('.toc-item');
    const headings = toc.map(item => document.getElementById(item.id)).filter(Boolean);

    function updateActive() {
      let current = '';
      headings.forEach(h => {
        if (window.scrollY >= h.offsetTop - 120) {
          current = h.id;
        }
      });
      tocItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === '#' + current);
      });
    }

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  }

  function setupReadingProgress() {
    const bar = document.getElementById('reading-bar');
    const body = document.getElementById('article-body');

    window.addEventListener('scroll', () => {
      const bodyTop = body.offsetTop;
      const bodyH = body.offsetHeight;
      const winH = window.innerHeight;
      const scrolled = window.scrollY - bodyTop + winH;
      const progress = Math.min(Math.max(scrolled / (bodyH + winH) * 100, 0), 100);
      bar.style.width = progress + '%';
    }, { passive: true });
  }

  // Boot
  document.addEventListener('DOMContentLoaded', () => {
    const article = ARTICLE;
    renderArticle(article);
    renderSidebar(article.id);
    setupReadingProgress();

    document.querySelectorAll('a[href="#"]').forEach(link => {
      link.href = window.location.pathname + window.location.search + '#';
    });

    // Smooth scroll for TOC
    document.addEventListener('click', (e) => {
      const tocLink = e.target.closest('.toc-item');
      if (tocLink) {
        e.preventDefault();
        const target = document.querySelector(tocLink.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
