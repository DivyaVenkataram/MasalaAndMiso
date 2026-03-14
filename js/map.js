// Restaurant map — uses js/data/restaurants.js when available; fallback to inline data
(function () {
  var restaurants = [];
  if (typeof getRestaurantsForMap === 'function') {
    restaurants = getRestaurantsForMap();
  } else {
    restaurants = [
      { name: 'Tiya', city: 'San Francisco', lat: 37.7879, lng: -122.4074, michelin: 'Guide 2024–25', score: 4.3 },
      { name: 'Snail Bar', city: 'San Francisco', lat: 37.7694, lng: -122.4262, michelin: 'Guide 2023–25', score: 6.8 },
      { name: 'Nari', city: 'San Francisco', lat: 37.7849, lng: -122.4094, michelin: '1 Star 2023–25', score: 7.6 },
      { name: 'F.O.B. Kitchen', city: 'San Francisco', lat: 37.7627, lng: -122.4227, michelin: 'Guide 2021–25', score: 5.6 },
      { name: 'Placeholder', city: 'New York', lat: 40.7128, lng: -74.0060, michelin: '—', score: null },
      { name: 'Placeholder', city: 'Los Angeles', lat: 34.0522, lng: -118.2437, michelin: '—', score: null },
      { name: 'Placeholder', city: 'Japan', lat: 35.6762, lng: 139.6503, michelin: '—', score: null },
    ];
  }

  function buildPopup(r) {
    var parts = ['<strong>' + r.name + '</strong>', r.city + ' · ' + r.michelin];
    if (r.score != null) parts.push('<span style="opacity:0.9">Rating ' + r.score + '</span>');
    return parts.join('<br>');
  }

  function initMap() {
    var map = L.map('map').setView([37.78, -122.41], 11);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap, &copy; CARTO',
      maxZoom: 19,
    }).addTo(map);

    restaurants.forEach(function (r) {
      L.marker([r.lat, r.lng])
        .addTo(map)
        .bindPopup(buildPopup(r));
    });
  }

  if (document.getElementById('map')) {
    document.addEventListener('DOMContentLoaded', initMap);
  }
})();
