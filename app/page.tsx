import Hero from '@/components/Hero'
import EditorMap from '@/components/EditorMap'
import SectionDivider from '@/components/SectionDivider'
import FadeInSection from '@/components/FadeInSection'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <FadeInSection>
        <EditorMap />
      </FadeInSection>
      <SectionDivider />
      <section
        className="relative py-32 px-8 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(22,32,43,0.7), rgba(22,32,43,0.75)), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80')`,
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-white mb-6">
            A table between two worlds
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-10">
            Masala & Miso is a luxury culinary travel publication. We write long-form reviews, curate where to eat by city, and keep a ranking guide—so you can reserve with confidence.
          </p>
          <Link
            href="/posts"
            className="text-white border border-white/70 px-8 py-3 inline-block font-medium hover:bg-white hover:text-midnight transition-all duration-300"
          >
            Read the latest
          </Link>
        </div>
      </section>
    </main>
  )
}
