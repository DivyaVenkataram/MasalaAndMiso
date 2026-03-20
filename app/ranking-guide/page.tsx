'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { RankingStylePageHero } from '@/components/RankingStylePageHero'

const restaurants = [
  {
    rank: '01',
    title: 'Sushi Shin',
    location: 'Tokyo, Japan',
    cuisine: 'Japanese',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
    slug: null as string | null,
  },
  {
    rank: '02',
    title: 'Providence',
    location: 'Los Angeles',
    cuisine: 'Seafood',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    slug: null as string | null,
  },
  {
    rank: '03',
    title: 'Benu',
    location: 'San Francisco',
    cuisine: 'Contemporary',
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    slug: null as string | null,
  },
  {
    rank: '04',
    title: 'Narisawa',
    location: 'Tokyo, Japan',
    cuisine: 'Modern Japanese',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    slug: null as string | null,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const SORT_OPTIONS = [
  { value: 'rank', label: 'Default rank' },
  { value: 'name', label: 'Name A–Z' },
  { value: 'city', label: 'City A–Z' },
] as const

const selectClass =
  'min-w-[120px] cursor-pointer appearance-none border-0 border-b border-white/20 bg-transparent pb-2 pr-8 text-[17px] text-white/90 transition-colors hover:border-burgundy focus:border-burgundy focus:outline-none'

export default function RankingGuidePage() {
  const [location, setLocation] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [sort, setSort] = useState<(typeof SORT_OPTIONS)[number]['value']>('rank')
  const [scope, setScope] = useState('')

  const locationOptions = useMemo(
    () => ['', ...Array.from(new Set(restaurants.map((r) => r.location))).sort()],
    []
  )
  const cuisineOptions = useMemo(
    () => ['', ...Array.from(new Set(restaurants.map((r) => r.cuisine))).sort()],
    []
  )

  const filtered = useMemo(() => {
    let list = restaurants.filter((r) => {
      if (location && r.location !== location) return false
      if (cuisine && r.cuisine !== cuisine) return false
      return true
    })
    if (scope === 'top3') {
      list = list.filter((r) => parseInt(r.rank, 10) <= 3)
    }
    if (sort === 'name') {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title))
    } else if (sort === 'city') {
      list = [...list].sort((a, b) => a.location.localeCompare(b.location))
    }
    return list
  }, [location, cuisine, sort, scope])

  const showReset = Boolean(location || cuisine || sort !== 'rank' || scope)

  return (
    <main className="bg-[#04152c] text-stone-100">
      <RankingStylePageHero
        imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Restaurant interior"
        eyebrow="Archive of places worth returning to"
        title="RANKING GUIDE"
        description="Where we've dined. Collected slowly. Ranked with bias, memory, and a little obsession."
        blendColor="#04152c"
        cta={{ href: '#guide', label: 'Explore rankings' }}
      />

      {/* Filter bar — matches /posts journal filters */}
      <section id="guide" className="filters sticky top-[72px] z-40 bg-[#04152c]">
        <div className="mx-auto flex w-full max-w-7xl justify-center px-3 py-3 sm:px-4">
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <span className="shrink-0 text-[12px] uppercase tracking-[0.28em] text-white/60">
              Filter By
            </span>

            <div className="relative">
              <label htmlFor="guide-sort" className="sr-only">
                Sort by
              </label>
              <select
                id="guide-sort"
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value as (typeof SORT_OPTIONS)[number]['value'])
                }
                className={selectClass}
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <span
                className="pointer-events-none absolute right-1 top-[45%] h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-r border-white/70"
                aria-hidden
              />
            </div>

            <div className="relative">
              <label htmlFor="guide-location" className="sr-only">
                Location
              </label>
              <select
                id="guide-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={selectClass}
              >
                <option value="">All locations</option>
                {locationOptions
                  .filter(Boolean)
                  .map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
              </select>
              <span
                className="pointer-events-none absolute right-1 top-[45%] h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-r border-white/70"
                aria-hidden
              />
            </div>

            <div className="relative">
              <label htmlFor="guide-cuisine" className="sr-only">
                Cuisine
              </label>
              <select
                id="guide-cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className={selectClass}
              >
                <option value="">All cuisines</option>
                {cuisineOptions
                  .filter(Boolean)
                  .map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
              </select>
              <span
                className="pointer-events-none absolute right-1 top-[45%] h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-r border-white/70"
                aria-hidden
              />
            </div>

            <div className="relative">
              <label htmlFor="guide-scope" className="sr-only">
                List scope
              </label>
              <select
                id="guide-scope"
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                className={selectClass}
              >
                <option value="">All entries</option>
                <option value="top3">Top 3 only</option>
              </select>
              <span
                className="pointer-events-none absolute right-1 top-[45%] h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-r border-white/70"
                aria-hidden
              />
            </div>

            {showReset && (
              <motion.button
                type="button"
                onClick={() => {
                  setLocation('')
                  setCuisine('')
                  setSort('rank')
                  setScope('')
                }}
                className="shrink-0 cursor-pointer border-0 bg-transparent text-[12px] uppercase tracking-[0.28em] text-white/60 underline underline-offset-2 transition-colors hover:text-burgundy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Reset
              </motion.button>
            )}
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="relative px-4 pb-28 pt-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-8">
          {filtered.length === 0 && (
            <div className="py-24 text-center text-white/70">
              <p className="text-lg">No restaurants match the selected filters.</p>
              <button
                type="button"
                onClick={() => {
                  setLocation('')
                  setCuisine('')
                  setSort('rank')
                  setScope('')
                }}
                className="mt-4 border-0 bg-transparent text-white/90 underline underline-offset-2 decoration-white/50 transition-colors hover:text-burgundy hover:decoration-burgundy"
              >
                Clear filters
              </button>
            </div>
          )}
          {filtered.map((item, i) => (
            <motion.article
              key={item.rank}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-sm border border-white/8 bg-white/[0.03]"
            >
              {/* glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              </div>

              <div className="grid items-stretch md:grid-cols-[120px_1.2fr_1fr]">
                {/* rank */}
                <div className="flex items-center justify-center border-b border-white/8 p-6 md:border-b-0 md:border-r md:border-white/8">
                  <span className="font-playfair text-4xl text-stone-400/80 transition duration-500 group-hover:scale-110 group-hover:text-stone-200">
                    {item.rank}
                  </span>
                </div>

                {/* image */}
                <div className="relative min-h-[260px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/30" />
                </div>

                {/* content */}
                <div className="flex flex-col justify-between p-8 md:p-10">
                  <div>
                    <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-stone-400">
                      {item.cuisine}
                    </p>

                    <h2 className="font-playfair text-3xl leading-tight text-stone-50 md:text-4xl">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-sm text-stone-300">{item.location}</p>

                    <p className="mt-6 max-w-md text-sm leading-7 text-stone-300/85">
                      A more dramatic, editorial card layout instantly makes the
                      guide feel curated rather than placeholder. Add real copy
                      later and this will look much more intentional.
                    </p>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={item.slug ? `/posts/${item.slug}` : '#'}
                      className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-4 py-2.5 text-sm text-stone-100 transition group-hover:gap-3 hover:border-burgundy hover:bg-burgundy/30"
                    >
                      View full review
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}
