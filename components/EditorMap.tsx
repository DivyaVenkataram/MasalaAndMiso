'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  CALIFORNIA_PATH,
  NEW_YORK_PATH,
  JAPAN_PATHS,
  INDIA_PATH,
} from '@/data/mapShapes'

const STROKE_WIDTH = 1.5

type Place = {
  id: string
  label: string
  cityName: string
  path: string
  picks: string
}

/** Literal icons: California, New York, then whole countries (Japan, India). */
const PLACES: Place[] = [
  {
    id: 'ca',
    label: 'California',
    cityName: 'San Francisco',
    path: CALIFORNIA_PATH,
    picks: 'Nari, Snail Bar, Tiya, F.O.B. Kitchen',
  },
  {
    id: 'ny',
    label: 'New York',
    cityName: 'New York City',
    path: NEW_YORK_PATH,
    picks: 'Le Bernardin, Atomix, and more',
  },
  {
    id: 'japan',
    label: 'Japan',
    cityName: 'Tokyo',
    path: JAPAN_PATHS,
    picks: 'Jiro, Narisawa, and the city\'s best',
  },
  {
    id: 'india',
    label: 'India',
    cityName: 'Mumbai',
    path: INDIA_PATH,
    picks: 'Coming soon',
  },
]

export default function EditorMap() {
  const ref = useRef<HTMLSectionElement>(null)
  const [visible, setVisible] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

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

  return (
    <section ref={ref} className="relative py-section overflow-hidden section-after-image">
      <div className="max-w-layout mx-auto px-6 sm:px-8 mb-8">
        <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight text-center mb-3 tracking-tight">
          Where We&apos;ve Dined
        </h2>
        <p className="text-midnight/80 text-center max-w-xl mx-auto text-[18px] leading-[1.6]">
          California and New York — then Japan and India. Click a place for our picks.
        </p>
      </div>

      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center items-end gap-10 sm:gap-14 transition-opacity duration-700"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {PLACES.map((place) => {
          const isSelected = selectedId === place.id
          const isHovered = hoveredId === place.id
          const showLabel = isSelected || isHovered

          return (
            <div
              key={place.id}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSelectedId(isSelected ? null : place.id)}
                  onMouseEnter={() => setHoveredId(place.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="block w-24 h-24 sm:w-28 sm:h-28 text-ocean hover:text-burgundy transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2 focus:ring-offset-[#f3f3f5] rounded-sm"
                  aria-label={`${place.cityName} — view restaurants`}
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={STROKE_WIDTH}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ overflow: 'visible' }}
                  >
                    <path d={place.path} style={{ vectorEffect: 'non-scaling-stroke' }} strokeWidth={STROKE_WIDTH} />
                  </svg>
                </button>

                {isSelected && (
                  <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2 z-20 w-56 rounded-sm bg-midnight/96 backdrop-blur-sm px-4 py-4 shadow-xl border border-black/10">
                  <p className="font-playfair text-sm font-medium text-white tracking-tight">
                    {place.cityName}
                  </p>
                  <p className="text-white/85 text-metadata mt-1 leading-relaxed">
                    {place.picks}
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

              <span
                className="mt-3 text-metadata font-medium text-midnight text-center transition-opacity duration-200"
                style={{ opacity: showLabel ? 1 : 0.7 }}
              >
                {place.cityName}
              </span>
            </div>
          )
        })}
      </div>

      <p className="text-metadata text-midnight/60 text-center mt-10 px-4">
        San Francisco · New York City · Tokyo · Mumbai
      </p>
    </section>
  )
}
