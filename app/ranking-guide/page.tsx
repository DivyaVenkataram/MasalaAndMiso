'use client'

import { useMemo, useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
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

function scoreColor(score: number): string {
  if (score >= 8) return '#720f32'
  if (score >= 5) return '#114665'
  if (score >= 3) return '#7b445a'
  return 'rgba(123,68,90,0.5)'
}

function RankingGuideContent() {
  const searchParams = useSearchParams()
  const [location, setLocation] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [stars, setStars] = useState('')

  useEffect(() => {
    const loc = searchParams.get('location')
    if (loc && locationOptions.includes(loc)) setLocation(loc)
  }, [searchParams])

  const filtered = useMemo(() => {
    const list = rankingsData.filter((row) => {
      if (location && row.location !== location) return false
      if (cuisine && row.cuisine !== cuisine) return false
      if (stars && getStarsValue(row.michelin) !== stars) return false
      return true
    })
    // Most recent first (higher id = more recently added)
    return [...list].sort((a, b) => Number(b.id) - Number(a.id))
  }, [location, cuisine, stars])

  return (
    <main className="min-h-screen bg-[#f3f0ea] ranking-guide-page">
      <section className="relative pt-28 pb-section px-8 flex flex-col items-center justify-center min-h-[50vh] bg-cover bg-center overflow-hidden image-fade-to-page">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60" />
        <h1 className="relative z-10 font-playfair text-4xl sm:text-5xl font-medium text-white text-center mb-3 tracking-tight">
          Ranking Guide
        </h1>
        <p className="relative z-10 text-white/90 text-center max-w-lg text-[18px] leading-[1.6]">
          Where we&apos;ve dined. Click for the full review.
        </p>
      </section>

      <div className="ranking-guide-cream w-full">
        <div className="section-after-image py-section px-6 sm:px-8 max-w-4xl mx-auto">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3 mb-10 pb-4 border-b border-black/[0.08]">
          <div className="flex items-baseline gap-2">
            <span className="text-midnight/60 text-metadata uppercase tracking-wider">Location</span>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent border-none border-b border-midnight/30 py-0.5 pr-6 text-midnight text-filter focus:outline-none focus:border-ocean cursor-pointer appearance-none rounded-none"
              style={{ borderBottomWidth: '1px' }}
            >
              {locationOptions.map((opt) => (
                <option key={opt || 'all'} value={opt}>{opt || 'All'}</option>
              ))}
            </select>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-midnight/60 text-metadata uppercase tracking-wider">Cuisine</span>
            <select
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              className="bg-transparent border-none border-b border-midnight/30 py-0.5 pr-6 text-midnight text-filter focus:outline-none focus:border-ocean cursor-pointer appearance-none rounded-none"
              style={{ borderBottomWidth: '1px' }}
            >
              {cuisineOptions.map((opt) => (
                <option key={opt || 'all'} value={opt}>{opt || 'All'}</option>
              ))}
            </select>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-midnight/60 text-metadata uppercase tracking-wider">Michelin</span>
            <select
              value={stars}
              onChange={(e) => setStars(e.target.value)}
              className="bg-transparent border-none border-b border-midnight/30 py-0.5 pr-6 text-midnight text-filter focus:outline-none focus:border-ocean cursor-pointer appearance-none rounded-none"
              style={{ borderBottomWidth: '1px' }}
            >
              {starsOptions.map((opt) => (
                <option key={opt || 'all'} value={opt}>{opt || 'All'}</option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => { setLocation(''); setCuisine(''); setStars('') }}
            className="text-ocean link-editorial text-metadata uppercase tracking-wider"
          >
            Reset
          </button>
        </div>

        <ul className="space-y-0">
          {filtered.map((row, index) => {
            const score = parseScore(row.rating)
            const hasPost = Boolean(row.postSlug)
            const isPlaceholder = row.restaurant === 'Placeholder'
            const rowClassName = `flex gap-6 items-center py-5 border-b border-black/[0.06] last:border-b-0 transition-colors duration-200 ${hasPost ? 'group hover:bg-black/[0.02] cursor-pointer' : ''}`

            const inner = (
              <>
                <span className="font-playfair text-2xl font-medium text-midnight/30 shrink-0 w-10">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {row.image && (
                  <div className="relative w-20 h-20 shrink-0 rounded overflow-hidden bg-midnight/10">
                    <Image src={row.image} alt="" fill className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0" sizes="80px" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h2 className="font-playfair text-xl font-medium text-midnight">
                    {row.restaurant}
                  </h2>
                  <p className="text-midnight/60 text-metadata mt-0.5">
                    {row.location}{row.cuisine !== '—' ? ` · ${row.cuisine}` : ''}
                    {row.michelin !== '—' && ` · ${row.michelin}`}
                  </p>
                </div>
                {!isPlaceholder && (
                  <span
                    className="font-medium text-metadata shrink-0 tabular-nums"
                    style={{ color: scoreColor(score) }}
                  >
                    {row.rating}/10
                  </span>
                )}
                {hasPost && (
                  <span className="text-ocean text-metadata shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                    Read →
                  </span>
                )}
              </>
            )

            return (
              <li key={row.id}>
                {hasPost ? (
                  <Link href={`/posts/${row.postSlug!}`} className={rowClassName}>
                    {inner}
                  </Link>
                ) : (
                  <div className={rowClassName}>{inner}</div>
                )}
              </li>
            )
          })}
        </ul>
        </div>
      </div>

      <section className="relative w-full min-h-[40vh] bg-cover bg-center image-fade-to-page">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')` }}
        />
      </section>
    </main>
  )
}

export default function RankingGuidePage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#f3f3f5]" />}>
      <RankingGuideContent />
    </Suspense>
  )
}