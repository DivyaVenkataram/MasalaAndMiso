// Restaurant pins — focus on America, with global highlights
const restaurants = [
  { name: 'Le Bernardin', city: 'New York', lat: 40.7614, lng: -73.9776, stars: 3 },
  { name: 'Alinea', city: 'Chicago', lat: 41.9097, lng: -87.6473, stars: 3 },
  { name: 'Single Thread', city: 'Healdsburg', lat: 38.6104, lng: -122.8692, stars: 3 },
  { name: 'The French Laundry', city: 'Yountville', lat: 38.4036, lng: -122.3622, stars: 3 },
  { name: 'Atomix', city: 'New York', lat: 40.7401, lng: -73.9840, stars: 2 },
  { name: 'Sukiyabashi Jiro', city: 'Tokyo', lat: 35.6595, lng: 139.7294, stars: 3 },
  { name: 'Narisawa', city: 'Tokyo', lat: 35.6698, lng: 139.7222, stars: 2 },
  { name: 'Arpège', city: 'Paris', lat: 48.8566, lng: 2.3180, stars: 3 },
  { name: 'Mirazur', city: 'Menton', lat: 43.7746, lng: 7.4975, stars: 3 },
  { name: 'Eleven Madison Park', city: 'New York', lat: 40.7420, lng: -73.9872, stars: 3 },
  { name: 'Benu', city: 'San Francisco', lat: 37.7856, lng: -122.3984, stars: 3 },
  { name: 'Quince', city: 'San Francisco', lat: 37.7982, lng: -122.3998, stars: 3 },
  { name: 'Oriole', city: 'Chicago', lat: 41.8787, lng: -87.6356, stars: 2 },
  { name: 'Lazy Bear', city: 'San Francisco', lat: 37.7599, lng: -122.4214, stars: 2 },
  { name: 'Saison', city: 'San Francisco', lat: 37.7765, lng: -122.3942, stars: 3 },
];

function initMap() {
  const map = L.map('map').setView([39.5, -98], 4); // US center, zoom for America focus

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap, &copy; CARTO',
    maxZoom: 19,
  }).addTo(map);

  const starStr = (n) => '★'.repeat(n);

  restaurants.forEach((r) => {
    const popup = `<strong>${r.name}</strong><br>${r.city} · ${starStr(r.stars)} Michelin`;
    L.marker([r.lat, r.lng])
      .addTo(map)
      .bindPopup(popup);
  });
}

if (document.getElementById('map')) {
  document.addEventListener('DOMContentLoaded', initMap);
}
