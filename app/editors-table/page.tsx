import Link from 'next/link'
import Image from 'next/image'

const lists = [
  {
    title: "Best Sushi Outside Japan",
    description: "Where the craft travels. Edomae discipline and local fish, in cities that take both seriously.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&q=80",
    imagePosition: "right",
    items: ["Le Bernardin · New York", "Atomix · New York", "Q Sushi · Los Angeles", "Omakase · San Francisco"],
  },
  {
    title: "California's Quiet Michelin Gems",
    description: "Not the loudest names—the ones that reward a long drive and an open afternoon.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    imagePosition: "left",
    items: ["Single Thread · Healdsburg", "The French Laundry · Yountville", "Quince · San Francisco", "Saison · San Francisco"],
  },
  {
    title: "The Bay Area's Most Underrated Restaurants",
    description: "In the Guide or one star—and still flying under the radar. Our short list.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    imagePosition: "right",
    items: ["Nari · Thai & Californian", "Snail Bar · Contemporary", "Tiya · Indian fusion", "F.O.B. Kitchen · Filipino"],
  },
]

export default function EditorsTablePage() {
  return (
    <main>
      <section
        className="relative pt-28 pb-section px-8 flex flex-col items-center justify-center min-h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(22,32,43,0.55), rgba(22,32,43,0.5)), url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1920&q=80')`,
        }}
      >
        <h1 className="font-playfair text-4xl sm:text-5xl font-medium text-white text-center mb-4">
          Editor&apos;s Table
        </h1>
        <p className="text-white/90 text-center max-w-xl text-[18px] leading-[1.6]">
          Curated lists from the table. No rankings—just where we keep going back.
        </p>
      </section>

      {lists.map((list, i) => (
        <section key={i} className="relative">
          <div className="max-w-layout mx-auto px-8 py-section">
            <div
              className={`flex flex-col gap-8 md:gap-8 ${list.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="font-playfair text-3xl sm:text-4xl font-medium text-midnight mb-4">
                  {list.title}
                </h2>
                <p className="text-midnight/85 text-[18px] leading-[1.6] mb-6 max-w-xl">
                  {list.description}
                </p>
                <ul className="space-y-2">
                  {list.items.map((item, j) => (
                    <li key={j} className="text-midnight/80 border-b border-midnight/10 pb-2 last:border-0 text-[18px] leading-[1.6]">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/ranking-guide" className="text-ocean link-editorial mt-4 inline-block">
                  See full ranking →
                </Link>
              </div>
              <div className="flex-1 relative aspect-[4/3] min-h-[280px] overflow-hidden">
                <Image
                  src={list.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          {i < lists.length - 1 && <div className="section-divider" />}
        </section>
      ))}
    </main>
  )
}
