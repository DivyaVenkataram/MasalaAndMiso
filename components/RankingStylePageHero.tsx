'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export type RankingStylePageHeroProps = {
  imageSrc: string
  imageAlt?: string
  eyebrow: string
  title: string
  description: string
  /** Color the hero fades into at the bottom (page background) */
  blendColor?: string
  cta?: {
    href: string
    label: string
  }
  priority?: boolean
}

/**
 * Full-viewport hero matching /ranking-guide: image zoom, overlays, spotlight,
 * centered Playfair title (clamp), eyebrow + dek motion, optional square CTA.
 */
export function RankingStylePageHero({
  imageSrc,
  imageAlt = '',
  eyebrow,
  title,
  description,
  blendColor = '#04152c',
  cta,
  priority = true,
}: RankingStylePageHeroProps) {
  return (
    <section className="relative h-[100svh] min-h-[760px] overflow-hidden">
      <motion.div
        initial={{ scale: 1.08, y: 0 }}
        animate={{ scale: 1, y: -30 }}
        transition={{ duration: 1.8, ease }}
        className="absolute inset-0"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority={priority}
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/35" />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.3), transparent 45%, ${blendColor})`,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-64"
        style={{
          background: `linear-gradient(to top, ${blendColor}, transparent)`,
        }}
      />
      <div className="absolute left-1/2 top-[58%] h-[420px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mb-4 text-[10px] uppercase tracking-[0.45em] text-stone-300/80"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.9, ease }}
          className="max-w-6xl font-playfair text-[clamp(4rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.04em] text-stone-50 uppercase"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease }}
          className="mt-4 max-w-xl text-sm text-stone-200/85 md:text-base"
        >
          {description}
        </motion.p>

        {cta ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease }}
            className="mt-10"
          >
            <Link href={cta.href} className="group btn-outline-light gap-3">
              {cta.label}
              <span className="transition group-hover:translate-y-0.5" aria-hidden>
                ↓
              </span>
            </Link>
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}
