import Link from 'next/link'

export default function RecipesPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-layout mx-auto px-6">
        <h1 className="font-playfair text-5xl sm:text-6xl font-semibold uppercase tracking-brand text-midnight mb-4">
          RECIPES
        </h1>
        <p className="font-baskerville text-xl text-midnight/80 mb-12 max-w-reading">
          From our kitchen to yours. Dishes inspired by the tables we&apos;ve visited—India, Japan, and the places in between.
        </p>
        <div className="max-w-reading rounded-sm bg-neutral/50 border border-wine/20 p-8">
          <p className="font-baskerville text-midnight/85 leading-relaxed">
            Recipe collections are coming soon. We&apos;re building a library of home cook–friendly dishes that capture the spirit of the restaurants we review: precise technique, bold flavor, and respect for ingredient and tradition.
          </p>
          <p className="mt-4 text-midnight/70 text-sm">
            In the meantime, explore our <Link href="/blog" className="text-ocean hover:text-burgundy font-medium">blog</Link> and <Link href="/best-of" className="text-ocean hover:text-burgundy font-medium">best-of lists</Link> for where to eat next.
          </p>
        </div>
      </div>
    </main>
  )
}
