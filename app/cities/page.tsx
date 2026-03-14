import Link from 'next/link'

export default function CitiesPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-layout mx-auto px-6">
        <h1 className="font-playfair text-5xl sm:text-6xl font-semibold uppercase tracking-brand text-midnight mb-4">
          Cities
        </h1>
        <p className="font-baskerville text-xl text-midnight/80 mb-12 max-w-reading">
          Where to eat in San Francisco, New York, Tokyo, and beyond. Curated by city.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/best-of"
            className="block p-6 rounded-sm bg-white border-l-4 border-burgundy shadow-md hover:shadow-lg transition-all"
          >
            <h2 className="font-baskerville text-lg text-midnight mb-1">San Francisco & Bay Area</h2>
            <p className="text-sm text-midnight/70">Nari, Snail Bar, Tiya, F.O.B. Kitchen & more.</p>
          </Link>
          <div className="block p-6 rounded-sm bg-white border-l-4 border-wine/40 shadow-md opacity-90">
            <h2 className="font-baskerville text-lg text-midnight mb-1">New York</h2>
            <p className="text-sm text-midnight/70">Coming soon.</p>
          </div>
          <div className="block p-6 rounded-sm bg-white border-l-4 border-wine/40 shadow-md opacity-90">
            <h2 className="font-baskerville text-lg text-midnight mb-1">Los Angeles</h2>
            <p className="text-sm text-midnight/70">Coming soon.</p>
          </div>
          <div className="block p-6 rounded-sm bg-white border-l-4 border-wine/40 shadow-md opacity-90">
            <h2 className="font-baskerville text-lg text-midnight mb-1">Japan</h2>
            <p className="text-sm text-midnight/70">Coming soon.</p>
          </div>
        </div>
        <p className="mt-10 text-midnight/70 text-sm">
          See our full <Link href="/best-of" className="text-ocean hover:text-burgundy font-medium">Best Of</Link> and <Link href="/rankings" className="text-ocean hover:text-burgundy font-medium">Rankings</Link> for filters and reserve links.
        </p>
      </div>
    </main>
  )
}
