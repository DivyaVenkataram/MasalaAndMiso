/**
 * Custom-styled map: data from MasalaData, light tiles, popover with full details.
 */
(function () {
  var mapEl = document.getElementById('map');
  if (!mapEl) return;

  function initMap() {
    var restaurants = typeof MasalaData !== 'undefined' ? MasalaData.getRestaurants() : [];
    var reviewed = restaurants.filter(function (r) { return !r.isPlaceholder; });

    var map = L.map('map', {
      center: [37.78, -122.41],
      zoom: 12,
      scrollWheelZoom: true
    });

    // Light, minimal tile layer (no dark/carto)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      maxZoom: 19
    }).addTo(map);

    // Custom marker icon — simple dot/circle style
    var markerHtml = '<span style="display:block;width:12px;height:12px;border-radius:50%;background:#720f32;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></span>';
    var icon = L.divIcon({
      className: 'map-marker',
      html: markerHtml,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });

    restaurants.forEach(function (r) {
      var marker = L.marker([r.lat, r.lng], { icon: icon }).addTo(map);

      if (r.isPlaceholder) {
        marker.bindPopup(
          '<div class="map-popover">' +
            '<h4>' + r.name + '</h4>' +
            '<p class="meta">' + r.city + ' · Coming soon</p>' +
          '</div>'
        );
        return;
      }

      var reviewUrl = r.reviewSlug ? ('review-' + r.reviewSlug + '.html') : ('blog.html#' + r.slug);
      var popupContent =
        '<div class="map-popover">' +
          '<h4>' + r.name + '</h4>' +
          '<p class="meta">' + r.city + (r.neighborhood ? ' · ' + r.neighborhood : '') + '</p>' +
          '<p class="meta">' + r.cuisine + ' · ' + r.michelinDetail + '</p>' +
          '<p class="score">' + r.score + ' / 10</p>' +
          '<a href="' + reviewUrl + '">Read review →</a>' +
        '</div>';

      marker.bindPopup(popupContent, {
        maxWidth: 280,
        className: 'map-popover-wrapper'
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
  } else {
    initMap();
  }
})();
