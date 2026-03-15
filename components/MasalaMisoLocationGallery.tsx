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

  return (
    <section
      className="min-h-screen bg-[#f3f0ea] px-6 py-14 text-[#16202b] md:px-10 lg:px-16"
      data-section="explore-by-place"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 flex flex-col items-center gap-5 text-center">
          <div className="h-px w-full bg-[#16202b]/20" />
          <p className="text-[11px] uppercase tracking-[0.55em] text-[#7b445a]">
            Masala &amp; Miso
          </p>
          <div>
            <h2
              className="text-3xl font-light uppercase tracking-[0.28em] md:text-4xl"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Explore by Place
            </h2>
            <p
              className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#16202b]/70 md:text-base"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              A destination-led archive of our favorite tables, tasting menus, neighborhood gems,
              and city guides. Hover to isolate a region. Click to open your full rankings for that place.
            </p>
          </div>
        </div>

        <div className="group relative mx-auto max-w-[1380px]">
          {/* Desktop: equal columns, uniform gap, same cell size for each outline */}
          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-10 lg:place-items-center">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={location.href}
                className={[
                  'group/item relative flex w-full max-w-[260px] flex-col items-center transition-all duration-500 ease-out',
                  'group-hover:opacity-30 group-hover:blur-[2px]',
                  'hover:!opacity-100 hover:!blur-0',
                  'focus-visible:!opacity-100 focus-visible:!blur-0 focus-visible:outline-none',
                ].join(' ')}
              >
                <div className="relative flex h-[300px] w-full min-w-0 max-w-[200px] items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-full scale-[1.035] text-[#d1d1d6]/70 blur-[1px] transition-all duration-500 group-hover/item:scale-[1.045] group-hover/item:text-[#720f32]/15">
                      {location.shape}
                    </div>
                  </div>
                  <div className="relative z-10 flex h-full w-full items-center justify-center text-[#114665] drop-shadow-[0_18px_30px_rgba(22,32,43,0.08)] transition-transform duration-500 group-hover/item:scale-[1.025]">
                    {location.shape}
                  </div>
                </div>

                <div className="mt-6 w-full text-center">
                  <h3
                    className="text-[28px] uppercase tracking-[0.32em] text-[#16202b]"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {location.label}
                  </h3>
                  <p
                    className="mt-2 text-[11px] uppercase tracking-[0.33em] text-[#16202b]/55"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {location.sublabel}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile/tablet: equal gaps, same slot size per item */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:hidden">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={location.href}
                className="group/item flex flex-col items-center transition-all duration-500 hover:opacity-100 focus-visible:outline-none"
              >
                <div className="relative flex h-[240px] w-full max-w-[180px] items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-full scale-[1.03] text-[#d1d1d6]/70 blur-[1px] transition-all duration-500 group-hover/item:text-[#720f32]/15">
                      {location.shape}
                    </div>
                  </div>
                  <div className="relative z-10 flex h-full w-full items-center justify-center text-[#114665] transition-transform duration-500 group-hover/item:scale-[1.025]">
                    {location.shape}
                  </div>
                </div>

                <div className="mt-5 w-full text-center">
                  <h3
                    className="text-[24px] uppercase tracking-[0.28em] text-[#16202b]"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {location.label}
                  </h3>
                  <p
                    className="mt-2 text-[11px] uppercase tracking-[0.28em] text-[#16202b]/55"
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
