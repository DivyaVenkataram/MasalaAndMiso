import Link from 'next/link'
import Image from 'next/image'
import { stories } from '@/data/stories'

export default function BlogPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-layout mx-auto px-6">
        <h1 className="font-playfair text-5xl sm:text-6xl font-semibold uppercase tracking-brand text-midnight mb-4">
          Blog
        </h1>
        <p className="font-baskerville text-xl text-midnight/80 mb-16 max-w-reading">
          In-depth reviews, tasting notes, and stories from the table.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/blog/${story.slug}`}
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
                  <span className="absolute top-4 left-4 rounded-full bg-wine px-3 py-1 text-sm font-medium text-white">
                    {story.city}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="font-baskerville text-xl text-midnight group-hover:text-ocean transition-colors">
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
