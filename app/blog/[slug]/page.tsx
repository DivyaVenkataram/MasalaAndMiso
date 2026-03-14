import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getStory } from '@/data/stories'
import ArticlePage from '@/components/ArticlePage'

type Props = { params: { slug: string } }

export default function BlogPost({ params }: Props) {
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
      <p className="pt-8">
        <Link href="/blog" className="text-ocean link-editorial hover:text-burgundy">
          ← Back to all articles
        </Link>
      </p>
    </ArticlePage>
  )
}
