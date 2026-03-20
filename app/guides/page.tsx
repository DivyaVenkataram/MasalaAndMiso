import Link from 'next/link'
import { RankingStylePageHero } from '@/components/RankingStylePageHero'

export default function GuidesPage() {
  return (
    <main className="bg-[#f3f0ea]">
      <RankingStylePageHero
        imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
        imageAlt="Dining table"
        eyebrow="Where to eat next"
        title="GUIDES"
        description="City guides, best-of lists, and how to book. Your next meal starts here."
        blendColor="#f3f0ea"
        cta={{ href: '#guides-content', label: 'Open guides' }}
      />
      <div
        id="guides-content"
        className="relative z-10 -mt-16 max-w-layout mx-auto px-6 pb-20 pt-4"
      >
        <div className="space-y-6 max-w-2xl">
          <Link
            href="/editors-table"
            className="block p-6 rounded-sm bg-white border-l-4 border-ocean shadow-md hover:shadow-lg hover:border-burgundy transition-all"
          >
            <h2 className="font-baskerville text-xl text-midnight mb-2">Editor&apos;s Table</h2>
            <p className="text-midnight/80 text-sm leading-relaxed">
              Curated top 5 lists by theme. Where we keep going back.
            </p>
            <span className="inline-block mt-2 text-ocean font-medium">Explore Editor&apos;s Table →</span>
          </Link>
          <Link
            href="/ranking-guide"
            className="block p-6 rounded-sm bg-white border-l-4 border-ocean shadow-md hover:shadow-lg hover:border-burgundy transition-all"
          >
            <h2 className="font-baskerville text-xl text-midnight mb-2">Rankings & Reservations</h2>
            <p className="text-midnight/80 text-sm leading-relaxed">
              Filter by location, cuisine, and Michelin status. Reserve with our affiliate links.
            </p>
            <span className="inline-block mt-2 text-ocean font-medium">View ranking guide →</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
