'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const drinks = [
  {
    name: "Masala Chai Old Fashioned",
    restaurant: "Tiya",
    theme: "Indian spice meets classic whiskey",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80",
  },
  {
    name: "Yuzu Martini",
    restaurant: "Nari",
    theme: "Thai–Japanese citrus, bracing and clean",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80",
  },
  {
    name: "Californian Spritz",
    restaurant: "Snail Bar",
    theme: "Wine-country aperitivo",
    image: "https://images.unsplash.com/photo-1536935338788-bbb56d6741a0?w=1920&q=80",
  },
  {
    name: "Sake & Umeshu Flight",
    restaurant: "From our Tokyo tables",
    theme: "Edomae discipline in a glass",
    image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1920&q=80",
  },
]

export default function BestDrinksPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '40%'])
  const heroOpacity = useTransform(heroProgress, [0, 0.55], [1, 0.2])
  const titleY = useTransform(heroProgress, [0, 0.45], [0, 100])

  return (
    <main className="bg-midnight">
      {/* Hero — full viewport, parallax */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80')`,
            y: heroY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/65" />
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto"
          style={{ opacity: heroOpacity, y: titleY }}
        >
          <motion.p
            className="text-white/70 text-xs sm:text-sm uppercase tracking-[0.4em] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Standout pours
          </motion.p>
          <motion.h1
            className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[0.95] mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Best Drinks
          </motion.h1>
          <motion.p
            className="text-white/90 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Standout pours from our tables—cultural themes, not just cocktails.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Drink scenes — each full viewport, parallax + reveal */}
      {drinks.map((drink, i) => (
        <DrinkSection key={i} drink={drink} index={i} />
      ))}

      {/* CTA section */}
      <motion.section
        className="relative min-h-[50vh] flex flex-col items-center justify-center px-6 sm:px-12 py-24 bg-gradient-to-b from-midnight to-midnight/95"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-white/85 text-lg sm:text-xl text-center max-w-xl mx-auto leading-relaxed mb-8">
          More pours and pairings in our posts and at the table.
        </p>
        <Link
          href="/posts"
          className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/80 text-white font-medium uppercase tracking-[0.18em] text-sm hover:bg-white hover:text-midnight transition-all duration-300"
        >
          Read posts →
        </Link>
      </motion.section>
    </main>
  )
}

function DrinkSection({
  drink,
  index,
}: {
  drink: (typeof drinks)[0]
  index: number
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 0.5, 1], ['8%', '-20%', '8%'])
  const contentOpacity = useTransform(scrollYProgress, [0.12, 0.32, 0.68, 0.88], [0, 1, 1, 0])
  const contentY = useTransform(scrollYProgress, [0.12, 0.32], [70, 0])

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-end py-24 sm:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url('${drink.image}')`,
          y: bgY,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-black/25" />
      <motion.div
        className="relative z-10 max-w-2xl"
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
      >
        <motion.p
          className="text-white/75 text-sm uppercase tracking-[0.35em] mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {drink.restaurant}
        </motion.p>
        <motion.h2
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {drink.name}
        </motion.h2>
        <motion.p
          className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-5%' }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {drink.theme}
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
