import Link from 'next/link'

export default function NewsletterPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-layout mx-auto px-6">
        <h1 className="font-playfair text-5xl sm:text-6xl font-semibold uppercase tracking-brand text-midnight mb-4">
          Newsletter
        </h1>
        <p className="font-baskerville text-xl text-midnight/80 mb-12 max-w-reading">
          Join our table. Weekly reviews, city guides, and the occasional recipe.
        </p>
        <div className="max-w-md">
          <div className="rounded-sm border border-wine/30 bg-neutral/30 p-8">
            <p className="font-baskerville text-midnight/90 mb-6">
              Sign-up is coming soon. We&apos;ll notify you when the first issue is ready—no spam, just one thoughtful dispatch per week.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@example.com"
                disabled
                className="flex-1 px-4 py-3 border border-neutral/60 rounded-sm bg-white text-midnight/60 cursor-not-allowed"
              />
              <button
                type="button"
                disabled
                className="px-6 py-3 bg-wine/50 text-white font-medium rounded-sm cursor-not-allowed"
              >
                Notify me
              </button>
            </div>
            <p className="mt-4 text-midnight/60 text-xs">
              Until then, follow along on <Link href="/blog" className="text-ocean hover:text-burgundy">the blog</Link>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
