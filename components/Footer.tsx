'use client'

import Link from 'next/link'

const FOOTER_IMAGE =
  'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=1920&q=80'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden -mt-px min-h-[280px] flex flex-col justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${FOOTER_IMAGE}')` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#16202b]/75 via-[#16202b]/85 to-[#16202b]/95"
        aria-hidden
      />
      <div className="relative z-10 py-section px-8">
        <div className="max-w-layout mx-auto flex flex-col items-center text-center">
          <Link
            href="/"
            className="font-playfair text-xl font-medium uppercase tracking-[0.15em] transition-colors inline-block mb-4 text-white hover:text-neutral"
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
