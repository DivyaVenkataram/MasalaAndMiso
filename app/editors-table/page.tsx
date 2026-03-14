import Link from 'next/link'

const lists = [
  {
    title: "Our top 5: Sushi outside Japan",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920&q=80",
    items: ["Le Bernardin · New York", "Atomix · New York", "Q Sushi · Los Angeles", "Omakase · San Francisco", "Shibumi · Los Angeles"],
  },
  {
    title: "Our top 5: California's quiet Michelin gems",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80",
    items: ["Single Thread · Healdsburg", "The French Laundry · Yountville", "Quince · San Francisco", "Saison · San Francisco", "Birdsong · San Francisco"],
  },
  {
    title: "Our top 5: Bay Area under the radar",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    items: ["Nari · Thai & Californian", "Snail Bar · Contemporary", "Tiya · Indian fusion", "F.O.B. Kitchen · Filipino", "Kiln · Thai"],
  },
]

export default function EditorsTablePage() {
  return (
    <main>
      <section className="relative pt-28 pb-section px-8 flex flex-col items-center justify-center min-h-[50vh] bg-cover bg-center overflow-hidden image-fade-to-page">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60" />
        <h1 className="relative z-10 font-playfair text-4xl sm:text-5xl font-medium text-white text-center mb-3 tracking-tight">
          Editor&apos;s Table
        </h1>
        <p className="relative z-10 text-white/90 text-center max-w-lg text-[18px] leading-[1.6]">
          Our top 5 by cuisine and place. Where we keep going back.
        </p>
      </section>

      {lists.map((list, i) => (
        <section
          key={i}
          className="relative min-h-[70vh] flex flex-col justify-end py-section px-6 sm:px-12 bg-cover bg-center"
          style={{ backgroundImage: `url('${list.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" aria-hidden />
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-white mb-6 tracking-tight">
              {list.title}
            </h2>
            <ul className="space-y-2">
              {list.items.map((item, j) => (
                <li key={j} className="text-white/95 text-[18px] leading-[1.6] font-editorial">
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/ranking-guide"
              className="inline-block mt-6 text-white/90 text-[18px] border-b border-white/70 pb-0.5 hover:border-white transition-colors"
            >
              See full ranking →
            </Link>
          </div>
        </section>
      ))}

      <section className="relative w-full min-h-[45vh] bg-cover bg-center image-fade-to-page">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </section>
    </main>
  )
}
