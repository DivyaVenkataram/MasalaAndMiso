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
    <article className="bg-page">
      <div className="group relative w-full aspect-[21/9] min-h-[280px] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-midnight/60 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" aria-hidden />
      </div>
      <div className="max-w-reading mx-auto px-8 py-section">
        <h1 className="font-playfair text-3xl sm:text-page font-medium text-midnight mb-4">
          {title}
        </h1>
        <p className="text-metadata text-midnight/70 uppercase tracking-widest mb-8">
          {author} · {date} · {readTime}
        </p>
        <div className="space-y-4 text-[18px] leading-[1.6] text-midnight">
          {children}
          {pullQuote && (
            <blockquote className="pull-quote-editorial py-8 my-8">
              &ldquo;{pullQuote}&rdquo;
            </blockquote>
          )}
        </div>
      </div>
    </article>
  )
}
