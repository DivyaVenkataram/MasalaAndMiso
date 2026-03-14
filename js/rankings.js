(function () {
  var locationSelect = document.getElementById('filter-location');
  var cuisineSelect = document.getElementById('filter-cuisine');
  var michelinSelect = document.getElementById('filter-michelin');
  var scoreSelect = document.getElementById('filter-score');
  var sortSelect = document.getElementById('sort');
  var resetBtn = document.getElementById('reset-filters');
  var tbody = document.getElementById('rank-body');

  if (!tbody) return;

  var rows = Array.from(tbody.querySelectorAll('tr'));

  function getScore(row) {
    var s = parseFloat(row.dataset.score, 10);
    return isNaN(s) ? -1 : s;
  }

  function applyFilters() {
    var location = locationSelect ? locationSelect.value : '';
    var cuisine = cuisineSelect ? cuisineSelect.value : '';
    var michelin = michelinSelect ? michelinSelect.value : '';
    var scoreMin = scoreSelect ? scoreSelect.value : '';

    rows.forEach(function (row) {
      var locMatch = !location || (row.dataset.location || '').toLowerCase().includes(location.toLowerCase());
      var cuisineMatch = !cuisine || (row.dataset.cuisine || '').toLowerCase() === cuisine.toLowerCase();
      var michelinMatch = !michelin || (row.dataset.michelin || '').indexOf(michelin) === 0;
      var scoreMatch = !scoreMin || (getScore(row) >= parseFloat(scoreMin, 10));
      var show = locMatch && cuisineMatch && michelinMatch && scoreMatch;
      row.style.display = show ? '' : 'none';
    });

    sortTable();
  }

  function sortTable() {
    var sortBy = sortSelect ? sortSelect.value : 'score';
    var visible = rows.filter(function (r) { return r.style.display !== 'none'; });
    var placeholders = visible.filter(function (r) { return r.dataset.placeholder === 'true'; });
    var dataRows = visible.filter(function (r) { return r.dataset.placeholder !== 'true'; });

    dataRows.sort(function (a, b) {
      if (sortBy === 'score') return getScore(b) - getScore(a);
      if (sortBy === 'city') return (a.dataset.city || '').localeCompare(b.dataset.city || '');
      if (sortBy === 'name') return (a.dataset.name || '').localeCompare(b.dataset.name || '');
      if (sortBy === 'michelin') {
        var order = { '1 Star': 2, 'Guide': 1 };
        return (order[b.dataset.michelin] || 0) - (order[a.dataset.michelin] || 0);
      }
      return 0;
    });

    var reordered = dataRows.concat(placeholders);
    reordered.forEach(function (row, i) {
      if (row.dataset.placeholder === 'true') return;
      var numCell = row.querySelector('td:first-child');
      if (numCell) numCell.textContent = i + 1;
    });

    reordered.forEach(function (row) { tbody.appendChild(row); });
  }

  if (locationSelect) locationSelect.addEventListener('change', applyFilters);
  if (cuisineSelect) cuisineSelect.addEventListener('change', applyFilters);
  if (michelinSelect) michelinSelect.addEventListener('change', applyFilters);
  if (scoreSelect) scoreSelect.addEventListener('change', applyFilters);
  if (sortSelect) sortSelect.addEventListener('change', sortTable);

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      if (locationSelect) locationSelect.value = '';
      if (cuisineSelect) cuisineSelect.value = '';
      if (michelinSelect) michelinSelect.value = '';
      if (scoreSelect) scoreSelect.value = '';
      if (sortSelect) sortSelect.value = 'score';
      rows.forEach(function (r) { r.style.display = ''; });
      sortTable();
    });
  }

  sortTable();
})();
