import dynamic from 'next/dynamic'

const RestaurantMap = dynamic(() => import('@/components/RestaurantMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full rounded-sm bg-midnight/10 animate-pulse flex items-center justify-center text-wine/80 font-baskerville">
      Loading map…
    </div>
  ),
})

export default function MapSection() {
  return (
    <section className="max-w-layout mx-auto px-6 py-16">
      <h2 className="font-baskerville text-2xl sm:text-3xl text-midnight mb-2 border-b-2 border-burgundy pb-2 w-fit">
        Our World of Restaurants
      </h2>
      <p className="font-baskerville text-midnight/80 mb-6 max-w-reading">
        Every pin is a meal we&apos;ve shared. Currently focused on the Bay Area, with more cities to come.
      </p>
      <RestaurantMap />
    </section>
  )
}
