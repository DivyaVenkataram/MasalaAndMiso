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
    <section ref={ref} className="relative py-10 sm:py-12 overflow-hidden section-after-image">
      <div className="max-w-layout mx-auto px-6 sm:px-8 mb-4">
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
        <div className="relative overflow-hidden">
          {/* Ombre in from top — soft fade with a hint of palette (cream) */}
          <div
            className="absolute inset-x-0 top-0 h-44 sm:h-52 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #f3f3f5 0%, rgba(243, 243, 245, 0.92) 18%, rgba(243, 243, 245, 0.5) 42%, rgba(209, 209, 214, 0.15) 70%, transparent 100%)',
            }}
            aria-hidden
          />
          {/* Ombre out at bottom — matching soft fade, no hard edge */}
          <div
            className="absolute inset-x-0 bottom-0 h-44 sm:h-52 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, #f3f3f5 0%, rgba(243, 243, 245, 0.92) 18%, rgba(243, 243, 245, 0.5) 42%, rgba(209, 209, 214, 0.15) 70%, transparent 100%)',
            }}
            aria-hidden
          />
          <svg
            viewBox="0 0 360 180"
            className="w-full h-auto block"
            style={{ aspectRatio: '360 / 180', minHeight: 220 }}
            aria-label="World map: where we’ve dined"
          >
            {/* Ocean — transparent so only land reads on page background */}
            <rect width="360" height="180" fill="transparent" />
            {/* Land — palette: soft wine fill (#7b445a), ocean stroke (#114665) */}
            <path
              d={LAND_PATH}
              fill="rgba(123, 68, 90, 0.07)"
              stroke="rgba(17, 70, 101, 0.3)"
              strokeWidth={0.38}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* City pins — travel pin shape, small */}
            {CITIES.map((city) => {
              const { x, y } = lonLatToXY(city.lon, city.lat)
              const isOpen = openCityId === city.id
              const fill = isOpen ? '#720f32' : '#114665'
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
                  {/* Subtle shadow for depth (point-down pin) */}
                  <path
                    d={PIN_PATH}
                    fill="rgba(0,0,0,0.1)"
                    transform="scale(1,-1) translate(0.35, 0.28)"
                    pointerEvents="none"
                  />
                  {/* Travel pin — point facing down */}
                  <path
                    d={PIN_PATH}
                    fill={fill}
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

        {/* Dropdown: restaurants for selected city */}
        {openCity && (
          <div
            className="mt-4 rounded-sm bg-midnight/96 backdrop-blur-sm px-5 py-4 shadow-xl border border-black/10 max-w-md mx-auto animate-fade-in"
            role="region"
            aria-label={`Restaurants in ${openCity.cityName}`}
          >
            <p className="font-playfair text-base font-medium text-white tracking-tight">
              {openCity.cityName}
            </p>
            <p className="text-white/85 text-metadata mt-1 leading-relaxed">
              {openCity.restaurants}
            </p>
            <Link
              href="/ranking-guide"
              className="inline-block mt-3 text-white/95 text-metadata border-b border-white/60 pb-0.5 hover:border-white transition-colors"
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
