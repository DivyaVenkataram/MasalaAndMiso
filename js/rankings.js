(function () {
  const locationSelect = document.getElementById('filter-location');
  const cuisineSelect = document.getElementById('filter-cuisine');
  const starsSelect = document.getElementById('filter-stars');
  const resetBtn = document.getElementById('reset-filters');
  const tbody = document.getElementById('rank-body');

  if (!tbody) return;

  const rows = Array.from(tbody.querySelectorAll('tr'));

  function matchesLocation(row, value) {
    if (!value) return true;
    return (row.dataset.location || '').toLowerCase().includes(value.toLowerCase());
  }

  function matchesCuisine(row, value) {
    if (!value) return true;
    return (row.dataset.cuisine || '').toLowerCase() === value.toLowerCase();
  }

  function matchesStars(row, value) {
    if (!value) return true;
    return row.dataset.stars === value;
  }

  function applyFilters() {
    const location = locationSelect ? locationSelect.value : '';
    const cuisine = cuisineSelect ? cuisineSelect.value : '';
    const stars = starsSelect ? starsSelect.value : '';

    rows.forEach(function (row) {
      const show =
        matchesLocation(row, location) &&
        matchesCuisine(row, cuisine) &&
        matchesStars(row, stars);
      row.style.display = show ? '' : 'none';
    });
  }

  if (locationSelect) locationSelect.addEventListener('change', applyFilters);
  if (cuisineSelect) cuisineSelect.addEventListener('change', applyFilters);
  if (starsSelect) starsSelect.addEventListener('change', applyFilters);

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      if (locationSelect) locationSelect.value = '';
      if (cuisineSelect) cuisineSelect.value = '';
      if (starsSelect) starsSelect.value = '';
      rows.forEach(function (row) {
        row.style.display = '';
      });
    });
  }
})();
