import Link from 'next/link'
import Image from 'next/image'
import { stories } from '@/data/stories'
import { RankingStylePageHero } from '@/components/RankingStylePageHero'

export default function BlogPage() {
  return (
    <main className="bg-[#f3f0ea]">
      <RankingStylePageHero
        imageSrc="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1920&q=80"
        imageAlt="Restaurant"
        eyebrow="Reviews & tasting notes"
        title="BLOG"
        description="In-depth reviews, tasting notes, and stories from the table."
        blendColor="#f3f0ea"
        cta={{ href: '#blog-grid', label: 'Read stories' }}
      />
      <div
        id="blog-grid"
        className="relative z-10 -mt-16 max-w-layout mx-auto px-6 pb-20 pt-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/posts/${story.slug}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-200 group-hover:shadow-lg group-hover:-translate-y-0.5">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={story.image}
                    alt=""
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-4 left-4 rounded-sm bg-wine px-3 py-1 text-sm font-medium text-white">
                    {story.city}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="font-baskerville text-xl text-midnight transition-colors group-hover:text-burgundy">
                    {story.title}
                  </h2>
                  <p className="text-midnight/80 text-sm mt-1 line-clamp-2">
                    {story.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
