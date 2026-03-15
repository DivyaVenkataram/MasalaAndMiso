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
<<<<<<< HEAD
=======

      {/* 5. Editorial text — fluid, tight to map above */}
      <section className="section-after-image pt-5 sm:pt-6 pb-10 sm:pb-12 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-midnight/85 text-[18px] leading-[1.6] mb-5">
            From San Francisco to Tokyo, we track the tables worth booking. Use the ranking guide to filter by city and cuisine.
          </p>
          <Link href="/ranking-guide" className="link-editorial text-midnight font-medium">
            View Ranking Guide →
          </Link>
        </div>
      </section>

      {/* 6. Another full-bleed image — fades to footer */}
      <section className="relative w-full min-h-[50vh] bg-cover bg-center image-fade-to-page">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-12 sm:pb-16 text-center">
          <Link
            href="/editors-table"
            className="text-white font-medium text-[18px] border-b border-white/80 pb-1 hover:border-white transition-colors"
          >
            Editor&apos;s Table →
          </Link>
        </div>
      </section>
>>>>>>> 5043f88ddfeff8ad9b963d4cfefefcdab4c0b10d
    </main>
  )
}
