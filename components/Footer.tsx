import Link from 'next/link'

const footerLinks = [
  { href: '/posts', label: 'Posts' },
  { href: '/ranking-guide', label: 'Ranking Guide' },
  { href: '/editors-table', label: "Editor's Table" },
  { href: '/cities', label: 'Cities' },
  { href: '/about', label: 'About' },
]

export default function Footer() {
  return (
    <footer className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(22,32,43,0.92), rgba(22,32,43,0.95)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=60')`,
        }}
      />
      <div className="relative z-10 py-20 px-8">
        <div className="max-w-layout mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-playfair text-xl font-semibold uppercase tracking-[0.15em] text-neutral hover:text-burgundy transition-colors inline-block mb-4"
            >
              MASALA & MISO
            </Link>
            <p className="text-neutral/80 text-sm leading-relaxed">
              A luxury culinary travel publication. Cross-cultural cuisine, travel storytelling, and elevated food journalism.
            </p>
          </div>
          <nav className="flex flex-wrap gap-8">
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-neutral/90 hover:text-burgundy transition-colors duration-200 link-editorial"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="max-w-layout mx-auto mt-16 pt-8 border-t border-white/10">
          <p className="text-neutral/60 text-sm">© Masala & Miso</p>
        </div>
      </div>
    </footer>
  )
}
