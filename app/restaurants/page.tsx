import Link from 'next/link'

export default function RestaurantsPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-layout mx-auto px-6">
        <h1 className="font-playfair text-5xl sm:text-6xl font-semibold uppercase tracking-brand text-midnight mb-4">
          Restaurants
        </h1>
        <p className="font-baskerville text-xl text-midnight/80 mb-12 max-w-reading">
          Our curated rankings and in-depth reviews. Filter by location and cuisine, or explore the map.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          <Link
            href="/rankings"
            className="group block p-6 rounded-sm bg-white border-l-4 border-ocean shadow-md hover:shadow-lg hover:border-burgundy transition-all duration-200"
          >
            <h2 className="font-baskerville text-xl text-midnight group-hover:text-ocean mb-2">Rankings</h2>
            <p className="text-midnight/80 text-sm leading-relaxed">
              Filter by location, cuisine, and Michelin status. Reserve your next meal.
            </p>
            <span className="inline-block mt-3 text-ocean font-medium group-hover:text-burgundy">View rankings →</span>
          </Link>
          <Link
            href="/"
            className="group block p-6 rounded-sm bg-white border-l-4 border-ocean shadow-md hover:shadow-lg hover:border-burgundy transition-all duration-200"
          >
            <h2 className="font-baskerville text-xl text-midnight group-hover:text-ocean mb-2">Map</h2>
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
