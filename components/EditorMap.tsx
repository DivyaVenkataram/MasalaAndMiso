'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const cities = [
  { id: 'sf', name: 'San Francisco', x: 13, y: 32, slug: 'san-francisco' },
  { id: 'nyc', name: 'New York', x: 27, y: 28, slug: 'new-york' },
  { id: 'tokyo', name: 'Tokyo', x: 88, y: 26, slug: 'tokyo' },
  { id: 'mumbai', name: 'Mumbai', x: 68, y: 38, slug: 'mumbai' },
]

const OCEAN = '#114665'

// Simplified equirectangular continent paths (0–100 x 0–50) — recognizable real shapes
const CONTINENTS = [
  // North America (Alaska, Canada, USA, Mexico, Gulf, Florida)
  'M 5 10 L 9 8 L 15 10 L 19 14 L 23 18 L 25 22 L 25 26 L 23 30 L 21 34 L 21 38 L 23 40 L 25 38 L 27 34 L 29 30 L 29 26 L 27 22 L 25 18 L 23 14 L 19 12 L 15 10 L 11 8 L 7 10 L 5 10 Z',
  // South America
  'M 26 34 L 28 32 L 30 35 L 32 39 L 33 43 L 33 48 L 32 50 L 29 50 L 27 47 L 26 42 L 26 37 L 26 34 Z',
  // Europe
  'M 45 14 L 49 12 L 54 14 L 56 18 L 56 24 L 54 28 L 51 30 L 47 28 L 45 24 L 45 18 L 45 14 Z',
  // Africa
  'M 45 24 L 49 22 L 54 24 L 57 28 L 57 36 L 55 42 L 51 46 L 47 44 L 45 38 L 45 30 L 45 24 Z',
  // Asia (with Indian subcontinent)
  'M 51 12 L 57 10 L 67 12 L 79 14 L 91 16 L 98 20 L 99 26 L 96 31 L 90 33 L 82 32 L 76 34 L 72 37 L 68 35 L 64 34 L 60 35 L 56 33 L 54 28 L 52 22 L 51 12 Z',
  // Australia
  'M 77 34 L 83 32 L 89 34 L 93 38 L 92 42 L 87 46 L 81 46 L 77 42 L 75 38 L 77 34 Z',
]

export default function EditorMap() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<Record<string, boolean>>({})
  const [selected, setSelected] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          setVisible((v) => ({ ...v, root: true }))
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible.root) return
    const timeouts = cities.map((c, i) =>
      setTimeout(() => setVisible((v) => ({ ...v, [c.id]: true })), 150 + i * 120)
    )
    return () => timeouts.forEach(clearTimeout)
  }, [visible.root])

  return (
    <section ref={ref} className="relative py-section overflow-hidden section-after-image">
      <div className="max-w-layout mx-auto px-6 sm:px-8 mb-6">
        <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight text-center mb-3 tracking-tight">
          Where We&apos;ve Dined
        </h2>
        <p className="text-midnight/80 text-center max-w-xl mx-auto text-[18px] leading-[1.6]">
          Cities we return to. Click a dot for our picks.
        </p>
      </div>

      {/* Larger map with subtle 3D and realistic continent shapes */}
      <div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6"
        style={{
          perspective: '1400px',
        }}
      >
        <div
          className="relative w-full mx-auto transition-transform duration-700 ease-out"
          style={{
            transform: 'rotateX(4deg) rotateZ(0deg)',
            transformStyle: 'preserve-3d',
            boxShadow: '0 24px 48px -12px rgba(17, 70, 101, 0.15)',
          }}
        >
          <div className="relative w-full aspect-[2/1] min-h-[320px] sm:min-h-[380px]">
            <svg
              viewBox="0 0 100 50"
              className="w-full h-full"
              fill="none"
              stroke={OCEAN}
              strokeWidth="0.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              aria-hidden
            >
              {CONTINENTS.map((d, i) => (
                <path key={i} d={d} />
              ))}
            </svg>

            {cities.map((city) => {
              const isActive = selected === city.id || hovered === city.id
              return (
                <div
                  key={city.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${city.x}%`,
                    top: `${city.y}%`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setSelected(selected === city.id ? null : city.id)}
                    onMouseEnter={() => setHovered(city.id)}
                    onMouseLeave={() => setHovered(null)}
                    className="absolute w-4 h-4 -ml-2 -mt-2 rounded-full border-2 border-ocean bg-ocean/95 shadow-lg animate-pulse-glow transition-all duration-300 hover:border-burgundy hover:scale-125 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2 focus:ring-offset-[#f3f3f5]"
                    style={{
                      opacity: visible[city.id] ? 1 : 0,
                      transform: visible[city.id] ? 'scale(1)' : 'scale(0)',
                    }}
                    aria-label={`${city.name} — view restaurants`}
                  />
                  {/* City label — visible on hover or select */}
                  <span
                    className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-metadata font-medium text-midnight opacity-0 transition-opacity duration-200 pointer-events-none"
                    style={{
                      opacity: isActive ? 1 : 0,
                      zIndex: 10,
                    }}
                  >
                    {city.name}
                  </span>
                  {selected === city.id && (
                    <span className="absolute left-1/2 top-full mt-8 -translate-x-1/2 whitespace-nowrap z-10">
                      <Link
                        href="/ranking-guide"
                        className="inline-block text-white text-metadata bg-midnight/95 hover:bg-burgundy px-3 py-2 rounded-sm transition-colors"
                        style={{ backgroundImage: 'none' }}
                      >
                        View rankings →
                      </Link>
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Legend: city names always visible below map */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 px-4">
        {cities.map((city) => (
          <span
            key={city.id}
            className="text-metadata text-midnight/70"
          >
            {city.name}
          </span>
        ))}
      </div>
    </section>
  )
}
