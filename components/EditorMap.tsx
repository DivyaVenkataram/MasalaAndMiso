'use client'

import Link from 'next/link'
<<<<<<< HEAD
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
=======
import { LAND_PATH } from '@/data/worldContinents'

type City = {
  id: string
  cityName: string
  lon: number
  lat: number
  restaurants: string
}

const CITIES: City[] = [
  { id: 'sf', cityName: 'San Francisco', lon: -122.41, lat: 37.78, restaurants: 'Nari, Snail Bar, Tiya, F.O.B. Kitchen' },
  { id: 'ny', cityName: 'New York City', lon: -74, lat: 40.71, restaurants: 'Le Bernardin, Atomix, and more' },
  { id: 'tokyo', cityName: 'Tokyo', lon: 139.65, lat: 35.68, restaurants: "Jiro, Narisawa, and the city's best" },
  { id: 'mumbai', cityName: 'Mumbai', lon: 72.87, lat: 19.07, restaurants: 'Coming soon' },
]

function lonLatToXY(lon: number, lat: number) {
  return { x: lon + 180, y: 90 - lat }
}

const PIN_PATH = 'M0,0 L-1.6,5.2 A1.6 1.6 0 0 0 1.6,5.2 Z'

export default function EditorMap() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [openCityId, setOpenCityId] = useState<string | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVisible(true)
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const openCity = openCityId ? CITIES.find((c) => c.id === openCityId) : null

  return (
    <section ref={ref} className="relative pt-8 sm:pt-10 pb-0 overflow-hidden bg-page">
      <div className="max-w-layout mx-auto px-6 sm:px-8 mb-3">
        <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight text-center mb-2 tracking-tight">
          Where We&apos;ve Dined
        </h2>
        <p className="text-midnight/80 text-center max-w-xl mx-auto text-[18px] leading-[1.6]">
          Seven continents, one map. Click a pin to see our restaurant picks in that city.
        </p>
      </div>

      <div
        className="w-full transition-opacity duration-700"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div className="relative overflow-hidden w-full" style={{ background: '#f3f3f5' }}>
          {/* Ombre in — less at top */}
          <div
            className="absolute inset-x-0 top-0 z-10 pointer-events-none"
            style={{
              height: '28%',
              background: 'linear-gradient(to bottom, #f3f3f5 0%, rgba(243, 243, 245, 0.92) 25%, rgba(243, 243, 245, 0.4) 65%, transparent 100%)',
            }}
            aria-hidden
          />
          {/* Ombre out — extends up over countries so fade is over South America */}
          <div
            className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
            style={{
              height: '58%',
              background: 'linear-gradient(to top, #f3f3f5 0%, #f3f3f5 4%, rgba(243, 243, 245, 0.97) 14%, rgba(243, 243, 245, 0.88) 28%, rgba(243, 243, 245, 0.5) 52%, transparent 100%)',
            }}
            aria-hidden
          />
          <svg
            viewBox="0 0 360 180"
            className="w-full h-auto block"
            style={{ aspectRatio: '360 / 180', minHeight: 420, maxHeight: 'min(80vh, 640px)' }}
            aria-label="World map: where we’ve dined"
          >
            {/* Ocean — page background */}
            <rect width="360" height="180" fill="#f3f3f5" />
            {/* Land — darker countries only, abstract shapes */}
            <path
              d={LAND_PATH}
              fill="rgba(17, 70, 101, 0.54)"
              stroke="rgba(17, 70, 101, 0.85)"
              strokeWidth={0.58}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* City pins + labels */}
            {CITIES.map((city) => {
              const { x, y } = lonLatToXY(city.lon, city.lat)
              const isOpen = openCityId === city.id
              return (
                <g
                  key={city.id}
                  transform={`translate(${x}, ${y})`}
                  className="cursor-pointer outline-none"
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenCityId(isOpen ? null : city.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setOpenCityId(isOpen ? null : city.id)
                    }
                  }}
                  aria-label={`${city.cityName}: ${city.restaurants}`}
                >
                  <text
                    x={0}
                    y={10}
                    textAnchor="middle"
                    fill="#16202b"
                    fontSize={3.2}
                    fontFamily="var(--font-playfair), Georgia, serif"
                    fontWeight={500}
                    pointerEvents="none"
                  >
                    {city.cityName}
                  </text>
                  <path
                    d={PIN_PATH}
                    fill="rgba(17, 70, 101, 0.2)"
                    transform="scale(1,-1) translate(0.35, 0.28)"
                    pointerEvents="none"
                  />
                  <path
                    d={PIN_PATH}
                    fill="#720f32"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth={0.45}
                    strokeLinejoin="round"
                    transform="scale(1,-1)"
                  />
                </g>
              )
            })}
          </svg>
        </div>

        {/* Dropdown: restaurants for selected city — blue text on light */}
        {openCity && (
          <div
            className="mt-2 rounded-sm bg-white/95 backdrop-blur-sm px-5 py-4 shadow-lg border border-ocean/15 max-w-md mx-auto animate-fade-in"
            role="region"
            aria-label={`Restaurants in ${openCity.cityName}`}
          >
            <p className="font-playfair text-base font-medium text-ocean tracking-tight">
              {openCity.cityName}
            </p>
            <p className="text-ocean/80 text-metadata mt-1 leading-relaxed">
              {openCity.restaurants}
            </p>
            <Link
              href="/ranking-guide"
              className="inline-block mt-3 text-ocean text-metadata border-b border-ocean/50 pb-0.5 hover:border-ocean transition-colors"
              style={{ backgroundImage: 'none' }}
            >
              View rankings →
            </Link>
>>>>>>> 5043f88ddfeff8ad9b963d4cfefefcdab4c0b10d
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
