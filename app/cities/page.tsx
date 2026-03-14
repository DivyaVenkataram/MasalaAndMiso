import Link from 'next/link'

const cityPanels = [
  {
    title: "San Francisco & Bay Area",
    subtitle: "Nari, Snail Bar, Tiya, F.O.B. Kitchen — in the Guide or starred.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80",
    link: "/editors-table",
    linkLabel: "See Editor's Table →",
  },
  {
    title: "New York",
    subtitle: "Le Bernardin, Atomix, and more. Coverage expanding.",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1920&q=80",
    link: "/ranking-guide",
    linkLabel: "Ranking Guide →",
  },
  {
    title: "Tokyo",
    subtitle: "Where Michelin first went outside Europe. Jiro, Narisawa, and the city's best.",
    image: "https://images.unsplash.com/photo-1540959733332-eab42de70642?w=1920&q=80",
    link: "/posts",
    linkLabel: "Read posts →",
  },
  {
    title: "Mumbai",
    subtitle: "Coming soon.",
    image: "https://images.unsplash.com/photo-1529253355934-dd0fec224c84?w=1920&q=80",
    link: "/about",
    linkLabel: "About →",
  },
]

export default function CitiesPage() {
  return (
    <main>
      <section className="relative pt-28 pb-section px-8 flex flex-col items-center justify-center min-h-[55vh] bg-cover bg-center overflow-hidden image-fade-to-page">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60" />
        <h1 className="relative z-10 font-playfair text-4xl sm:text-5xl font-medium text-white text-center mb-3 tracking-tight">
          Cities
        </h1>
        <p className="relative z-10 text-white/90 text-center max-w-lg text-[18px] leading-[1.6]">
          Where to eat in San Francisco, New York, Tokyo, Mumbai, and beyond.
        </p>
      </section>

      {cityPanels.map((city, i) => (
        <section
          key={i}
          className="relative min-h-[70vh] flex flex-col justify-end py-section px-6 sm:px-12 bg-cover bg-center"
          style={{ backgroundImage: `url('${city.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" aria-hidden />
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-white mb-3 tracking-tight">
              {city.title}
            </h2>
            <p className="text-white/90 text-[18px] leading-[1.6] mb-6">
              {city.subtitle}
            </p>
            <Link
              href={city.link}
              className="inline-block text-white/90 text-[18px] border-b border-white/70 pb-0.5 hover:border-white transition-colors"
            >
              {city.linkLabel}
            </Link>
          </div>
        </section>
      ))}

      <section className="relative w-full min-h-[45vh] bg-cover bg-center image-fade-to-page">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </section>
    </main>
  )
}
