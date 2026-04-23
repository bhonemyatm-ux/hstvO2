/* ============================================================
   hst.js — High Schooler's Tool (Home Page Scripts)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Hamburger Menu ───────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('active');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Swiper Banner ────────────────────── */
  if (typeof Swiper !== 'undefined' && document.querySelector('.promo-swiper')) {
    new Swiper('.promo-swiper', {
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true },
      speed: 700,
      effect: 'slide',
      pagination: { el: '.swiper-pagination', clickable: true },
      grabCursor: true,
    });
  }

  /* ── Promo Close Button ───────────────── */
  const promoX   = document.getElementById('promoX');
  const promoWrap = document.getElementById('promoWrap');

  if (promoX && promoWrap) {
    promoX.addEventListener('click', function () {
      promoWrap.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      promoWrap.style.opacity = '0';
      promoWrap.style.transform = 'translateY(-10px)';
      setTimeout(function () { promoWrap.style.display = 'none'; }, 300);
    });
  }

  /* ── Search Form ──────────────────────── */
  const searchForm  = document.getElementById('searchForm');
  const homeSearch  = document.getElementById('homeSearch');

  if (searchForm && homeSearch) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const query = homeSearch.value.trim();
      if (query) {
        window.location.href = 'uni.html?search=' + encodeURIComponent(query);
      }
    });
  }

  /* ── Filter Chips ─────────────────────── */
  document.querySelectorAll('.filter-chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      const query = chip.dataset.search || chip.textContent.trim();
      window.location.href = 'uni.html?search=' + encodeURIComponent(query);
    });
  });

  /* ── Scroll-triggered animations ─────── */
  const observerOpts = { threshold: 0.12 };
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOpts);

  document.querySelectorAll('.feature-card').forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    observer.observe(el);
  });

  document.addEventListener('animationend', function () {}, { once: true });
});

/* ── Animate on visible class ─────────────── */
document.addEventListener('DOMContentLoaded', function () {
  const style = document.createElement('style');
  style.textContent = `.feature-card.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);
});
