'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  CALIFORNIA_PATH,
  NEW_YORK_PATH,
  JAPAN_PATHS,
  SPAIN_PATH,
} from '@/data/mapShapes'

const PALETTE = {
  midnight: '#16202b',
  ocean: '#114665',
  burgundy: '#720f32',
  wine: '#7b445a',
  neutral: '#d1d1d6',
} as const

type Region = {
  id: string
  name: string
  cityName: string
  path: string
  fill: string
  x: number
  y: number
  scale: number
  markerX: number
  markerY: number
  restaurants: string[]
}

const REGIONS: Region[] = [
  {
    id: 'ca',
    name: 'California',
    cityName: 'San Francisco',
    path: CALIFORNIA_PATH,
    fill: PALETTE.ocean,
    x: 50,
    y: 120,
    scale: 2.4,
    markerX: 32,
    markerY: 38,
    restaurants: ['Nari', 'Snail Bar', 'Tiya', 'F.O.B. Kitchen'],
  },
  {
    id: 'ny',
    name: 'New York',
    cityName: 'New York City',
    path: NEW_YORK_PATH,
    fill: PALETTE.wine,
    x: 220,
    y: 25,
    scale: 1.8,
    markerX: 52,
    markerY: 78,
    restaurants: ['Le Bernardin', 'Atomix', 'and more'],
  },
  {
    id: 'japan',
    name: 'Japan',
    cityName: 'Tokyo',
    path: JAPAN_PATHS,
    fill: PALETTE.burgundy,
    x: 400,
    y: 90,
    scale: 2.2,
    markerX: 54,
    markerY: 42,
    restaurants: ['Jiro', 'Narisawa', "and the city's best"],
  },
  {
    id: 'spain',
    name: 'Spain',
    cityName: 'Madrid',
    path: SPAIN_PATH,
    fill: 'rgba(22, 32, 43, 0.82)',
    x: 340,
    y: 270,
    scale: 2.3,
    markerX: 50,
    markerY: 45,
    restaurants: ['Coming soon'],
  },
]

export default function EditorMap() {
  const ref = useRef<HTMLSectionElement>(null)
  const [visible, setVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [openId, setOpenId] = useState<string | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVisible(true)
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openRegion = openId ? REGIONS.find((r) => r.id === openId) : null
  const parallax = ref.current ? Math.min(1, scrollY * 0.0003) * 8 : 0

  return (
<<<<<<< HEAD
    <section
      ref={ref}
      className="relative py-16 sm:py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #d1d1d6 0%, #e2e3e7 50%, #d1d1d6 100%)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease-out',
      }}
    >
      <div className="max-w-layout mx-auto px-6 sm:px-8 mb-10">
=======
    <section ref={ref} className="relative pt-8 sm:pt-10 pb-0 overflow-hidden bg-page">
      <div className="max-w-layout mx-auto px-6 sm:px-8 mb-3">
>>>>>>> 90a9996f89c75e1225e318133016f5db3156267d
        <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight text-center mb-2 tracking-tight">
          Where We&apos;ve Dined
        </h2>
        <p className="text-midnight/80 text-center max-w-xl mx-auto text-[18px] leading-[1.6]">
          California, New York, Japan, Spain. Click a region for our picks.
        </p>
      </div>

<<<<<<< HEAD
      <div className="relative w-full max-w-[70%] mx-auto" style={{ aspectRatio: '620/500', maxWidth: 720 }}>
        <svg
          viewBox="0 0 620 500"
          className="w-full h-full block overflow-visible"
          style={{
            transform: `translateY(${parallax}px)`,
            transition: 'transform 0.2s ease-out',
          }}
          aria-label="Regions we feature"
        >
          {REGIONS.map((region) => {
            const isHovered = hoveredId === region.id
            const isOpen = openId === region.id
            const scale = region.scale * (isHovered ? 1.05 : 1)
            const filter = isHovered ? 'brightness(1.08)' : 'brightness(1)'
            return (
              <g
                key={region.id}
                transform={`translate(${region.x}, ${region.y}) scale(${scale}) translate(-50, -50)`}
                style={{ transition: 'transform 0.35s ease-out, filter 0.3s ease-out', filter }}
                onMouseEnter={() => setHoveredId(region.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setOpenId(isOpen ? null : region.id)}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setOpenId(isOpen ? null : region.id)
                  }
                }}
                aria-label={`${region.cityName}: ${region.restaurants.join(', ')}`}
              >
                <path
                  d={region.path}
                  fill={region.fill}
                  stroke="none"
                  pointerEvents="all"
                  style={{ transition: 'fill 0.2s ease-out' }}
                />
                {isHovered && (
                  <circle
                    cx={region.markerX}
                    cy={region.markerY}
                    r="2.5"
                    fill={PALETTE.neutral}
                    className="map-marker-pulse"
                    style={{
                      filter: 'drop-shadow(0 0 6px rgba(209, 209, 214, 0.9))',
                      pointerEvents: 'none',
                    }}
                  />
                )}
              </g>
            )
          })}
        </svg>

        {/* Floating dropdown panel — centered, fade + slide up */}
        {openRegion && (
          <div
            className="absolute z-20 left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-[min(280px,90vw)]"
            style={{ padding: 0 }}
          >
            <div
              className="rounded-xl map-panel-in"
              style={{
                background: 'rgba(248, 246, 242, 0.96)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                padding: '20px 24px',
              }}
=======
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
>>>>>>> 90a9996f89c75e1225e318133016f5db3156267d
            >
              <p className="font-playfair text-lg font-medium text-midnight tracking-tight">
                {openRegion.cityName}
              </p>
              <ul className="font-editorial text-midnight/90 mt-2 space-y-1 text-[16px] leading-relaxed">
                {openRegion.restaurants.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <Link
                href="/ranking-guide"
                className="inline-block mt-4 text-ocean font-editorial text-[15px] border-b border-ocean/50 pb-0.5 hover:border-ocean transition-colors"
              >
                View rankings →
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
