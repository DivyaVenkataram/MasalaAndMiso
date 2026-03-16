/** Layout: image-forward rhythm. Ocean from Explore by Place extends to footer. */
import Hero from '@/components/Hero'
import StatementSection from '@/components/StatementSection'
import MasalaMisoLocationGallery from '@/components/MasalaMisoLocationGallery'
import FadeInSection from '@/components/FadeInSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f0ea] home-page">
      {/* 1. Full-width hero — immersive photography */}
      <Hero />

      {/* 2. Statement + CTAs overlapping second photo */}
      <StatementSection />

      {/* 3. Explore by Place — ocean extends to footer */}
      <FadeInSection>
        <MasalaMisoLocationGallery />
      </FadeInSection>
    </main>
  )
}
