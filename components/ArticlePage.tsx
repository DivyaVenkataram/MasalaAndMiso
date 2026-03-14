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
    <article className="pt-24 pb-20">
      <div className="relative w-full aspect-[21/9] min-h-[280px] bg-midnight">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="max-w-reading mx-auto px-6 -mt-16 relative z-10">
        <h1 className="font-baskerville text-4xl sm:text-[2.75rem] text-midnight mb-4 bg-neutral p-6 shadow-lg">
          {title}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-wine mb-12 bg-neutral px-6 py-3">
          <span>{author}</span>
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
        <div className="bg-neutral shadow-sm p-8 sm:p-12 space-y-6 text-base sm:text-lg leading-relaxed text-midnight">
          {children}
          {pullQuote && (
            <blockquote className="font-baskerville text-2xl sm:text-[1.75rem] text-burgundy text-center py-8 my-8 border-y border-wine/30">
              &ldquo;{pullQuote}&rdquo;
            </blockquote>
          )}
        </div>
      </div>
    </article>
  )
}
