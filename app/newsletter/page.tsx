import Link from 'next/link'
import { RankingStylePageHero } from '@/components/RankingStylePageHero'

export default function NewsletterPage() {
  return (
    <main className="bg-[#f3f0ea]">
      <RankingStylePageHero
        imageSrc="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1920&q=80"
        imageAlt="Gathering at the table"
        eyebrow="One dispatch per week"
        title="NEWSLETTER"
        description="Join our table. Weekly reviews, city guides, and the occasional recipe."
        blendColor="#f3f0ea"
        cta={{ href: '#newsletter-content', label: 'Get started' }}
      />
      <div
        id="newsletter-content"
        className="relative z-10 -mt-16 max-w-layout mx-auto px-6 pb-20 pt-4"
      >
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
                className="rounded-sm bg-wine/50 px-6 py-3 font-medium text-white cursor-not-allowed enabled:cursor-pointer enabled:hover:bg-burgundy enabled:transition-colors"
              >
                Notify me
              </button>
            </div>
            <p className="mt-4 text-midnight/60 text-xs">
              Until then, follow along on{' '}
              <Link href="/posts" className="text-ocean hover:text-burgundy">
                the journal
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
