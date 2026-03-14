import Link from 'next/link'
import Image from 'next/image'
import { stories } from '@/data/stories'

export default function PostsPage() {
  return (
    <main>
      <section className="relative pt-28 pb-section px-8 flex flex-col items-center justify-center min-h-[55vh] bg-cover bg-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60" />
        <h1 className="relative z-10 font-playfair text-4xl sm:text-5xl font-medium text-white text-center mb-3 tracking-tight">
          Posts
        </h1>
        <p className="relative z-10 text-white/90 text-center max-w-xl text-[18px] leading-[1.6]">
          Dispatches from the table. Long-form reviews and stories.
        </p>
      </section>

      <section className="relative section-after-image">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/posts/${story.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden"
            >
              <Image
                src={story.image}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-midnight/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h2 className="font-playfair text-xl sm:text-2xl font-medium text-white">
                    {story.title}
                  </h2>
                  <p className="text-white/90 text-metadata mt-1">{story.city} · {story.readTime}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative w-full min-h-[40vh] bg-cover bg-center image-fade-to-page">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </section>
    </main>
  )
}
