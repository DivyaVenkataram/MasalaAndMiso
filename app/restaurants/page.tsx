import Link from 'next/link'
import { RankingStylePageHero } from '@/components/RankingStylePageHero'

export default function RestaurantsPage() {
  return (
    <main className="bg-[#f3f0ea]">
      <RankingStylePageHero
        imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80"
        imageAlt="Restaurant dining room"
        eyebrow="Rankings & the map"
        title="RESTAURANTS"
        description="Our curated rankings and in-depth reviews. Filter by location and cuisine, or explore the map."
        blendColor="#f3f0ea"
        cta={{ href: '#restaurants-content', label: 'Explore' }}
      />
      <div
        id="restaurants-content"
        className="relative z-10 -mt-16 max-w-layout mx-auto px-6 pb-20 pt-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          <Link
            href="/ranking-guide"
            className="group block p-6 rounded-sm bg-white border-l-4 border-ocean shadow-md hover:shadow-lg hover:border-burgundy transition-all duration-200"
          >
            <h2 className="font-baskerville text-xl text-midnight mb-2 transition-colors group-hover:text-burgundy">Rankings</h2>
            <p className="text-midnight/80 text-sm leading-relaxed">
              Filter by location, cuisine, and Michelin status. Reserve your next meal.
            </p>
            <span className="inline-block mt-3 text-ocean font-medium group-hover:text-burgundy">View rankings →</span>
          </Link>
          <Link
            href="/"
            className="group block p-6 rounded-sm bg-white border-l-4 border-ocean shadow-md hover:shadow-lg hover:border-burgundy transition-all duration-200"
          >
            <h2 className="font-baskerville text-xl text-midnight mb-2 transition-colors group-hover:text-burgundy">Map</h2>
            <p className="text-midnight/80 text-sm leading-relaxed">
              Every pin is a meal we&apos;ve shared. Bay Area focus, with more cities to come.
            </p>
            <span className="inline-block mt-3 text-ocean font-medium group-hover:text-burgundy">View map →</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
