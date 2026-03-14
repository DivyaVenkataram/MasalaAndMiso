// Restaurant pins — Bay Area visits + placeholders
const restaurants = [
  { name: 'Tiya', city: 'San Francisco', lat: 37.7879, lng: -122.4074, michelin: 'Guide 2024–25' },
  { name: 'Snail Bar', city: 'San Francisco', lat: 37.7694, lng: -122.4262, michelin: 'Guide 2023–25' },
  { name: 'Nari', city: 'San Francisco', lat: 37.7849, lng: -122.4094, michelin: '1 Star 2023–25' },
  { name: 'F.O.B. Kitchen', city: 'San Francisco', lat: 37.7627, lng: -122.4227, michelin: 'Guide 2021–25' },
  { name: 'Placeholder', city: 'Coming soon', lat: 40.7128, lng: -74.0060, michelin: '—' },
  { name: 'Placeholder', city: 'Coming soon', lat: 34.0522, lng: -118.2437, michelin: '—' },
];

function initMap() {
  const map = L.map('map').setView([37.78, -122.41], 11); // SF/Bay Area focus

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap, &copy; CARTO',
    maxZoom: 19,
  }).addTo(map);

  restaurants.forEach((r) => {
    const popup = `<strong>${r.name}</strong><br>${r.city} · ${r.michelin}`;
    L.marker([r.lat, r.lng])
      .addTo(map)
      .bindPopup(popup);
  });
}

if (document.getElementById('map')) {
  document.addEventListener('DOMContentLoaded', initMap);
}
