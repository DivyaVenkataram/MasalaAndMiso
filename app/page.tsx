/** Layout: cinematic hero (two images + title on scroll) then Explore by Place. */
import CinematicHero from '@/components/CinematicHero'
import MasalaMisoLocationGallery from '@/components/MasalaMisoLocationGallery'
import FadeInSection from '@/components/FadeInSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f0ea] home-page">
      <CinematicHero />

      <FadeInSection>
        <MasalaMisoLocationGallery />
      </FadeInSection>
    </main>
  )
}
