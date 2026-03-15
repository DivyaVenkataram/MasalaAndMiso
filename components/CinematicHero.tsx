'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const IMAGE_ONE =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80'
const IMAGE_TWO =
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80'

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const imageOneY = useTransform(scrollYProgress, [0, 0.55], ['0%', '-22%'])
  const imageOneOpacity = useTransform(scrollYProgress, [0.38, 0.62], [1, 0])

  const imageTwoScale = useTransform(scrollYProgress, [0.15, 0.75], [1.12, 1])
  const imageTwoY = useTransform(scrollYProgress, [0, 0.75], ['6%', '0%'])

  const titleY = useTransform(scrollYProgress, [0, 0.45], ['0%', '-10%'])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.15])

  return (
    <section ref={sectionRef} className="relative h-[220vh] bg-[#0f0f10]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ y: imageTwoY, scale: imageTwoScale }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <img
            src={IMAGE_TWO}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <motion.div
          style={{ y: imageOneY, opacity: imageOneOpacity }}
          className="absolute inset-0 z-10 will-change-transform"
        >
          <img
            src={IMAGE_ONE}
            alt=""
            className="h-[112%] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-[28vh] bg-gradient-to-b from-transparent via-[#0f0f10]/20 to-[#0f0f10]" />
          <div className="absolute inset-0 bg-black/22" />
        </motion.div>

        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="absolute inset-x-0 bottom-[10%] z-20 px-6 md:px-10 lg:px-14"
        >
          <div className="mx-auto max-w-[1400px]">
            <p
              className="mb-4 text-[11px] uppercase tracking-[0.45em] text-white/75"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Masala &amp; Miso
            </p>
            <h1
              className="max-w-[1200px] text-[52px] uppercase leading-[0.92] tracking-[0.08em] text-white md:text-[84px] lg:text-[118px]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              A Table Between
              <br />
              Two Worlds
            </h1>
            <p
              className="mt-5 max-w-[540px] text-[14px] leading-7 text-white/72 md:text-[15px]"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Michelin-minded dining, design-led travel, and city rankings shaped by appetite.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
