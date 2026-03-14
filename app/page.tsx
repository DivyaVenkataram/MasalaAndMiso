import Hero from '@/components/Hero'
import MapSection from '@/components/MapSection'
import FeaturedArticles from '@/components/FeaturedArticles'
import StoryGrid from '@/components/StoryGrid'
import SectionDivider from '@/components/SectionDivider'
import FadeInSection from '@/components/FadeInSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <FadeInSection>
        <MapSection />
      </FadeInSection>
      <SectionDivider />
      <FadeInSection>
        <FeaturedArticles />
      </FadeInSection>
      <SectionDivider />
      <FadeInSection>
        <StoryGrid />
      </FadeInSection>
    </main>
  )
}
