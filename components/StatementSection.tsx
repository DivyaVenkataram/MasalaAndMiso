'use client'

import Link from 'next/link'

export default function StatementSection() {
  return (
    <section className="statement-section relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80')`,
        }}
      />
      {/* Overlay; top matches homepage hero bottom (#0a0a0a) for a clean handoff */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black/45 to-black/60"
        aria-hidden
      />
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 sm:py-28 text-center">
        <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-semibold uppercase tracking-[0.2em] text-white mb-6 leading-tight">
          A Table Between Two Worlds
        </h2>
        <p className="font-playfair text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed tracking-wide mb-10">
          A luxury culinary travel publication—long-form reviews, curated city guides, and a ranking guide so you can reserve with confidence.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link href="/posts" className="btn-outline-light">
            Read the Latest
          </Link>
          <Link href="/ranking-guide" className="btn-outline-light">
            Ranking Guide
          </Link>
          <Link href="/editors-table" className="btn-outline-light">
            Editor&apos;s Table
          </Link>
        </div>
      </div>
    </section>
  )
}
