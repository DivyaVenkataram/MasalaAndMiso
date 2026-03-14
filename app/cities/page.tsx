import Link from 'next/link'

export default function CitiesPage() {
  return (
    <main>
      <section className="relative pt-28 pb-section px-8 flex flex-col items-center justify-center min-h-[55vh] bg-cover bg-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60" />
        <h1 className="relative z-10 font-playfair text-4xl sm:text-5xl font-medium text-white text-center mb-3 tracking-tight">
          Cities
        </h1>
        <p className="relative z-10 text-white/90 text-center max-w-xl text-[18px] leading-[1.6]">
          Where to eat in San Francisco, New York, Tokyo, Mumbai, and beyond.
        </p>
      </section>

      <div className="max-w-reading mx-auto px-8 py-section section-after-image">
        <p className="text-midnight/85 text-[18px] leading-[1.6] mb-8">
          We build our coverage city by city. Each place gets a curated shortlist—no clutter, just where we&apos;d book again.
        </p>
        <ul className="space-y-8">
          <li className="border-b border-midnight/15 pb-8">
            <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight mb-2 tracking-tight">San Francisco & Bay Area</h2>
            <p className="text-midnight/80 mb-4 text-[18px] leading-[1.6]">Nari, Snail Bar, Tiya, F.O.B. Kitchen, and more. In the Guide or starred.</p>
            <Link href="/editors-table" className="link-editorial">See Editor&apos;s Table →</Link>
          </li>
          <li className="border-b border-midnight/15 pb-8">
            <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight mb-2 tracking-tight">New York</h2>
            <p className="text-midnight/80 mb-4 text-[18px] leading-[1.6]">Coverage expanding. Le Bernardin, Atomix, and others in the pipeline.</p>
            <Link href="/ranking-guide" className="link-editorial">Ranking Guide →</Link>
          </li>
          <li className="border-b border-midnight/15 pb-8">
            <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight mb-2 tracking-tight">Tokyo</h2>
            <p className="text-midnight/80 mb-4 text-[18px] leading-[1.6]">Where Michelin first went outside Europe. Jiro, Narisawa, and the city&apos;s best.</p>
            <Link href="/posts" className="link-editorial">Read posts →</Link>
          </li>
          <li>
            <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight mb-2 tracking-tight">Mumbai</h2>
            <p className="text-midnight/80 mb-4 text-[18px] leading-[1.6]">Coming soon.</p>
          </li>
        </ul>
      </div>

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
