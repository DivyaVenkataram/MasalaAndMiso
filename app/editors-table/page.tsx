'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const lists = [
  {
    title: "Our top 5: Sushi outside Japan",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920&q=80",
    items: ["Le Bernardin · New York", "Atomix · New York", "Q Sushi · Los Angeles", "Omakase · San Francisco", "Shibumi · Los Angeles"],
  },
  {
    title: "Our top 5: California's quiet Michelin gems",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80",
    items: ["Single Thread · Healdsburg", "The French Laundry · Yountville", "Quince · San Francisco", "Saison · San Francisco", "Birdsong · San Francisco"],
  },
  {
    title: "Our top 5: Bay Area under the radar",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    items: ["Nari · Thai & Californian", "Snail Bar · Contemporary", "Tiya · Indian fusion", "F.O.B. Kitchen · Filipino", "Kiln · Thai"],
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
}

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemFade = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

export default function EditorsTablePage() {
  return (
    <main className="bg-midnight -mb-1">
      {/* Hero — full viewport, zoom-in */}
      <section className="relative h-[100svh] min-h-[760px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08, y: 0 }}
          animate={{ scale: 1, y: -30 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-midnight" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-midnight to-transparent" />
        <div className="absolute left-1/2 top-[58%] h-[420px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <motion.p
            className="text-white/70 text-xs sm:text-sm uppercase tracking-[0.4em] mb-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            Curated lists
          </motion.p>
          <motion.h1
            className="hero-title font-playfair font-medium mb-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            EDITOR&apos;S TABLE
          </motion.h1>
          <motion.p
            className="text-white/90 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Our top 5 by cuisine and place. Where we keep going back.
          </motion.p>
        </div>
      </section>

      {/* List sections — parallax + staggered content */}
      {lists.map((list, i) => (
        <ListSection key={i} list={list} index={i} />
      ))}
    </main>
  )
}

function ListSection({
  list,
  index,
}: {
  list: (typeof lists)[0]
  index: number
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 0.5, 1], ['5%', '-15%', '5%'])
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.7, 0.85], [0, 1, 1, 0])
  const contentY = useTransform(scrollYProgress, [0.15, 0.35], [60, 0])

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-[60vh] flex flex-col justify-end py-20 sm:py-28 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url('${list.image}')`,
          y: bgY,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
      <motion.div
        className="relative z-10 max-w-2xl"
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
      >
        <motion.h2
          className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-8 tracking-tight"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-10%' }}
          variants={fadeUp}
        >
          {list.title}
        </motion.h2>
        <motion.ul
          className="space-y-4"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-5%' }}
        >
          {list.items.map((item, j) => (
            <motion.li
              key={j}
              className="text-white/95 text-lg sm:text-xl leading-relaxed font-editorial border-b border-white/10 pb-3 last:border-0"
              variants={itemFade}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            href="/ranking-guide"
            className="inline-block mt-8 text-white/95 text-lg border-b-2 border-white/80 pb-1 hover:border-white transition-colors duration-300"
          >
            See full ranking →
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
