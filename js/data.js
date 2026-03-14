/**
 * Masala & Miso — single source of truth for restaurants, reviews, rankings.
 * Used by map, rankings, home latest, and review pages.
 */
(function (global) {
  var RESTAURANTS = [
    {
      name: 'Tiya',
      slug: 'tiya',
      city: 'San Francisco',
      neighborhood: 'SoMa',
      country: 'USA',
      cuisine: 'Indian fusion',
      michelin: 'Guide',
      michelinDetail: 'Guide 2024–25',
      priceLevel: '$$',
      score: 4.3,
      scores: { food: 4, service: 4.5, ambiance: 4.5, value: 4, originality: 4.5 },
      lat: 37.7879,
      lng: -122.4074,
      excerpt: 'Refined Indian fusion in San Francisco. In the Michelin Guide; our scores reflect our visit.',
      reviewSlug: 'tiya',
      dateVisited: '2024',
      datePublished: '2024',
      tags: ['indian', 'fusion', 'san-francisco'],
      reservationLink: '#',
      isPlaceholder: false
    },
    {
      name: 'Snail Bar',
      slug: 'snail-bar',
      city: 'San Francisco',
      neighborhood: 'Mission',
      country: 'USA',
      cuisine: 'Contemporary Californian',
      michelin: 'Guide',
      michelinDetail: 'Guide 2023–25',
      priceLevel: '$$',
      score: 6.8,
      scores: { food: 7, service: 6.5, ambiance: 7, value: 6.5, originality: 7 },
      lat: 37.7694,
      lng: -122.4262,
      excerpt: 'Contemporary Californian cooking with a clear vision. In the Guide; we found much to like.',
      reviewSlug: 'snail-bar',
      dateVisited: '2024',
      datePublished: '2024',
      tags: ['californian', 'san-francisco'],
      reservationLink: '#',
      isPlaceholder: false
    },
    {
      name: 'Nari',
      slug: 'nari',
      city: 'San Francisco',
      neighborhood: 'Duboce Triangle',
      country: 'USA',
      cuisine: 'Thai / Californian',
      michelin: '1 Star',
      michelinDetail: '1 Star 2023–25',
      priceLevel: '$$',
      score: 7.6,
      scores: { food: 7.7, service: 7.5, ambiance: 7.5, value: 7.5, originality: 7.7 },
      lat: 37.7849,
      lng: -122.4094,
      excerpt: 'One star, Thai and Californian flavors in harmony. A standout in our Bay Area visits.',
      reviewSlug: 'nari',
      dateVisited: '2024',
      datePublished: '2024',
      tags: ['thai', 'californian', 'san-francisco', 'one-star'],
      reservationLink: '#',
      isPlaceholder: false
    },
    {
      name: 'F.O.B. Kitchen',
      slug: 'fob-kitchen',
      city: 'San Francisco',
      neighborhood: 'Mission',
      country: 'USA',
      cuisine: 'Filipino',
      michelin: 'Guide',
      michelinDetail: 'Guide 2021–25',
      priceLevel: '$$',
      score: 5.6,
      scores: { food: 5.6, service: 5.5, ambiance: 5.5, value: 5.5, originality: 6 },
      lat: 37.7627,
      lng: -122.4227,
      excerpt: 'Filipino cuisine in the Michelin Guide. Heart and technique at the table.',
      reviewSlug: 'fob-kitchen',
      dateVisited: '2024',
      datePublished: '2024',
      tags: ['filipino', 'san-francisco'],
      reservationLink: '#',
      isPlaceholder: false
    },
    { name: 'Placeholder', slug: 'placeholder-ny', city: 'New York', country: 'USA', cuisine: '', michelin: '', michelinDetail: '—', priceLevel: '', score: null, lat: 40.7128, lng: -74.0060, excerpt: '', reviewSlug: '', isPlaceholder: true },
    { name: 'Placeholder', slug: 'placeholder-la', city: 'Los Angeles', country: 'USA', cuisine: '', michelin: '', michelinDetail: '—', priceLevel: '', score: null, lat: 34.0522, lng: -118.2437, excerpt: '', reviewSlug: '', isPlaceholder: true },
    { name: 'Placeholder', slug: 'placeholder-japan', city: 'Japan', country: 'Japan', cuisine: '', michelin: '', michelinDetail: '—', priceLevel: '', score: null, lat: 35.6762, lng: 139.6503, excerpt: '', reviewSlug: '', isPlaceholder: true }
  ];

  function getRestaurants() { return RESTAURANTS; }
  function getReviewed() { return RESTAURANTS.filter(function (r) { return !r.isPlaceholder; }); }
  function getBySlug(slug) { return RESTAURANTS.find(function (r) { return r.slug === slug; }) || null; }

  global.MasalaData = {
    getRestaurants: getRestaurants,
    getReviewed: getReviewed,
    getBySlug: getBySlug
  };
})(typeof window !== 'undefined' ? window : this);
