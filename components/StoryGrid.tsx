'use client'

import Link from 'next/link'
import Image from 'next/image'

const stories = [
  {
    slug: 'benu-san-francisco',
    title: 'Benu: East Meets West in the Tenderloin',
    city: 'San Francisco',
    description: 'Corey Lee\'s multi-cultural tasting menu is both precise and soulful.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  },
  {
    slug: 'single-thread-healdsburg',
    title: 'Single Thread: Farm to Table in Wine Country',
    city: 'Healdsburg',
    description: 'The garden is the star. One of America\'s most immersive dining experiences.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
  },
  {
    slug: 'arpege-paris',
    title: 'Arpège: Alain Passard\'s Vegetable Revolution',
    city: 'Paris',
    description: 'The produce from Passard\'s gardens drives the menu. A landmark of modern French cuisine.',
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&q=80',
  },
  {
    slug: 'atomix-new-york',
    title: 'Atomix: Korean Counter in NoMad',
    city: 'New York',
    description: 'Refined Korean tasting in an intimate counter setting. Two stars, fully deserved.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80',
  },
  {
    slug: 'narisawa-tokyo',
    title: 'Narisawa: Satoyama and Forest to Table',
    city: 'Tokyo',
    description: 'Where the forest meets the plate. Japanese innovation at its finest.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&q=80',
  },
  {
    slug: 'quince-san-francisco',
    title: 'Quince: California Luxury in Jackson Square',
    city: 'San Francisco',
    description: 'Seasonal, elegant, and consistently excellent. A San Francisco institution.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80',
  },
]

const cityTags = ['Tokyo', 'Mumbai', 'Kyoto', 'Osaka', 'Delhi', 'New York', 'Paris']

export default function StoryGrid() {
  return (
    <section className="max-w-layout mx-auto px-6 py-20">
      <div className="flex flex-wrap items-center gap-3 mb-12">
        <h2 className="font-baskerville text-3xl text-midnight border-b-2 border-burgundy pb-2 w-fit mr-4">
          Stories
        </h2>
        {cityTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-wine px-4 py-1.5 text-sm font-medium text-white"
          >
            {tag}
          </span>
        ))}
      </div>
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
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <span className="text-sm font-medium text-wine">{story.city}</span>
                <h3 className="font-baskerville text-xl text-midnight mt-1 mb-2 group-hover:text-ocean transition-colors">
                  {story.title}
                </h3>
                <p className="text-midnight/80 text-base leading-relaxed line-clamp-2">
                  {story.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
