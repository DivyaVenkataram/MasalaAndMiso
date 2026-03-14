import Link from 'next/link'

const footerLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/rankings', label: 'Rankings' },
  { href: '/best-of', label: 'Best Of' },
  { href: '/about', label: 'About' },
  { href: '/recipes', label: 'Recipes' },
  { href: '/restaurants', label: 'Restaurants' },
  { href: '/newsletter', label: 'Newsletter' },
]

export default function Footer() {
  return (
    <footer className="bg-midnight text-neutral py-16">
      <div className="max-w-layout mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="max-w-sm">
          <Link
            href="/"
            className="font-playfair text-xl font-semibold uppercase tracking-brand text-neutral hover:text-burgundy transition-colors inline-block mb-3"
          >
            MASALA & MISO
          </Link>
          <p className="text-neutral/80 text-sm leading-relaxed">
            A luxury culinary travel magazine online. Cross-cultural cuisine, travel storytelling, and elevated food journalism.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-wine hover:text-burgundy transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="max-w-layout mx-auto px-6 mt-12 pt-8 border-t border-neutral/20">
        <p className="text-neutral/60 text-sm">© Masala & Miso. Michelin-backed reviews.</p>
      </div>
    </footer>
  )
}
