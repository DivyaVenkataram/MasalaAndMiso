import Image from 'next/image'
import type { ReactNode } from 'react'

type ArticlePageProps = {
  title: string
  author: string
  date: string
  readTime: string
  image: string
  imageAlt?: string
  pullQuote?: string | null
  children: ReactNode
}

export default function ArticlePage({
  title,
  author,
  date,
  readTime,
  image,
  imageAlt = '',
  pullQuote,
  children,
}: ArticlePageProps) {
  return (
    <article>
      <div className="relative w-full aspect-[21/9] min-h-[320px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="max-w-reading mx-auto px-8 py-16">
        <h1 className="font-playfair text-3xl sm:text-4xl font-medium text-midnight mb-6">
          {title}
        </h1>
        <p className="text-midnight/70 text-sm uppercase tracking-widest mb-12">
          {author} · {date} · {readTime}
        </p>
        <div className="space-y-6 text-lg leading-relaxed text-midnight">
          {children}
          {pullQuote && (
            <blockquote className="pull-quote-editorial py-12 my-12">
              &ldquo;{pullQuote}&rdquo;
            </blockquote>
          )}
        </div>
      </div>
    </article>
  )
}
