'use client'

import Link from 'next/link'
import CaliforniaOutline from '@/components/maps/CaliforniaOutline'
import JapanOutline from '@/components/maps/JapanOutline'
import NewYorkOutline from '@/components/maps/NewYorkOutline'
import SpainOutline from '@/components/maps/SpainOutline'
import MassachusettsOutline from '@/components/maps/MassachusettsOutline'

export default function MasalaMisoLocationGallery() {
  const locations = [
    {
      id: 'california',
      label: 'California',
      sublabel: 'Los Angeles · San Francisco · Napa',
      href: '/locations/california',
      size: 'hero',
      shape: <CaliforniaOutline className="h-full w-full" />,
    },
    {
      id: 'japan',
      label: 'Japan',
      sublabel: 'Tokyo · Kyoto · Osaka',
      href: '/locations/japan',
      size: 'tall',
      shape: <JapanOutline className="h-full w-full" />,
    },
    {
      id: 'new-york',
      label: 'New York',
      sublabel: 'NYC · Brooklyn · Hudson',
      href: '/locations/new-york',
      size: 'feature',
      shape: <NewYorkOutline className="h-full w-full" />,
    },
    {
      id: 'spain',
      label: 'Spain',
      sublabel: 'Madrid · Barcelona · San Sebastián',
      href: '/locations/spain',
      size: 'compact',
      shape: <SpainOutline className="h-full w-full" />,
    },
    {
      id: 'massachusetts',
      label: 'Boston',
      sublabel: 'Back Bay · Cambridge · North End',
      href: '/locations/boston',
      size: 'compact',
      shape: <MassachusettsOutline className="h-full w-full" />,
    },
  ]

  const OCEAN_IMAGE =
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=1920&q=80'

  return (
    <section
      className="relative min-h-screen overflow-hidden px-6 py-14 md:px-10 lg:px-16 pb-[380px] mb-[-380px]"
      data-section="explore-by-place"
    >
      {/* Ocean photo background — extends behind footer for seamless join */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${OCEAN_IMAGE}')` }}
        aria-hidden
      />
      {/* Blend from photo above (dark) into ocean — top gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-transparent"
        style={{ height: '42%' }}
        aria-hidden
      />
      {/* Soft overlay so text and map stay readable */}
      <div className="absolute inset-0 bg-[#0a3d52]/40" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a3d52]/50" aria-hidden />

      <div className="relative z-10 flex min-h-screen flex-col w-full text-white">
        <div className="flex-shrink-0 mb-8 flex flex-col items-center gap-5 text-center lg:mb-10">
          <div className="h-px w-full max-w-4xl mx-auto bg-white/25" />
          <p className="text-[11px] uppercase tracking-[0.55em] text-white/85">
            Masala &amp; Miso
          </p>
          <div>
            <h2
              className="text-3xl font-light uppercase tracking-[0.28em] md:text-4xl text-white"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Explore by Place
            </h2>
            <p
              className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/90 md:text-base"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              A destination-led archive of our favorite tables, tasting menus, neighborhood gems,
              and city guides. Hover to isolate a region. Click to open your full rankings for that place.
            </p>
          </div>
        </div>

        {/* Map area: full width of section, centered, fills space below header */}
        <div className="group relative flex flex-1 min-h-0 w-full items-center justify-center">
          {/* Desktop: full-width grid proportional to section, centered, fills space below */}
          <div className="hidden w-full h-full min-h-[400px] lg:grid lg:grid-cols-5 lg:grid-rows-[1fr_auto] lg:gap-3 lg:gap-y-4 lg:content-center">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={location.href}
                className={[
                  'group/item relative flex min-h-0 flex-col items-center transition-all duration-500 ease-out lg:row-span-2',
                  'group-hover:opacity-30 group-hover:blur-[2px]',
                  'hover:!opacity-100 hover:!blur-0',
                  'focus-visible:!opacity-100 focus-visible:!blur-0 focus-visible:outline-none',
                ].join(' ')}
              >
                <div className="relative flex min-h-0 w-full flex-1 items-center justify-center lg:min-h-0 lg:max-h-[360px]">
                  <div className="absolute inset-0 flex items-center justify-center p-1">
                    <div className="h-full w-full max-h-[320px] max-w-full scale-[1.035] text-white/20 blur-[1px] transition-all duration-500 group-hover/item:scale-[1.045] group-hover/item:text-wine [&>svg]:h-full [&>svg]:max-h-[320px] [&>svg]:w-auto [&>svg]:object-contain">
                      {location.shape}
                    </div>
                  </div>
                  <div className="relative z-10 flex h-full w-full max-h-[320px] max-w-full items-center justify-center p-1 text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover/item:scale-[1.025] [&>svg]:h-full [&>svg]:max-h-[320px] [&>svg]:w-auto [&>svg]:object-contain">
                    {location.shape}
                  </div>
                </div>

                <div className="flex-shrink-0 mt-2 w-full text-center lg:mt-0 lg:pt-4">
                  <h3
                    className="text-[28px] uppercase tracking-[0.32em] text-white"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {location.label}
                  </h3>
                  <p
                    className="mt-2 text-sm md:text-base uppercase tracking-[0.28em] text-white/80"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {location.sublabel}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile/tablet: larger shapes, fill space */}
          <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={location.href}
                className="group/item flex min-h-[320px] flex-col items-center transition-all duration-500 hover:opacity-100 focus-visible:outline-none sm:min-h-[380px]"
              >
                <div className="relative flex min-h-0 w-full flex-1 items-center justify-center max-h-[320px]">
                  <div className="absolute inset-0 flex items-center justify-center p-1">
                    <div className="h-full w-full max-h-[300px] max-w-full scale-[1.03] text-white/20 blur-[1px] transition-all duration-500 group-hover/item:text-wine [&>svg]:h-full [&>svg]:max-h-[300px] [&>svg]:w-auto [&>svg]:object-contain">
                      {location.shape}
                    </div>
                  </div>
                  <div className="relative z-10 flex h-full w-full max-h-[300px] max-w-full items-center justify-center p-1 text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover/item:scale-[1.025] [&>svg]:h-full [&>svg]:max-h-[300px] [&>svg]:w-auto [&>svg]:object-contain">
                    {location.shape}
                  </div>
                </div>

                <div className="flex-shrink-0 mt-4 w-full text-center">
                  <h3
                    className="text-[24px] uppercase tracking-[0.28em] text-white"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {location.label}
                  </h3>
                  <p
                    className="mt-2 text-sm md:text-base uppercase tracking-[0.28em] text-white/80"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {location.sublabel}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
