'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function StatementSection() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const parallaxY = mounted ? scrollY * 0.25 : 0
  const opacity = mounted
    ? scrollY < 400
      ? 0.6 + (scrollY / 400) * 0.4
      : scrollY < 900
        ? 1
        : Math.max(0.5, 1 - (scrollY - 900) / 500)
    : 1
  const scale = mounted ? Math.max(0.98, 1 - scrollY / 5000) : 1

  return (
    <section className="statement-section relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-150 will-change-transform"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80')`,
          transform: `translate3d(0, ${parallaxY * 0.4}px, 0)`,
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/60"
        aria-hidden
      />
      <div
        className="relative z-10 flex flex-col items-center justify-center px-6 py-20 sm:py-28 text-center transition-all duration-300"
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-semibold uppercase tracking-[0.2em] text-white mb-6 leading-tight">
          A Table Between Two Worlds
        </h2>
        <p className="font-playfair text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed tracking-wide mb-10">
          A luxury culinary travel publication—long-form reviews, curated city guides, and a ranking guide so you can reserve with confidence.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/posts"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-midnight font-medium uppercase tracking-[0.18em] text-sm hover:bg-white/95 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Read the Latest
          </Link>
          <Link
            href="/ranking-guide"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium uppercase tracking-[0.18em] text-sm hover:bg-white hover:text-midnight transition-all duration-200"
          >
            Ranking Guide
          </Link>
          <Link
            href="/editors-table"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/70 text-white font-medium uppercase tracking-[0.18em] text-sm hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            Editor&apos;s Table
          </Link>
        </div>
      </div>
    </section>
  )
}
