'use client'

import { RankingStylePageHero } from '@/components/RankingStylePageHero'

export default function Hero() {
  return (
    <RankingStylePageHero
      imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
      imageAlt="Restaurant dining room"
      eyebrow="Reviews · guides · rankings"
      title="MASALA & MISO"
      description="Where Michelin cultures meet—elevated dining across borders."
      blendColor="#0a0a0a"
      cta={{ href: '/posts', label: 'Explore posts' }}
    />
  )
}
