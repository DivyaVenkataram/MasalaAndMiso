import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: immersive image placeholder — warm, moody, cinematic */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 32, 43, 0.35), rgba(22, 32, 43, 0.5)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')`,
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-semibold uppercase tracking-brand text-white mb-4">
          MASALA & MISO
        </h1>
        <p className="font-baskerville text-xl sm:text-2xl text-neutral/95 mb-10 max-w-2xl mx-auto">
          A culinary journey between India and Japan.
        </p>
        <Link
          href="/blog"
          className="inline-block px-8 py-4 bg-ocean text-white font-medium rounded-sm transition-colors duration-200 hover:bg-burgundy"
        >
          Explore Articles
        </Link>
      </div>
    </section>
  )
}
