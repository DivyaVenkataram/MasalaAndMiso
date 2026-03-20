'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMemo, useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stories, type Story } from '@/data/stories'

const locationOptions = ['', ...Array.from(new Set(stories.map((s) => s.city))).sort()]
const cuisineOptions = ['', ...Array.from(new Set(stories.map((s) => s.cuisine))).sort()]
const readTimeOptions = ['', ...Array.from(new Set(stories.map((s) => s.readTime))).sort()]

const SORT_OPTIONS = [
  { value: 'recent', label: 'Most recent' },
  { value: 'popular', label: 'Most popular reads' },
  { value: 'oldest', label: 'From oldest' },
] as const

const MONTH_ORDER: Record<string, number> = {
  January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
  July: 7, August: 8, September: 9, October: 10, November: 11, December: 12,
}

function parseDateKey(dateStr: string): number {
  const [month, year] = dateStr.split(' ')
  const y = parseInt(year || '0', 10)
  const m = MONTH_ORDER[month || ''] ?? 0
  return y * 12 + m
}

function parseReadTimeMinutes(readTime: string): number {
  const n = parseInt(readTime.replace(/\D/g, ''), 10)
  return isNaN(n) ? 0 : n
}

function formatPostTitle(title: string): ReactNode {
  const i = title.indexOf(': ')
  if (i === -1) return <span className="block uppercase">{title}</span>
  const restaurant = title.slice(0, i).toUpperCase()
  const subtitle = title.slice(i + 2).toLowerCase()
  return (
    <>
      <span className="block uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
        {restaurant}
      </span>
      <span className="block text-lg sm:text-xl md:text-2xl font-normal leading-snug mt-1 opacity-95">
        {subtitle}
      </span>
    </>
  )
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.25 } },
}

export default function PostsPage() {
  const [location, setLocation] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [readTime, setReadTime] = useState('')
  const [sort, setSort] = useState<'recent' | 'popular' | 'oldest'>('recent')

  const filtered = useMemo(() => {
    let list = stories.filter((story) => {
      if (location && story.city !== location) return false
      if (cuisine && story.cuisine !== cuisine) return false
      if (readTime && story.readTime !== readTime) return false
      return true
    })
    const dateKey = (s: Story) => parseDateKey(s.date)
    const readMins = (s: Story) => parseReadTimeMinutes(s.readTime)
    if (sort === 'recent') list = [...list].sort((a, b) => dateKey(b) - dateKey(a))
    else if (sort === 'oldest') list = [...list].sort((a, b) => dateKey(a) - dateKey(b))
    else if (sort === 'popular') list = [...list].sort((a, b) => readMins(b) - readMins(a))
    return list
  }, [location, cuisine, readTime, sort])

  return (
    <main className="bg-[#0a1628]">
      {/* Hero — full viewport, zoom-in */}
      <section className="relative h-[100svh] min-h-[760px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08, y: 0 }}
          animate={{ scale: 1, y: -30 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a1628]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0a1628] to-transparent" />
        <div className="absolute left-1/2 top-[58%] h-[420px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <motion.h1
            className="hero-title font-playfair font-medium mb-3 uppercase"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            THE JOURNAL
          </motion.h1>
          <motion.p
            className="text-white/90 text-[18px] sm:text-xl leading-[1.6]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Dispatches from the table. Long-form reviews and stories.
          </motion.p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="filters sticky top-[72px] z-40 bg-[#0a1628]">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-3 flex justify-center">
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <span className="text-[12px] uppercase tracking-[0.28em] text-white/60 shrink-0">
              Filter By
            </span>

            <div className="relative">
              <label htmlFor="posts-sort" className="sr-only">Sort by</label>
              <select
                id="posts-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as 'recent' | 'popular' | 'oldest')}
                className="appearance-none bg-transparent border-0 border-b border-white/20 pr-8 pb-2 text-[17px] text-white/90 focus:outline-none focus:border-white/45 hover:border-white/35 transition cursor-pointer min-w-[120px]"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-1 top-[45%] h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-r border-white/70" aria-hidden />
            </div>

            <div className="relative">
              <label htmlFor="posts-location" className="sr-only">Location</label>
              <select
                id="posts-location"
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
              <label htmlFor="posts-cuisine" className="sr-only">Cuisine</label>
              <select
                id="posts-cuisine"
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
              <label htmlFor="posts-readtime" className="sr-only">Read time</label>
              <select
                id="posts-readtime"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                className="appearance-none bg-transparent border-0 border-b border-white/20 pr-8 pb-2 text-[17px] text-white/90 focus:outline-none focus:border-white/45 hover:border-white/35 transition cursor-pointer min-w-[120px]"
              >
                <option value="">Any length</option>
                {readTimeOptions.filter(Boolean).map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-1 top-[45%] h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-r border-white/70" aria-hidden />
            </div>

            {(location || cuisine || readTime || sort !== 'recent') && (
              <motion.button
                type="button"
                onClick={() => { setLocation(''); setCuisine(''); setReadTime(''); setSort('recent') }}
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

      <section className="relative bg-[#0a1628]">
        <div className="posts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((story, i) => (
              <PostCard key={story.slug} story={story} index={i} />
            ))}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              className="py-24 text-center text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg">No posts match the selected filters.</p>
              <button
                type="button"
                onClick={() => { setLocation(''); setCuisine(''); setReadTime(''); setSort('recent') }}
                className="mt-4 text-white/90 hover:text-white underline underline-offset-2 decoration-white/50"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  )
}

function PostCard({ story, index }: { story: Story; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={index}
      className="aspect-[4/5]"
    >
      <Link
        href={`/posts/${story.slug}`}
        className="card group relative block w-full h-full overflow-hidden"
      >
        <Image
          src={story.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Dark blue overlay — disappears on hover */}
        <div className="absolute inset-0 bg-midnight/60 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" aria-hidden />
        {/* Location + read time — white; hide on hover */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-5 flex items-center justify-between pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
          <span className="text-white text-lg sm:text-[19px] uppercase tracking-wider font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">{story.city}</span>
          <span className="text-white text-base sm:text-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">{story.readTime}</span>
        </div>
        {/* Title — bottom left; restaurant larger, subtitle smaller; white; hide on hover */}
        <div className="absolute inset-0 flex items-end justify-start px-5 py-5 sm:px-8 sm:py-8 pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
          <h2 className="font-playfair text-white tracking-tight text-left max-w-full break-words drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] [&_span]:block">
            {formatPostTitle(story.title)}
          </h2>
        </div>
        {/* "Read →" — white; visible only on hover */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="font-playfair text-xl sm:text-2xl text-white font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Read →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
