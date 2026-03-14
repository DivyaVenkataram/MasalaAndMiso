'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const cities = [
  { id: 'sf', name: 'San Francisco', x: 18, y: 38, slug: 'san-francisco' },
  { id: 'nyc', name: 'New York', x: 52, y: 32, slug: 'new-york' },
  { id: 'tokyo', name: 'Tokyo', x: 82, y: 28, slug: 'tokyo' },
  { id: 'mumbai', name: 'Mumbai', x: 68, y: 42, slug: 'mumbai' },
]

const OCEAN = '#114665'

export default function EditorMap() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<Record<string, boolean>>({})
  const [selected, setSelected] = useState<string | null>(null)

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
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible.root) return
    const timeouts = cities.map((c, i) =>
      setTimeout(() => setVisible((v) => ({ ...v, [c.id]: true })), 200 + i * 180)
    )
    return () => timeouts.forEach(clearTimeout)
  }, [visible.root])

  return (
    <section ref={ref} className="relative py-section overflow-hidden section-after-image">
      <div className="max-w-layout mx-auto px-8 mb-6">
        <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight text-center mb-3 tracking-tight">
          Where We&apos;ve Dined
        </h2>
        <p className="text-midnight/80 text-center max-w-xl mx-auto text-[18px] leading-[1.6]">
          Cities we return to. Click a dot for our picks.
        </p>
      </div>

      {/* Map fused to section background — no box, countries in dark blue */}
      <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] px-4 sm:px-8">
        <svg
          viewBox="0 0 100 50"
          className="w-full h-full"
          fill="none"
          stroke={OCEAN}
          strokeWidth="0.55"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M 8 12 L 12 8 L 18 15 L 20 28 L 18 42 L 22 48 L 20 38 L 24 28 L 28 18 Z" />
          <path d="M 26 22 L 30 35 L 28 45 L 32 48 L 35 38 L 38 28 Z" />
          <path d="M 42 8 L 48 12 L 50 22 L 48 28 L 52 38 L 50 45 L 48 42 L 45 32 Z" />
          <path d="M 48 32 L 50 42 L 52 48 L 55 42 L 54 35 Z" />
          <path d="M 55 10 L 62 8 L 72 12 L 85 10 L 92 18 L 90 28 L 88 38 L 92 45 L 88 42 L 82 35 L 75 28 L 68 22 L 58 18 Z" />
          <path d="M 78 42 L 88 40 L 92 45 L 88 48 L 82 45 Z" />
        </svg>

        {cities.map((city) => (
          <button
            key={city.id}
            type="button"
            onClick={() => setSelected(selected === city.id ? null : city.id)}
            className="absolute w-3.5 h-3.5 -ml-[7px] -mt-[7px] rounded-full border-2 border-ocean bg-ocean/90 shadow-md animate-pulse-glow transition-all duration-300 hover:border-burgundy hover:scale-110 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2 focus:ring-offset-[#f3f3f5]"
            style={{
              left: `${city.x}%`,
              top: `${city.y}%`,
              opacity: visible[city.id] ? 1 : 0,
              transform: visible[city.id] ? 'scale(1)' : 'scale(0)',
            }}
            aria-label={`${city.name} — view restaurants`}
          >
            {selected === city.id && (
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap z-10">
                <Link
                  href="/ranking-guide"
                  className="inline-block text-white text-metadata bg-midnight/95 hover:bg-burgundy px-3 py-2 link-editorial rounded-sm"
                  style={{ backgroundImage: 'none' }}
                >
                  View rankings →
                </Link>
              </span>
            )}
          </button>
        ))}
      </div>

      <p className="text-metadata text-midnight/60 text-center mt-6">
        San Francisco · New York · Tokyo · Mumbai
      </p>
    </section>
  )
}
