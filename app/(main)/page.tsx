/** Layout: image-forward rhythm. Statement section overlaps second photo; dynamic on scroll. */
import Hero from '@/components/Hero'
import StatementSection from '@/components/StatementSection'
import MasalaMisoLocationGallery from '@/components/MasalaMisoLocationGallery'
import FadeInSection from '@/components/FadeInSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f0ea] home-page">
      {/* 1. Full-width hero — immersive photography */}
      <Hero />

      {/* 2. Statement + CTAs overlapping second photo (grey tint), dynamic on scroll */}
      <StatementSection />

      {/* 3. Where we've dined — Explore by Place */}
      <FadeInSection>
        <MasalaMisoLocationGallery />
      </FadeInSection>
    </main>
  )
}
