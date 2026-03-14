'use client'

import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'

const restaurants = [
  { name: 'Tiya', city: 'San Francisco', lat: 37.7879, lng: -122.4074, michelin: 'Guide 2024–25', slug: 'tiya' },
  { name: 'Snail Bar', city: 'San Francisco', lat: 37.7694, lng: -122.4262, michelin: 'Guide 2023–25', slug: 'snail-bar' },
  { name: 'Nari', city: 'San Francisco', lat: 37.7849, lng: -122.4094, michelin: '1 Star 2023–25', slug: 'nari' },
  { name: 'F.O.B. Kitchen', city: 'San Francisco', lat: 37.7627, lng: -122.4227, michelin: 'Guide 2021–25', slug: 'fob-kitchen' },
  { name: 'Placeholder', city: 'New York', lat: 40.7128, lng: -74.006, michelin: '—', slug: '' },
  { name: 'Placeholder', city: 'Los Angeles', lat: 34.0522, lng: -118.2437, michelin: '—', slug: '' },
  { name: 'Placeholder', city: 'Japan', lat: 35.6762, lng: 139.6503, michelin: '—', slug: '' },
]

export default function RestaurantMap() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return

    import('leaflet').then((L) => {
      const map = L.default.map(containerRef.current!).setView([37.78, -122.41], 11)
      L.default.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap, &copy; CARTO',
        maxZoom: 19,
      }).addTo(map)

      restaurants.forEach((r) => {
        const popup = r.slug
          ? `<strong>${r.name}</strong><br>${r.city} · ${r.michelin}<br><a href="/blog/${r.slug}" style="color:#114665;font-weight:500;margin-top:6px;display:inline-block;">Read review →</a>`
          : `<strong>${r.name}</strong><br>${r.city} · ${r.michelin}`
        L.default
          .marker([r.lat, r.lng])
          .addTo(map)
          .bindPopup(popup)
      })

      return () => {
        map.remove()
      }
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className="h-[420px] w-full rounded-sm overflow-hidden border border-neutral/40 shadow-md"
      aria-label="Map of restaurants we have visited"
    />
  )
}
