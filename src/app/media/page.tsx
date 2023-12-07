import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import { loadArticles } from '@/lib/mdx'
import FilteredContent from '@/components/FilteredContent'

export const metadata: Metadata = {
  title: 'Media',
  description: "Brett's latest blog posts, videos, and podcast appearances.",
}

export default async function Media() {
  let articles = await loadArticles()

  return (
    <>
      <PageIntro eyebrow="Media" title="Building in public">
        <p>
          I enjoy writing about and discussing topics related to climate tech,
          entrepreneurship, blockchain, AI, and other digital technologies.
        </p>
      </PageIntro>

      <FilteredContent articles={articles} />

      <ContactSection />
    </>
  )
}
