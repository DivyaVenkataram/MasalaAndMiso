'use client'

import Link from 'next/link'
import Image from 'next/image'

const featured = {
  main: {
    slug: 'le-bernardin-ocean-on-a-plate',
    title: 'Le Bernardin: The Ocean on a Plate',
    description: 'Eric Ripert\'s temple of seafood remains the gold standard. Omakase that redefines restraint and clarity.',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    city: 'New York',
  },
  side: [
    {
      slug: 'alinea-edible-theatre',
      title: 'Alinea: Twenty Years of Edible Theatre',
      description: 'Grant Achatz\'s flagship still delivers the most ambitious tasting menu in America.',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80',
      city: 'Chicago',
    },
    {
      slug: 'jiro-edomae',
      title: 'Jiro: The Last Word in Edomae',
      description: 'Growing up in Tokyo, I learned that shari and neta are a dialogue. Here, that dialogue is perfect.',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80',
      city: 'Tokyo',
    },
  ],
}

function ArticleCard({
  slug,
  title,
  description,
  readTime,
  image,
  city,
  large = false,
}: {
  slug: string
  title: string
  description: string
  readTime: string
  image: string
  city: string
  large?: boolean
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block overflow-hidden rounded-sm bg-white shadow-sm transition-shadow duration-200 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes={large ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
        />
        <span className="absolute top-4 left-4 rounded-sm bg-wine/90 px-3 py-1 text-sm font-medium text-white">
          {city}
        </span>
      </div>
      <div className="p-6">
        <h2 className={`font-baskerville font-normal text-midnight mb-2 ${large ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
          {title}
        </h2>
        <p className="text-midnight/80 text-base leading-relaxed mb-3 line-clamp-2">
          {description}
        </p>
        <span className="text-sm text-wine">{readTime}</span>
      </div>
    </Link>
  )
}

export default function FeaturedArticles() {
  return (
    <section className="max-w-layout mx-auto px-6 py-20">
      <h2 className="font-baskerville text-3xl sm:text-4xl text-midnight mb-12 border-b-2 border-burgundy pb-2 w-fit">
        Featured Articles
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <ArticleCard {...featured.main} large />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6">
          {featured.side.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}
