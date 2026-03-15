'use client'

import Link from 'next/link'
import CaliforniaOutline from '@/components/maps/CaliforniaOutline'
import JapanOutline from '@/components/maps/JapanOutline'
import NewYorkOutline from '@/components/maps/NewYorkOutline'
import SpainOutline from '@/components/maps/SpainOutline'
import MassachusettsOutline from '@/components/maps/MassachusettsOutline'

type LocationSize = 'hero' | 'tall' | 'feature' | 'compact'

type Location = {
  id: string
  label: string
  sublabel: string
  href: string
  size: LocationSize
  shape: React.ReactNode
}

export default function MasalaMisoLocationGallery() {
  const locations: Location[] = [
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
    <section className="min-h-screen bg-[#f3f0ea] px-6 py-14 text-[#16202b] md:px-10 lg:px-16">
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
          <div className="hidden lg:block">
            <div className="grid min-h-[980px] grid-cols-12 grid-rows-[170px_290px_250px_220px] gap-x-6 gap-y-2">
              {locations.map((location) => {
                const layout: Record<LocationSize, string> = {
                  hero: 'col-span-4 col-start-2 row-span-2 row-start-2',
                  tall: 'col-span-2 col-start-6 row-span-3 row-start-1',
                  feature: 'col-span-3 col-start-10 row-span-2 row-start-2 self-start',
                  compact:
                    location.id === 'spain'
                      ? 'col-span-2 col-start-6 row-start-4 self-end'
                      : 'col-span-2 col-start-9 row-start-4 self-start',
                }

                const shapeFrame: Record<LocationSize, string> = {
                  hero: 'h-[500px] w-[320px]',
                  tall: 'h-[640px] w-[180px]',
                  feature: 'h-[220px] w-[250px]',
                  compact:
                    location.id === 'spain' ? 'h-[150px] w-[190px]' : 'h-[118px] w-[190px]',
                }

                const labelSpacing: Record<LocationSize, string> = {
                  hero: 'mt-7',
                  tall: 'mt-6',
                  feature: 'mt-8',
                  compact: 'mt-5',
                }

                return (
                  <Link
                    key={location.id}
                    href={location.href}
                    className={[
                      'group/item relative flex flex-col items-center justify-start transition-all duration-500 ease-out',
                      'group-hover:scale-[0.985] group-hover:opacity-30 group-hover:blur-[2px]',
                      'hover:!scale-100 hover:!opacity-100 hover:!blur-0',
                      'focus-visible:!scale-100 focus-visible:!opacity-100 focus-visible:!blur-0 focus-visible:outline-none',
                      layout[location.size],
                    ].join(' ')}
                  >
                    <div
                      className={[
                        'relative flex items-center justify-center',
                        shapeFrame[location.size],
                      ].join(' ')}
                    >
                      <div className="absolute inset-0 scale-[1.035] text-[#d1d1d6]/70 blur-[1px] transition-all duration-500 group-hover/item:scale-[1.045] group-hover/item:text-[#720f32]/15">
                        {location.shape}
                      </div>
                      <div className="relative z-10 text-[#114665] drop-shadow-[0_18px_30px_rgba(22,32,43,0.08)] transition-all duration-500 group-hover/item:scale-[1.025]">
                        {location.shape}
                      </div>
                    </div>

                    <div
                      className={[
                        'text-center',
                        labelSpacing[location.size],
                      ].join(' ')}
                    >
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
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:hidden">
            {locations.map((location) => {
              const mobileFrame: Record<LocationSize, string> = {
                hero: 'h-[360px] w-[220px]',
                tall: 'h-[420px] w-[130px]',
                feature: 'h-[170px] w-[200px]',
                compact: 'h-[120px] w-[170px]',
              }

              return (
                <Link
                  key={location.id}
                  href={location.href}
                  className="group/item flex flex-col items-center justify-start transition-all duration-500 hover:opacity-100 focus-visible:outline-none"
                >
                  <div
                    className={[
                      'relative flex items-center justify-center',
                      mobileFrame[location.size],
                    ].join(' ')}
                  >
                    <div className="absolute inset-0 scale-[1.03] text-[#d1d1d6]/70 blur-[1px] transition-all duration-500 group-hover/item:text-[#720f32]/15">
                      {location.shape}
                    </div>
                    <div className="relative z-10 text-[#114665] transition-transform duration-500 group-hover/item:scale-[1.025]">
                      {location.shape}
                    </div>
                  </div>

                  <div className="mt-5 text-center">
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
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
