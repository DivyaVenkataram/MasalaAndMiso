'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

<<<<<<< HEAD
const OCEAN_IMAGE =
  'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=1920&q=80'
=======
const FOOTER_IMAGE =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80'
>>>>>>> 863b9ca36d7276627f476a5768863efd2a88c231

export default function Footer() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <footer className="relative overflow-hidden -mt-px min-h-[280px] flex flex-col justify-center">
      {/* On home: no background — ocean from Explore by Place extends behind. Other pages: show ocean. */}
      {!isHome && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${OCEAN_IMAGE}')` }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#0a3d52]/50 via-[#0a3d52]/65 to-[#0a3d52]/85"
            aria-hidden
          />
        </>
      )}
      <div className="relative z-10 py-section px-8">
        <div className="max-w-layout mx-auto flex flex-col items-center text-center">
          <Link
            href="/"
            className="font-playfair text-xl font-medium uppercase tracking-[0.15em] text-white hover:text-neutral transition-colors inline-block mb-4"
          >
            MASALA & MISO
          </Link>
          <p className="text-white/85 text-metadata leading-[1.6] max-w-md">
            A luxury culinary travel publication. Cross-cultural cuisine, travel storytelling, and elevated food journalism.
          </p>
        </div>
        <div className="max-w-layout mx-auto mt-8 pt-8 text-center">
          <p className="text-white/70 text-metadata">© Masala & Miso</p>
        </div>
      </div>
    </footer>
  )
}
