import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getFutureInsightBySlug, getFutureInsights } from '@/lib/future-insights'
import { notFound } from 'next/navigation'
import NewsletterForm from '@/components/newsletter-form'

export async function generateStaticParams() {
  const insights = await getFutureInsights()
  const slugs = insights.map(insight => ({ slug: insight.slug }))

  return slugs
}

export default async function FutureInsight({ params }: { params: { slug: string } }) {
  const { slug } = params
  const insight = await getFutureInsightBySlug(slug)

  if (!insight) {
    notFound()
  }

  const { metadata, content } = insight
  const { title, image, video, author, publishedAt } = metadata

  return (
    <section className="min-h-screen bg-black text-white pb-24 pt-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href='/future-insights'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-gray-400 transition-colors hover:text-white'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to Future Insights</span>
        </Link>

        <div className="max-w-3xl mx-auto">
          {/* Media Section (Image or Video) */}
          {video && (
            <div className="relative mb-8 w-full overflow-hidden rounded-lg">
              <video 
                src={video} 
                controls 
                className="w-full" 
                poster={image}
              />
            </div>
          )}
          
          {!video && image && (
            <div className="relative mb-8 h-96 w-full overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={title || ''}
                className="object-cover"
                fill
              />
            </div>
          )}

          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold">{title}</h1>
            <p className="mt-3 text-sm text-gray-400">
              {author} / {formatDate(publishedAt ?? '')}
            </p>
          </header>

          <main className="prose prose-invert max-w-none">
            <MDXContent source={content} />
          </main>

          <footer className="mt-16">
            <NewsletterForm />
          </footer>
        </div>
      </div>
    </section>
  )
}