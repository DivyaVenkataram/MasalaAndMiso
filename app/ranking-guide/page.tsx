'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { rankingsData } from '@/data/rankings'

type Row = (typeof rankingsData)[0]

const locationOptions = ['', 'San Francisco', 'New York', 'Los Angeles', 'Japan']
const cuisineOptions = ['', 'Indian fusion', 'Contemporary Californian', 'Thai / Californian', 'Filipino']
const starsOptions = ['', 'Guide', '1']

function getStarsValue(michelin: string): string {
  if (michelin.startsWith('1')) return '1'
  if (michelin.startsWith('Guide')) return 'Guide'
  return ''
}

function parseScore(rating: string): number {
  const n = parseFloat(rating)
  return isNaN(n) ? 0 : n
}

function ScoreDots({ score }: { score: number }) {
  const filled = Math.round(score)
  const color =
    score >= 8 ? '#720f32' : score >= 5 ? '#114665' : score >= 3 ? '#7b445a' : 'rgba(123,68,90,0.4)'
  return (
    <span className="inline-flex gap-0.5 text-lg tracking-wider" aria-label={`Score ${score} out of 10`}>
      {Array.from({ length: 10 }, (_, i) => (
        <span
          key={i}
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: i < filled ? color : 'rgba(22,32,43,0.2)' }}
        />
      ))}
    </span>
  )
}

export default function RankingGuidePage() {
  const [location, setLocation] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [stars, setStars] = useState('')

  const filtered = useMemo(() => {
    return rankingsData.filter((row) => {
      if (location && row.location !== location) return false
      if (cuisine && row.cuisine !== cuisine) return false
      if (stars && getStarsValue(row.michelin) !== stars) return false
      return true
    })
  }, [location, cuisine, stars])

  return (
    <main className="min-h-screen">
      <section
        className="relative pt-40 pb-32 px-8 flex flex-col items-center justify-center min-h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(22,32,43,0.6), rgba(22,32,43,0.5)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')`,
        }}
      >
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-[3.5rem] font-medium text-white text-center mb-4">
          Ranking Guide
        </h1>
        <p className="text-white/90 text-center max-w-xl text-lg leading-relaxed">
          Where we&apos;ve dined. Filter by place and style—then reserve.
        </p>
      </section>

      <div
        className="max-w-3xl mx-auto px-8 py-24"
        style={{ background: 'linear-gradient(180deg, rgba(209,209,214,0.03) 0%, transparent 100%)' }}
      >
        <div className="flex flex-wrap items-baseline gap-6 mb-20 border-b border-midnight/20 pb-6">
          <div className="flex flex-wrap items-baseline gap-4">
            <label className="text-midnight/80 text-sm uppercase tracking-widest">Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent border-0 border-b-2 border-midnight/40 py-1 pr-8 text-midnight font-editorial text-lg focus:outline-none focus:border-burgundy cursor-pointer appearance-none min-w-[140px]"
              style={{ backgroundImage: 'none' }}
            >
              {locationOptions.map((opt) => (
                <option key={opt || 'all'} value={opt}>{opt || 'All'}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap items-baseline gap-4">
            <label className="text-midnight/80 text-sm uppercase tracking-widest">Cuisine</label>
            <select
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              className="bg-transparent border-0 border-b-2 border-midnight/40 py-1 pr-8 text-midnight font-editorial text-lg focus:outline-none focus:border-burgundy cursor-pointer appearance-none min-w-[180px]"
            >
              {cuisineOptions.map((opt) => (
                <option key={opt || 'all'} value={opt}>{opt || 'All'}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap items-baseline gap-4">
            <label className="text-midnight/80 text-sm uppercase tracking-widest">Michelin</label>
            <select
              value={stars}
              onChange={(e) => setStars(e.target.value)}
              className="bg-transparent border-0 border-b-2 border-midnight/40 py-1 pr-8 text-midnight font-editorial text-lg focus:outline-none focus:border-burgundy cursor-pointer appearance-none min-w-[100px]"
            >
              {starsOptions.map((opt) => (
                <option key={opt || 'all'} value={opt}>{opt || 'All'}</option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => { setLocation(''); setCuisine(''); setStars('') }}
            className="text-ocean link-editorial text-sm uppercase tracking-widest"
          >
            Reset
          </button>
        </div>

        <ul className="space-y-0">
          {filtered.map((row, index) => {
            const score = parseScore(row.rating)
            const isPlaceholder = row.restaurant === 'Placeholder'
            return (
              <li
                key={row.id}
                className="py-12 border-b border-midnight/15 last:border-b-0"
              >
                <span className="font-playfair text-4xl font-medium text-midnight/30 block mb-4">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                  <h2 className="font-playfair text-2xl font-medium text-midnight">
                    {row.restaurant}
                  </h2>
                  <span className="text-midnight/70">{row.city}</span>
                  <span className="text-midnight/60">{row.cuisine}</span>
                </div>
                {row.michelin !== '—' && (
                  <span className="inline-block text-xs uppercase tracking-widest text-wine border border-wine/50 px-2 py-0.5 mb-3">
                    {row.michelin}
                  </span>
                )}
                {!isPlaceholder && (
                  <p className="text-midnight/85 leading-relaxed mb-4 max-w-xl">
                    A table we return to. Refined technique, clear point of view, and a sense of place that stays with you after the last course.
                  </p>
                )}
                {!isPlaceholder && (
                  <div className="flex items-center gap-4">
                    <ScoreDots score={score} />
                    <span className="text-midnight/50 text-sm">{row.rating}/10</span>
                    {row.reserveHref !== '#' && (
                      <Link href={row.reserveHref} className="text-ocean link-editorial text-sm ml-4">
                        Reserve →
                      </Link>
                    )}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}
