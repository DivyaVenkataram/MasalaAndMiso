'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { LAND_PATH } from '@/data/worldContinents'

type City = {
  id: string
  cityName: string
  lon: number
  lat: number
  restaurants: string
}

// Lon/lat for pin position; equirectangular: x = lon+180, y = 90-lat in viewBox 0 0 360 180
const CITIES: City[] = [
  {
    id: 'sf',
    cityName: 'San Francisco',
    lon: -122.41,
    lat: 37.78,
    restaurants: 'Nari, Snail Bar, Tiya, F.O.B. Kitchen',
  },
  {
    id: 'ny',
    cityName: 'New York City',
    lon: -74,
    lat: 40.71,
    restaurants: 'Le Bernardin, Atomix, and more',
  },
  {
    id: 'tokyo',
    cityName: 'Tokyo',
    lon: 139.65,
    lat: 35.68,
    restaurants: "Jiro, Narisawa, and the city's best",
  },
  {
    id: 'mumbai',
    cityName: 'Mumbai',
    lon: 72.87,
    lat: 19.07,
    restaurants: 'Coming soon',
  },
]

function lonLatToXY(lon: number, lat: number) {
  return { x: lon + 180, y: 90 - lat }
}

// Classic travel/map pin shape (tip at origin), compact size
const PIN_PATH =
  'M0,0 L-1.6,5.2 A1.6 1.6 0 0 0 1.6,5.2 Z'

export default function EditorMap() {
  const ref = useRef<HTMLSectionElement>(null)
  const [visible, setVisible] = useState(false)
  const [openCityId, setOpenCityId] = useState<string | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVisible(true)
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const openCity = openCityId ? CITIES.find((c) => c.id === openCityId) : null

  return (
    <section ref={ref} className="relative pt-8 sm:pt-10 pb-0 overflow-hidden bg-page">
      <div className="max-w-layout mx-auto px-6 sm:px-8 mb-3">
        <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight text-center mb-2 tracking-tight">
          Where We&apos;ve Dined
        </h2>
        <p className="text-midnight/80 text-center max-w-xl mx-auto text-[18px] leading-[1.6]">
          Seven continents, one map. Click a pin to see our restaurant picks in that city.
        </p>
      </div>

      <div
        className="w-full transition-opacity duration-700"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div className="relative overflow-hidden w-full" style={{ background: '#f3f3f5' }}>
          {/* Ombre in — less at top */}
          <div
            className="absolute inset-x-0 top-0 z-10 pointer-events-none"
            style={{
              height: '28%',
              background: 'linear-gradient(to bottom, #f3f3f5 0%, rgba(243, 243, 245, 0.92) 25%, rgba(243, 243, 245, 0.4) 65%, transparent 100%)',
            }}
            aria-hidden
          />
          {/* Ombre out — extends up over countries so fade is over South America */}
          <div
            className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
            style={{
              height: '58%',
              background: 'linear-gradient(to top, #f3f3f5 0%, #f3f3f5 4%, rgba(243, 243, 245, 0.97) 14%, rgba(243, 243, 245, 0.88) 28%, rgba(243, 243, 245, 0.5) 52%, transparent 100%)',
            }}
            aria-hidden
          />
          <svg
            viewBox="0 0 360 180"
            className="w-full h-auto block"
            style={{ aspectRatio: '360 / 180', minHeight: 420, maxHeight: 'min(80vh, 640px)' }}
            aria-label="World map: where we’ve dined"
          >
            {/* Ocean — page background */}
            <rect width="360" height="180" fill="#f3f3f5" />
            {/* Land — darker countries only, abstract shapes */}
            <path
              d={LAND_PATH}
              fill="rgba(17, 70, 101, 0.54)"
              stroke="rgba(17, 70, 101, 0.85)"
              strokeWidth={0.58}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* City pins + labels */}
            {CITIES.map((city) => {
              const { x, y } = lonLatToXY(city.lon, city.lat)
              const isOpen = openCityId === city.id
              return (
                <g
                  key={city.id}
                  transform={`translate(${x}, ${y})`}
                  className="cursor-pointer outline-none"
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenCityId(isOpen ? null : city.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setOpenCityId(isOpen ? null : city.id)
                    }
                  }}
                  aria-label={`${city.cityName}: ${city.restaurants}`}
                >
                  <text
                    x={0}
                    y={10}
                    textAnchor="middle"
                    fill="#16202b"
                    fontSize={3.2}
                    fontFamily="var(--font-playfair), Georgia, serif"
                    fontWeight={500}
                    pointerEvents="none"
                  >
                    {city.cityName}
                  </text>
                  <path
                    d={PIN_PATH}
                    fill="rgba(17, 70, 101, 0.2)"
                    transform="scale(1,-1) translate(0.35, 0.28)"
                    pointerEvents="none"
                  />
                  <path
                    d={PIN_PATH}
                    fill="#720f32"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth={0.45}
                    strokeLinejoin="round"
                    transform="scale(1,-1)"
                  />
                </g>
              )
            })}
          </svg>
        </div>

        {/* Dropdown: restaurants for selected city — blue text on light */}
        {openCity && (
          <div
            className="mt-2 rounded-sm bg-white/95 backdrop-blur-sm px-5 py-4 shadow-lg border border-ocean/15 max-w-md mx-auto animate-fade-in"
            role="region"
            aria-label={`Restaurants in ${openCity.cityName}`}
          >
            <p className="font-playfair text-base font-medium text-ocean tracking-tight">
              {openCity.cityName}
            </p>
            <p className="text-ocean/80 text-metadata mt-1 leading-relaxed">
              {openCity.restaurants}
            </p>
            <Link
              href="/ranking-guide"
              className="inline-block mt-3 text-ocean text-metadata border-b border-ocean/50 pb-0.5 hover:border-ocean transition-colors"
              style={{ backgroundImage: 'none' }}
            >
              View rankings →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
