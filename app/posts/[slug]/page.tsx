import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getStory } from '@/data/stories'
import ArticlePage from '@/components/ArticlePage'
import type { Metadata } from 'next'

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = getStory(params.slug)
  if (!story) return { title: 'Not Found' }
  return {
    title: `${story.title} — MASALA & MISO`,
    description: story.description,
  }
}

export default function PostPage({ params }: Props) {
  const story = getStory(params.slug)
  if (!story) notFound()

  return (
    <ArticlePage
      title={story.title}
      author={story.author}
      date={story.date}
      readTime={story.readTime}
      image={story.image}
      pullQuote={story.pullQuote}
    >
      <p>
        What defines the best restaurants isn&apos;t excess—it&apos;s clarity. Every course
        speaks in a single, precise dialect: the language of the kitchen, the region, and
        the ingredients. At {story.title.split(':')[0]}, that language is spoken with
        exceptional fluency.
      </p>
      <p>
        The dining room is understated; the service seamless. This is fine dining as
        meditation—each dish a deliberate note in a longer composition. We seek
        restaurants that speak a clear culinary language, and we judge them by the same
        standards we bring from our training and our tables around the world.
      </p>
      <p>
        <strong>Verdict:</strong> Essential. Book well ahead, and go with an empty
        stomach and an open mind. This is where technique serves soul.
      </p>
      <p className="pt-12">
        <Link href="/posts" className="link-editorial">
          ← Back to posts
        </Link>
      </p>
    </ArticlePage>
  )
}
