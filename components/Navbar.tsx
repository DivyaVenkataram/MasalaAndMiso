'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/ranking-guide', label: 'Ranking Guide' },
  { href: '/editors-table', label: "Editor's Table" },
  { href: '/cities', label: 'Cities' },
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

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href + '/'))

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        scrolled ? 'bg-page/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <Link
        href="/"
        className={`font-playfair text-lg font-medium uppercase tracking-[0.15em] transition-colors duration-200 ${
          scrolled ? 'text-midnight hover:text-burgundy' : 'text-white hover:text-white/90'
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
              className={`text-filter font-medium transition-colors duration-200 ${
                scrolled ? 'link-editorial ' : ''
              } ${active ? 'text-burgundy' : scrolled ? 'text-midnight' : 'text-white/90 hover:text-white'}`}
              style={!scrolled ? { backgroundImage: 'none' } : undefined}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
