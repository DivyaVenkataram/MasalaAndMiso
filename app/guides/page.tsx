import Link from 'next/link'

export default function GuidesPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-layout mx-auto px-6">
        <h1 className="font-playfair text-5xl sm:text-6xl font-semibold uppercase tracking-brand text-midnight mb-4">
          GUIDES
        </h1>
        <p className="font-baskerville text-xl text-midnight/80 mb-12 max-w-reading">
          City guides, best-of lists, and how to book. Your next meal starts here.
        </p>
        <div className="space-y-6 max-w-2xl">
          <Link
            href="/best-of"
            className="block p-6 rounded-sm bg-white border-l-4 border-ocean shadow-md hover:shadow-lg hover:border-burgundy transition-all"
          >
            <h2 className="font-baskerville text-xl text-midnight mb-2">Best Of</h2>
            <p className="text-midnight/80 text-sm leading-relaxed">
              Curated lists by city, experience, and budget. Our dining philosophy and where to book first.
            </p>
            <span className="inline-block mt-2 text-ocean font-medium">Explore Best Of →</span>
          </Link>
          <Link
            href="/rankings"
            className="block p-6 rounded-sm bg-white border-l-4 border-ocean shadow-md hover:shadow-lg hover:border-burgundy transition-all"
          >
            <h2 className="font-baskerville text-xl text-midnight mb-2">Rankings & Reservations</h2>
            <p className="text-midnight/80 text-sm leading-relaxed">
              Filter by location, cuisine, and Michelin status. Reserve with our affiliate links.
            </p>
            <span className="inline-block mt-2 text-ocean font-medium">View Rankings →</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
