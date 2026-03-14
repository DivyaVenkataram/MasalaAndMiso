import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/ranking-guide', label: 'Ranking Guide' },
  { href: '/editors-table', label: "Editor's Table" },
  { href: '/best-drinks', label: 'Best Drinks' },
  { href: '/about', label: 'About' },
]

export default function Footer() {
  return (
    <footer className="relative bg-page border-t border-black/10">
      <div className="py-section px-8">
        <div className="max-w-layout mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-playfair text-xl font-medium uppercase tracking-[0.15em] text-midnight hover:text-burgundy transition-colors inline-block mb-4"
            >
              MASALA & MISO
            </Link>
            <p className="text-midnight/80 text-metadata leading-[1.6]">
              A luxury culinary travel publication. Cross-cultural cuisine, travel storytelling, and elevated food journalism.
            </p>
          </div>
          <nav className="flex flex-wrap gap-8">
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-midnight/85 hover:text-burgundy transition-colors duration-200 link-editorial text-filter"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="max-w-layout mx-auto mt-8 pt-8 border-t border-black/10">
          <p className="text-midnight/60 text-metadata">© Masala & Miso</p>
        </div>
      </div>
    </footer>
  )
}
