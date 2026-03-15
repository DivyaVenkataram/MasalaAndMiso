'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')`,
        }}
      />
      {/* Overlay; bottom gradient blends into next section */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/50"
        aria-hidden
      />
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <h1 className="font-playfair text-5xl sm:text-6xl md:text-[72px] font-medium uppercase tracking-[0.15em] text-white mb-4 leading-tight">
          MASALA & MISO
        </h1>
        <p className="font-playfair text-section font-normal text-white/95 mb-8 max-w-2xl mx-auto tracking-normal normal-case">
          Where Michelin cultures meet—elevated dining across borders.
        </p>
        <Link
          href="/posts"
          className="inline-block text-white/95 font-medium text-[18px] border-b border-white/80 pb-1 hover:border-white transition-colors"
        >
          Explore Posts →
        </Link>
      </div>
    </section>
  )
}
