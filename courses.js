/* ============================================================
   COURSES.JS — HST Courses Page Interactions & Animations
   MOBILE NAVBAR FIXED VERSION
   ============================================================ */

(function () {
  'use strict';

  /* ── Scroll-triggered animations ─────────────────────────── */
  function initScrollAnimations() {
    var elements = document.querySelectorAll('[data-animate]');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = parseInt(el.getAttribute('data-delay') || '0', 10);
          setTimeout(function () {
            el.classList.add('visible');
          }, delay);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── FIXED Hamburger menu ─────────────────────────────────── */
  function initHamburger() {
    var btn = document.querySelector('.hamburger');
    var menu = document.querySelector('.nav-links');
    if (!btn || !menu) return;

    // Clear any existing listeners to prevent duplicates
    btn.replaceWith(btn.cloneNode(true));
    btn = document.querySelector('.hamburger'); // Re-query fresh element

    btn.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent outside click closing
      var open = menu.classList.toggle('active');
      btn.classList.toggle('active', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('active');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    // Outside click handler
    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Smooth scroll for anchor links ──────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href').slice(1);
        var target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        var navH = document.querySelector('.navbar');
        var offset = navH ? navH.offsetHeight + 16 : 80;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ── Sticky navbar shadow on scroll ──────────────────────── */
  function initNavbarScroll() {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.10)';
      } else {
        navbar.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
      }
    }, { passive: true });
  }

  /* ── Course card hover: subtle left-border accent ─────────── */
  function initCardAccents() {
    document.querySelectorAll('.course-card').forEach(function (card) {
      card.addEventListener('mouseenter', function () {
        card.style.borderColor = '#bfdbfe';
      });
      card.addEventListener('mouseleave', function () {
        card.style.borderColor = '';
      });
    });
  }

  /* ── Enroll button click ripple effect ────────────────────── */
  function initRipple() {
    document.querySelectorAll('.enroll-btn, .enroll-btn-lg, .btn-primary').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        var rect = btn.getBoundingClientRect();
        var ripple = document.createElement('span');
        var size = Math.max(rect.width, rect.height);
        ripple.style.cssText = [
          'position:absolute',
          'border-radius:50%',
          'background:rgba(255,255,255,0.28)',
          'pointer-events:none',
          'width:' + size + 'px',
          'height:' + size + 'px',
          'left:' + (e.clientX - rect.left - size / 2) + 'px',
          'top:' + (e.clientY - rect.top - size / 2) + 'px',
          'transform:scale(0)',
          'animation:ripple-expand .55s ease-out forwards'
        ].join(';');

        if (!document.getElementById('ripple-style')) {
          var style = document.createElement('style');
          style.id = 'ripple-style';
          style.textContent = '@keyframes ripple-expand{to{transform:scale(2.5);opacity:0}}';
          document.head.appendChild(style);
        }

        btn.appendChild(ripple);
        setTimeout(function () { ripple.remove(); }, 600);
      });
    });
  }

  /* ── Back to top button ───────────────────────────────────── */
  function initBackToTop() {
    var btn = document.createElement('button');
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '↑';
    btn.style.cssText = [
      'position:fixed',
      'bottom:28px',
      'right:28px',
      'width:44px',
      'height:44px',
      'border-radius:50%',
      'background:linear-gradient(135deg,#1e3a8a,#1d4ed8)',
      'color:white',
      'border:none',
      'font-size:1.1rem',
      'font-weight:900',
      'cursor:pointer',
      'box-shadow:0 4px 16px rgba(26,86,219,0.4)',
      'opacity:0',
      'transform:translateY(10px)',
      'transition:opacity .3s ease,transform .3s ease',
      'z-index:200',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'line-height:1'
    ].join(';');

    document.body.appendChild(btn);

    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
      } else {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(10px)';
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── FIXED Init ───────────────────────────────────────────── */
  function init() {
    initScrollAnimations();
    initHamburger();
    initSmoothScroll();
    initNavbarScroll();
    initCardAccents();
    initRipple();
    initBackToTop();
  }

  // ULTRA SAFE INIT - Handles all timing issues
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // Extra safety: wait one tick even if DOM ready
    requestAnimationFrame(init);
  }

  // FAILSAFE: Try again after 100ms if elements still missing
  setTimeout(function() {
    if (!document.querySelector('.hamburger') || !document.querySelector('.nav-links')) {
      init();
    }
  }, 100);

})();
