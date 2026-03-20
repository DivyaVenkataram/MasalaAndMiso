'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowUpRight } from 'lucide-react'

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

export default function RankingGuidePage() {
  return (
    <main className="bg-[#04152c] text-stone-100">
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[760px] overflow-hidden">
        {/* parallax-like background */}
        <motion.div
          initial={{ scale: 1.08, y: 0 }}
          animate={{ scale: 1, y: -30 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80"
            alt="Restaurant interior"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* dark overlays */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#04152c]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#04152c] to-transparent" />

        {/* soft spotlight */}
        <div className="absolute left-1/2 top-[58%] h-[420px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

        {/* HERO TEXT */}
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mb-4 text-[10px] uppercase tracking-[0.45em] text-stone-300/80"
          >
            Archive of places worth returning to
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.9 }}
            className="max-w-6xl font-playfair text-[clamp(4rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.04em] text-stone-50"
          >
            RANKING GUIDE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-4 max-w-xl text-sm text-stone-200/85 md:text-base"
          >
            Where we&apos;ve dined. Collected slowly. Ranked with bias,
            memory, and a little obsession.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10"
          >
            <Link
              href="#guide"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/8 px-5 py-3 text-sm text-white backdrop-blur-md transition hover:bg-white/14"
            >
              Explore rankings
              <span className="transition group-hover:translate-y-0.5">↓</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section
        id="guide"
        className="relative z-30 -mt-20 px-4 pb-10 sm:px-6 lg:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <div className="sticky top-5 z-40 rounded-[28px] border border-white/10 bg-[rgba(5,20,40,0.68)] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <div className="grid gap-3 md:grid-cols-[180px_1fr_1fr_1fr]">
              <div className="flex items-center px-3 text-[11px] uppercase tracking-[0.35em] text-stone-400">
                Filter by
              </div>

              {['All locations', 'All cuisines', 'All'].map((item) => (
                <button
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-left text-sm text-stone-100 transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <span>{item}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-stone-400" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="relative px-4 pb-28 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-8">
          {restaurants.map((item, i) => (
            <motion.article
              key={item.rank}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[34px] border border-white/8 bg-white/[0.03]"
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
                      className="inline-flex items-center gap-2 text-sm text-stone-100 transition group-hover:gap-3"
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
