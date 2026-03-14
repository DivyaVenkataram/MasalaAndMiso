'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/rankings', label: 'Rankings' },
  { href: '/best-of', label: 'Best Of' },
  { href: '/restaurants', label: 'Restaurants' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-200 ${
        scrolled ? 'bg-neutral shadow-md' : 'bg-transparent'
      }`}
    >
      <Link
        href="/"
        className={`font-playfair text-lg font-semibold uppercase tracking-brand transition-colors duration-200 ${
          scrolled ? 'text-midnight hover:text-ocean' : 'text-white hover:text-neutral'
        }`}
      >
        MASALA & MISO
      </Link>
      <nav className="flex items-center gap-8">
        {navLinks.map(({ href, label }) => {
          const active = isActive(href)
          return (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? active
                    ? 'text-burgundy'
                    : 'text-midnight hover:text-ocean'
                  : active
                    ? 'text-burgundy'
                    : 'text-white/90 hover:text-white'
              }`}
              style={scrolled ? undefined : { backgroundImage: 'none' }}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
