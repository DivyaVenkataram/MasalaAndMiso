import Link from 'next/link'

export default function BestOfPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-layout mx-auto px-6">
        <h1 className="font-playfair text-5xl sm:text-6xl font-semibold uppercase tracking-brand text-midnight mb-4">
          BEST OF
        </h1>
        <p className="font-baskerville text-xl text-midnight/80 mb-12 max-w-reading">
          Curated lists by city, experience, and budget—so you know where to book first.
        </p>

        <section className="bg-midnight text-neutral rounded-sm p-8 sm:p-10 mb-16">
          <h2 className="font-baskerville text-2xl text-white mb-4">Our Dining Philosophy</h2>
          <p className="text-neutral/90 leading-relaxed max-w-reading">
            We believe the best meals are those where technique serves soul. Stars matter, but so do intention, ingredient integrity, and the unteachable sense of place. We seek restaurants that speak a clear culinary language—whether that&apos;s Edomae precision, French rigor, or California abundance—and we judge them by the same standards we bring from our training and our tables around the world.
          </p>
        </section>

        <h2 className="font-baskerville text-2xl sm:text-3xl text-midnight mb-6 border-b-2 border-burgundy pb-2 w-fit">
          Best by City
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-6 rounded-sm shadow-md border-l-4 border-burgundy">
            <h3 className="font-baskerville text-xl text-midnight mb-2">San Francisco & Bay Area</h3>
            <p className="text-midnight/85 leading-relaxed mb-4">
              Nari (1 star, Thai/Californian), Snail Bar (Contemporary Californian), F.O.B. Kitchen (Filipino), Tiya (Indian fusion). All in the Michelin Guide or starred.
            </p>
            <Link href="/rankings" className="text-ocean font-medium hover:text-burgundy transition-colors">
              View all SF rankings →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-md border-l-4 border-wine/50">
            <h3 className="font-baskerville text-xl text-midnight mb-2">New York</h3>
            <p className="text-midnight/85 leading-relaxed mb-4">
              More cities to come. We&apos;re expanding our coverage.
            </p>
            <Link href="/rankings" className="text-ocean font-medium hover:text-burgundy transition-colors">
              View rankings →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-md border-l-4 border-wine/50">
            <h3 className="font-baskerville text-xl text-midnight mb-2">Los Angeles</h3>
            <p className="text-midnight/85 leading-relaxed mb-4">
              LA reviews coming soon. Stay tuned.
            </p>
            <Link href="/rankings" className="text-ocean font-medium hover:text-burgundy transition-colors">
              View rankings →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-md border-l-4 border-wine/50">
            <h3 className="font-baskerville text-xl text-midnight mb-2">Japan</h3>
            <p className="text-midnight/85 leading-relaxed mb-4">
              Japan coverage in the pipeline.
            </p>
            <Link href="/rankings" className="text-ocean font-medium hover:text-burgundy transition-colors">
              View rankings →
            </Link>
          </div>
        </div>

        <h2 className="font-baskerville text-2xl sm:text-3xl text-midnight mb-6 border-b-2 border-burgundy pb-2 w-fit">
          Best by Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-sm shadow-md border-l-4 border-burgundy">
            <h3 className="font-baskerville text-xl text-midnight mb-2">Highest rated (our visits)</h3>
            <p className="text-midnight/85 leading-relaxed">
              Nari leads our current ratings (7.6). One star, Thai and Californian. Snail Bar next (6.8).
            </p>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-md border-l-4 border-burgundy">
            <h3 className="font-baskerville text-xl text-midnight mb-2">Indian fusion</h3>
            <p className="text-midnight/85 leading-relaxed">
              Tiya — in the Guide 2024–25. Refined take on Indian flavors in SF.
            </p>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-md border-l-4 border-burgundy">
            <h3 className="font-baskerville text-xl text-midnight mb-2">Filipino</h3>
            <p className="text-midnight/85 leading-relaxed">
              F.O.B. Kitchen — in the Guide since 2021. Heart and technique.
            </p>
          </div>
        </div>

        <h2 className="font-baskerville text-2xl sm:text-3xl text-midnight mb-6 border-b-2 border-burgundy pb-2 w-fit">
          More to come
        </h2>
        <div className="bg-white p-6 rounded-sm shadow-md border-l-4 border-wine/50">
          <p className="text-midnight/85 leading-relaxed">
            Curated lists by budget and experience will grow as we add more reviews.
          </p>
        </div>
      </div>
    </main>
  )
}
