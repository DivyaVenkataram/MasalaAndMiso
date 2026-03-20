import Link from 'next/link'
import { RankingStylePageHero } from '@/components/RankingStylePageHero'

export default function RecipesPage() {
  return (
    <main className="bg-[#f3f0ea]">
      <RankingStylePageHero
        imageSrc="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80"
        imageAlt="Cooking"
        eyebrow="From our kitchen"
        title="RECIPES"
        description="From our kitchen to yours. Dishes inspired by the tables we've visited—India, Japan, and the places in between."
        blendColor="#f3f0ea"
        cta={{ href: '#recipes-content', label: 'Read on' }}
      />
      <div
        id="recipes-content"
        className="relative z-10 -mt-16 max-w-layout mx-auto px-6 pb-20 pt-4"
      >
        <div className="max-w-reading rounded-sm bg-neutral/50 border border-wine/20 p-8">
          <p className="font-baskerville text-midnight/85 leading-relaxed">
            Recipe collections are coming soon. We&apos;re building a library of home cook–friendly dishes that capture the spirit of the restaurants we review: precise technique, bold flavor, and respect for ingredient and tradition.
          </p>
          <p className="mt-4 text-midnight/70 text-sm">
            In the meantime, explore our <Link href="/posts" className="text-ocean hover:text-burgundy font-medium">journal</Link> and{' '}
            <Link href="/editors-table" className="text-ocean hover:text-burgundy font-medium">editor&apos;s table</Link> for where to eat next.
          </p>
        </div>
      </div>
    </main>
  )
}
