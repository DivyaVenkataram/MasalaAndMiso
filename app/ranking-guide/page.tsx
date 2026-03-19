'use client'

import { useMemo, useState, useEffect, useRef, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
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
  if (score >= 8) return '#e8a4b8'
  if (score >= 5) return '#7eb8d4'
  if (score >= 3) return '#b8a4b0'
  return 'rgba(255,255,255,0.5)'
}

const stagger = 0.06
const listVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * stagger, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

function RankingGuideContent() {
  const searchParams = useSearchParams()
  const [location, setLocation] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [stars, setStars] = useState('')
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '28%'])
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0.25])
  const titleY = useTransform(heroProgress, [0, 0.4], [0, 60])

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
    return [...list].sort((a, b) => Number(b.id) - Number(a.id))
  }, [location, cuisine, stars])

  return (
    <main className="min-h-screen bg-[#0a1628]">
      {/* Hero — same structure as posts */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[55vh] pt-28 pb-section px-8 flex flex-col items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')`,
            y: heroY,
          }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.4) 28%, transparent 48%, transparent 58%, rgba(10,22,40,0.6) 80%, #0a1628 100%)',
          }}
          aria-hidden
        />
        <motion.div
          className="relative z-10 text-center max-w-2xl"
          style={{ opacity: heroOpacity, y: titleY }}
        >
          <motion.h1
            className="hero-title font-playfair font-medium mb-3 uppercase whitespace-nowrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            RANKING GUIDE
          </motion.h1>
          <motion.p
            className="text-white/90 text-[18px] sm:text-xl leading-[1.6]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Where we&apos;ve dined. Click for the full review.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Filter bar — match posts */}
      <section className="filters sticky top-[72px] z-40 bg-[#0a1628]">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-3 flex justify-center">
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <span className="text-[12px] uppercase tracking-[0.28em] text-white/60 shrink-0">
              Filter By
            </span>

            <div className="relative">
              <label htmlFor="rg-location" className="sr-only">Location</label>
              <select
                id="rg-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="appearance-none bg-transparent border-0 border-b border-white/20 pr-8 pb-2 text-[17px] text-white/90 focus:outline-none focus:border-white/45 hover:border-white/35 transition cursor-pointer min-w-[120px]"
              >
                <option value="">All locations</option>
                {locationOptions.filter(Boolean).map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-1 top-[45%] h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-r border-white/70" aria-hidden />
            </div>

            <div className="relative">
              <label htmlFor="rg-cuisine" className="sr-only">Cuisine</label>
              <select
                id="rg-cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className="appearance-none bg-transparent border-0 border-b border-white/20 pr-8 pb-2 text-[17px] text-white/90 focus:outline-none focus:border-white/45 hover:border-white/35 transition cursor-pointer min-w-[120px]"
              >
                <option value="">All cuisines</option>
                {cuisineOptions.filter(Boolean).map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-1 top-[45%] h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-r border-white/70" aria-hidden />
            </div>

            <div className="relative">
              <label htmlFor="rg-michelin" className="sr-only">Michelin</label>
              <select
                id="rg-michelin"
                value={stars}
                onChange={(e) => setStars(e.target.value)}
                className="appearance-none bg-transparent border-0 border-b border-white/20 pr-8 pb-2 text-[17px] text-white/90 focus:outline-none focus:border-white/45 hover:border-white/35 transition cursor-pointer min-w-[120px]"
              >
                <option value="">All</option>
                {starsOptions.filter(Boolean).map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-1 top-[45%] h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-r border-white/70" aria-hidden />
            </div>

            {(location || cuisine || stars) && (
              <motion.button
                type="button"
                onClick={() => { setLocation(''); setCuisine(''); setStars('') }}
                className="text-[12px] uppercase tracking-[0.28em] text-white/60 hover:text-white/90 transition-opacity underline underline-offset-2 shrink-0 cursor-pointer bg-transparent border-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Reset
              </motion.button>
            )}
          </div>
        </div>
      </section>

      {/* List — dark background, full-width content area */}
      <section className="relative bg-[#0a1628]">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <ul className="space-y-0">
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.map((row, index) => {
                const score = parseScore(row.rating)
                const hasPost = Boolean(row.postSlug)
                const isPlaceholder = !row.postSlug && row.rating === '—'
                const rowClassName = `flex gap-5 sm:gap-6 items-center py-6 border-b border-white/[0.08] last:border-b-0 transition-colors duration-200 ${hasPost ? 'group cursor-pointer' : ''} ${hasPost ? 'hover:bg-white/[0.04]' : ''}`

                const inner = (
                  <>
                    <span className="font-playfair text-2xl font-medium text-white/40 shrink-0 w-10 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {row.image && (
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded overflow-hidden bg-midnight/20">
                        <Image src={row.image} alt="" fill className="object-cover" sizes="112px" />
                        <div className="absolute inset-0 bg-midnight/60 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" aria-hidden />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h2 className="font-playfair text-xl sm:text-2xl font-medium text-white">
                        {row.restaurant}
                      </h2>
                      <p className="text-white/60 text-metadata mt-0.5">
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
                      <span className="text-white/70 text-metadata shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                        Read →
                      </span>
                    )}
                  </>
                )

                return (
                  <motion.li
                    key={row.id}
                    layout
                    custom={index}
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {hasPost ? (
                      <Link href={`/posts/${row.postSlug!}`} className={rowClassName}>
                        {inner}
                      </Link>
                    ) : (
                      <div className={rowClassName}>{inner}</div>
                    )}
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </ul>

          <AnimatePresence>
            {filtered.length === 0 && (
              <motion.div
                className="py-24 text-center text-white/70"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg">No restaurants match the selected filters.</p>
                <button
                  type="button"
                  onClick={() => { setLocation(''); setCuisine(''); setStars('') }}
                  className="mt-4 text-white/90 hover:text-white underline underline-offset-2 decoration-white/50"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  )
}

export default function RankingGuidePage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#0a1628]" />}>
      <RankingGuideContent />
    </Suspense>
  )
}
