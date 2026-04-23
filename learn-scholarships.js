/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const FAQ_DATA = [
  [
    "What if I get rejected?",
    "That's completely okay! Even the most successful students face rejections. Apply to 10–15 scholarships — if one says no, nine others might say YES. Never give up after one rejection."
  ],
  [
    "Is it safe to study abroad?",
    "Yes! Thousands of Myanmar students study abroad safely every year. Universities have strong support systems, and you'll find Myanmar student communities in almost every country. You're never alone."
  ],
  [
    "What about my family? Will I miss them?",
    "Of course you will — and that's normal. But remember: it's temporary (2–4 years), and you can video call anytime. You're working toward a better future for your entire family. That's worth it."
  ],
  [
    "Can I return to Myanmar after?",
    "Absolutely! Many scholarships actively encourage you to return and contribute to Myanmar's development. You'll bring international experience and skills back home."
  ],
  [
    "What if my English isn't good enough yet?",
    "Start improving now! Many students go from IELTS 5.0 to 7.0 in 3–6 months with dedicated practice. Watch English content, practice daily, and use free online resources. You have time!"
  ],
  [
    "Is this too good to be true?",
    "No — it's completely real! Thousands of Myanmar students have received fully funded scholarships. This is YOUR opportunity too."
  ]
];

const SECTIONS = ["sec-what", "sec-why", "sec-types", "sec-who", "sec-how", "sec-faq"];
const NAV_LABELS = [
  "What is it?",
  "Why Countries Give",
  "Types",
  "Can I Apply?",
  "How to Apply",
  "FAQ"
];

/* ═══════════════════════════════════════════
   STARS
═══════════════════════════════════════════ */
(function createStars() {
  const container = document.getElementById('stars');
  if (!container) return;
  const positions = [
    [10, 8], [22, 14], [6, 28], [80, 10], [92, 32],
    [4, 58], [95, 65], [52, 7], [45, 48], [68, 20],
    [35, 5], [75, 55], [15, 72], [88, 18], [60, 40]
  ];
  positions.forEach(([left, top], i) => {
    const el = document.createElement('div');
    el.className = 'star';
    el.style.cssText = `left:${left}%;top:${top}%;--dur:${2.2 + i * 0.28}s;--delay:${(i * 0.38) % 2.8}s`;
    container.appendChild(el);
  });
})();

/* ═══════════════════════════════════════════
   STICKY NAV
═══════════════════════════════════════════ */
function buildNav() {
  const container = document.getElementById('secNav');
  if (!container) return;
  container.innerHTML = '';
  SECTIONS.forEach((id, i) => {
    const btn = document.createElement('button');
    btn.className = 'nav-item';
    btn.textContent = NAV_LABELS[i];
    btn.dataset.target = id;
    btn.onclick = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    container.appendChild(btn);
  });

  const drawerItems = document.getElementById('drawer-items');
  if (drawerItems) {
    drawerItems.innerHTML = '';
    SECTIONS.forEach((id, i) => {
      const div = document.createElement('div');
      div.className = 'drawer-nav-item';
      div.textContent = NAV_LABELS[i];
      div.onclick = () => {
        closeDrawer();
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 260);
      };
      drawerItems.appendChild(div);
    });
  }
}

/* ═══════════════════════════════════════════
   FAQ
═══════════════════════════════════════════ */
function buildFaq() {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = '';
  FAQ_DATA.forEach(([q, a]) => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `
      <div class="faq-q" onclick="toggleFaq(this)">
        <span>${q}</span>
        <svg class="faq-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6L8 10L12 6" stroke="#0071e3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="faq-a">${a}</div>
    `;
    list.appendChild(item);
  });
}

function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q.open').forEach(el => {
    el.classList.remove('open');
    el.parentElement.classList.remove('open');
    el.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    btn.parentElement.classList.add('open');
    answer.classList.add('open');
  }
}

/* ═══════════════════════════════════════════
   SCROLL PROGRESS + ACTIVE NAV
═══════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  const el = document.documentElement;
  const pct = el.scrollTop / (el.scrollHeight - el.clientHeight) * 100;
  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = pct + '%';

  let active = SECTIONS[0];
  SECTIONS.forEach(id => {
    const sec = document.getElementById(id);
    if (sec && sec.getBoundingClientRect().top <= 80) active = id;
  });
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === active);
  });
}, { passive: true });

/* ═══════════════════════════════════════════
   INTERSECTION OBSERVER (section reveal)
═══════════════════════════════════════════ */
(function initReveal() {
  const sections = document.querySelectorAll('.section');
  if (!sections.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });
  sections.forEach(s => observer.observe(s));
})();

/* ═══════════════════════════════════════════
   MOBILE DRAWER
═══════════════════════════════════════════ */
function openDrawer() {
  const drawer = document.getElementById('drawer');
  if (drawer) {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeDrawer() {
  const drawer = document.getElementById('drawer');
  if (drawer) {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

const drawerEl = document.getElementById('drawer');
if (drawerEl) {
  drawerEl.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeDrawer();
  });
}

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
buildNav();
buildFaq();
