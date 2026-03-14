/** Layout: image-forward rhythm. Alternate full-width photography with short editorial text on #f3f3f5. Hospitality / coffee brand feel—photography fills the page, text overlays or follows images. */
import Hero from '@/components/Hero'
import EditorMap from '@/components/EditorMap'
import FadeInSection from '@/components/FadeInSection'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* 1. Full-width hero — immersive photography */}
      <Hero />

      {/* 2. Editorial text on light background — fluid fade from image */}
      <section className="section-after-image py-10 sm:py-12 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-midnight mb-3 tracking-tight">
            A table between two worlds
          </h2>
          <p className="text-midnight/85 text-[18px] leading-[1.6] mb-5">
            Masala & Miso is a luxury culinary travel publication. We write long-form reviews, curate where to eat by city, and keep a ranking guide—so you can reserve with confidence.
          </p>
          <Link href="/posts" className="link-editorial text-midnight font-medium">
            Read the latest →
          </Link>
        </div>
      </section>

      {/* 3. Large image section — fades into next */}
      <section className="relative w-full min-h-[60vh] bg-cover bg-center image-fade-to-page">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80')` }}
        />
      </section>

      {/* 4. Interactive content */}
      <FadeInSection>
        <EditorMap />
      </FadeInSection>

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
    </main>
  )
}
