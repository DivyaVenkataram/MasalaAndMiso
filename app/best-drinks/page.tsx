import Link from 'next/link'

const drinks = [
  {
    name: "Masala Chai Old Fashioned",
    restaurant: "Tiya",
    theme: "Indian spice meets classic whiskey",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80",
  },
  {
    name: "Yuzu Martini",
    restaurant: "Nari",
    theme: "Thai–Japanese citrus, bracing and clean",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80",
  },
  {
    name: "Californian Spritz",
    restaurant: "Snail Bar",
    theme: "Wine-country aperitivo",
    image: "https://images.unsplash.com/photo-1536935338788-bbb56d6741a0?w=1920&q=80",
  },
  {
    name: "Sake & Umeshu Flight",
    restaurant: "From our Tokyo tables",
    theme: "Edomae discipline in a glass",
    image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=1920&q=80",
  },
]

export default function BestDrinksPage() {
  return (
    <main>
      <section className="relative pt-28 pb-section px-8 flex flex-col items-center justify-center min-h-[55vh] bg-cover bg-center overflow-hidden image-fade-to-page">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60" />
        <h1 className="relative z-10 font-playfair text-4xl sm:text-5xl font-medium text-white text-center mb-3 tracking-tight">
          Best Drinks
        </h1>
        <p className="relative z-10 text-white/90 text-center max-w-lg text-[18px] leading-[1.6]">
          Standout pours from our tables—cultural themes, not just cocktails.
        </p>
      </section>

      {drinks.map((drink, i) => (
        <section
          key={i}
          className="relative min-h-[75vh] flex flex-col justify-end py-section px-6 sm:px-12 bg-cover bg-center"
          style={{ backgroundImage: `url('${drink.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" aria-hidden />
          <div className="relative z-10 max-w-xl">
            <p className="text-white/80 text-metadata uppercase tracking-wider mb-1">{drink.restaurant}</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-white mb-2 tracking-tight">
              {drink.name}
            </h2>
            <p className="text-white/90 text-[18px] leading-[1.6]">
              {drink.theme}
            </p>
          </div>
        </section>
      ))}

      <section className="section-after-image py-section px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-midnight/85 text-[18px] leading-[1.6] mb-6">
            More pours and pairings in our posts and at the table.
          </p>
          <Link href="/posts" className="text-ocean link-editorial text-[18px]">
            Read posts →
          </Link>
        </div>
      </section>
    </main>
  )
}
