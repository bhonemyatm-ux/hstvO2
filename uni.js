document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('universitySearch');
  const searchBox = document.getElementById('searchBox') || searchInput?.closest('.search-box');
  const searchToggle = document.getElementById('mobileSearchToggle') || searchBox?.querySelector('.search-icon');
  const regionFilter = document.getElementById('regionFilter');
  const majorFilter = document.getElementById('majorFilter');
  const typeFilter = document.getElementById('typeFilter');
  const sortBySelect = document.getElementById('sortBy');
  const resultCount = document.getElementById('resultCount');
  const noResults = document.getElementById('noResults');
  const activeFilters = document.getElementById('activeFilters');
  const grid = document.getElementById('universitiesGrid');
  const filterBar = document.getElementById('filterBar');
  const fabBtn = document.getElementById('showFiltersBtn');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }

  if (!searchInput || !regionFilter || !majorFilter || !typeFilter || !grid) return;

  const norm = value => (value == null ? '' : String(value)).toLowerCase().replace(/\s+/g, ' ').trim();
  const isAll = value => {
    const normalized = norm(value);
    return normalized === '' || normalized.startsWith('all ');
  };
  const getCards = () => Array.from(grid.querySelectorAll('.university-card'));

  function updateResultCount(count) {
    if (resultCount) {
      resultCount.textContent = count + ' universit' + (count === 1 ? 'y' : 'ies') + ' found';
    }
  }

  function updateActiveFilters() {
    if (!activeFilters) return;
    activeFilters.innerHTML = '';

    [
      { el: regionFilter, label: 'Region' },
      { el: majorFilter, label: 'Major' },
      { el: typeFilter, label: 'Type' }
    ].forEach(function (filter) {
      if (isAll(filter.el.value)) return;
      const text = filter.el.options[filter.el.selectedIndex]?.text || filter.el.value;
      const tag = document.createElement('div');
      tag.className = 'filter-tag';
      tag.innerHTML = filter.label + ': ' + text + ' <button type="button" aria-label="Remove ' + filter.label + ' filter" data-clear="' + filter.el.id + '">×</button>';
      activeFilters.appendChild(tag);
    });

    activeFilters.querySelectorAll('button[data-clear]').forEach(function (button) {
      button.addEventListener('click', function () {
        const el = document.getElementById(button.getAttribute('data-clear'));
        if (el) el.selectedIndex = 0;
        filterAndUpdate();
      });
    });
  }

  function filterAndUpdate() {
    const term = norm(searchInput.value);
    const selectedRegion = norm(regionFilter.value);
    const selectedMajor = norm(majorFilter.value);
    const selectedType = norm(typeFilter.value);
    let visible = 0;

    getCards().forEach(function (card) {
      const cardRegion = norm(card.getAttribute('data-region') || '');
      const cardMajor = norm(card.getAttribute('data-major') || '');
      const cardType = norm(card.getAttribute('data-type') || '');
      const searchable = norm(card.textContent + ' ' + cardRegion + ' ' + cardMajor + ' ' + cardType);

      const matchSearch = !term || searchable.includes(term);
      const matchRegion = isAll(selectedRegion) || cardRegion.includes(selectedRegion);
      const matchMajor = isAll(selectedMajor) || cardMajor.includes(selectedMajor);
      const matchType = isAll(selectedType) || cardType === selectedType;
      const shouldShow = matchSearch && matchRegion && matchMajor && matchType;

      card.style.display = shouldShow ? '' : 'none';
      if (shouldShow) visible++;
    });

    updateResultCount(visible);
    updateActiveFilters();
    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  function parseMarks(card) {
    const stats = card.querySelectorAll('.uni-stats .stat');
    for (let i = 0; i < stats.length; i++) {
      const label = stats[i].querySelector('strong');
      if (!label || !label.textContent.toLowerCase().includes('min')) continue;
      const value = stats[i].querySelector('p');
      if (!value) continue;
      const number = parseInt(value.textContent.replace(/[^\d]/g, ''), 10);
      return Number.isFinite(number) ? number : null;
    }
    return null;
  }

  function sortCards() {
    if (!sortBySelect) return;
    const val = sortBySelect.value;
    const cards = getCards();

    cards.sort(function (a, b) {
      if (val === 'name') {
        return (a.querySelector('h3')?.textContent || '').trim().localeCompare((b.querySelector('h3')?.textContent || '').trim());
      }
      if (val === 'region') {
        return (a.getAttribute('data-region') || '').localeCompare(b.getAttribute('data-region') || '');
      }
      if (val === 'marks') {
        const aMarks = parseMarks(a);
        const bMarks = parseMarks(b);
        if (aMarks === null && bMarks === null) return 0;
        if (aMarks === null) return 1;
        if (bMarks === null) return -1;
        return bMarks - aMarks;
      }
      return 0;
    });

    cards.forEach(card => grid.appendChild(card));
  }

  function openSearchInPlace() {
    if (!searchBox) return;
    searchBox.classList.add('is-open');
    requestAnimationFrame(function () {
      try {
        searchInput.focus({ preventScroll: true });
      } catch (error) {
        const x = window.scrollX;
        const y = window.scrollY;
        searchInput.focus();
        window.scrollTo(x, y);
      }
    });
  }

  if (searchToggle) {
    searchToggle.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      openSearchInPlace();
    });
  }

  searchInput.addEventListener('focus', openSearchInPlace);
  searchInput.addEventListener('input', filterAndUpdate);
  regionFilter.addEventListener('change', filterAndUpdate);
  majorFilter.addEventListener('change', filterAndUpdate);
  typeFilter.addEventListener('change', filterAndUpdate);

  document.addEventListener('click', function (event) {
    if (!searchBox || searchBox.contains(event.target)) return;
    if (window.matchMedia('(max-width: 640px)').matches && !searchInput.value.trim()) {
      searchBox.classList.remove('is-open');
    }
  });

  if (sortBySelect) {
    sortBySelect.addEventListener('change', function () {
      sortCards();
      filterAndUpdate();
    });
  }

  let lastScrollY = window.scrollY;
  const laptopSearchBar = window.matchMedia('(min-width: 769px)');

  function updateFilterBarOnScroll() {
    if (!filterBar) return;

    if (!laptopSearchBar.matches) {
      filterBar.classList.remove('hidden');
      filterBar.classList.add('visible');
      lastScrollY = window.scrollY;
      return;
    }

    const currentScrollY = window.scrollY;
    const scrollDifference = currentScrollY - lastScrollY;

    if (currentScrollY < 120 || scrollDifference < -8) {
      filterBar.classList.remove('hidden');
      filterBar.classList.add('visible');
    } else if (scrollDifference > 8) {
      filterBar.classList.add('hidden');
      filterBar.classList.remove('visible');
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', updateFilterBarOnScroll, { passive: true });
  laptopSearchBar.addEventListener('change', updateFilterBarOnScroll);
  updateFilterBarOnScroll();

  if (fabBtn) {
    fabBtn.addEventListener('click', function (event) {
      event.preventDefault();
      if (filterBar) filterBar.classList.add('visible');
      openSearchInPlace();
    });

    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) fabBtn.classList.add('show');
      else fabBtn.classList.remove('show');
    }, { passive: true });
  }

  const params = new URLSearchParams(window.location.search);
  const q = params.get('search');
  if (q) {
    searchInput.value = q;
    searchBox?.classList.add('is-open');
  }

  filterAndUpdate();

  try {
    const universities = getCards().map(function (card) {
      return {
        name: (card.querySelector('h3')?.textContent || '').trim(),
        region: card.dataset.region || '',
        major: card.dataset.major || '',
        type: card.dataset.type || '',
        href: card.querySelector('.view-btn')?.getAttribute('href') || ''
      };
    });
    localStorage.setItem('hstUniversities', JSON.stringify(universities));
  } catch (error) {}
});
