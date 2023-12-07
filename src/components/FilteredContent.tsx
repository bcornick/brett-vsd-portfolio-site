'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'

import { MDXEntry, Article } from '@/lib/mdx'
import { Container } from './Container'
import { FadeIn } from './FadeIn'
import { Border } from './Border'

import { formatDate } from '@/lib/formatDate'
import { Button } from './Button'

function FilterSelector({
  currentFilter,
  setCurrentFilter,
}: {
  currentFilter: string
  setCurrentFilter: Dispatch<SetStateAction<string>>
}) {
  return (
    <Container className="mb-12 mt-24 sm:mt-32 lg:mt-40">
      <h3 className="mb-2 block font-display text-base font-semibold text-neutral-950">
        Filter by type
      </h3>
      <div className="flex flex-wrap gap-2 md:gap-4">
        <Button
          onClick={() => {
            setCurrentFilter('All')
          }}
        >
          <span
            className={`${currentFilter === 'All' ? 'text-emerald-400' : ''}`}
          >
            All
          </span>
        </Button>
        <Button
          onClick={() => {
            setCurrentFilter('Blog post')
          }}
        >
          <span
            className={`${
              currentFilter === 'Blog post' ? 'text-emerald-400' : ''
            }`}
          >
            Blog posts
          </span>
        </Button>
        <Button
          onClick={() => {
            setCurrentFilter('Short-form')
          }}
        >
          <span
            className={`${
              currentFilter === 'Short-form' ? 'text-emerald-400' : ''
            }`}
          >
            Short-form
          </span>
        </Button>
        <Button
          onClick={() => {
            setCurrentFilter('Podcast')
          }}
        >
          <span
            className={`${
              currentFilter === 'Podcast' ? 'text-emerald-400' : ''
            }`}
          >
            Podcasts
          </span>
        </Button>
      </div>
    </Container>
  )
}

export default function FilteredContent({
  articles,
}: {
  articles: MDXEntry<Article>[]
}) {
  let [currentFilter, setCurrentFilter] = useState('All')

  return (
    <>
      <FadeIn>
        <FilterSelector
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
      </FadeIn>
      <Container>
        <div className="space-y-24 lg:space-y-32">
          {articles
            .filter((article) => {
              if (currentFilter === 'All') {
                return true
              } else {
                return article.author.role === currentFilter
              }
            })
            .map((article) => (
              <FadeIn key={article.href}>
                <article>
                  <Border className="pt-16">
                    <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                      <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                        <h2 className="font-display text-2xl font-semibold text-neutral-950">
                          <Link href={article.href}>{article.title}</Link>
                        </h2>
                        <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                          <dt className="sr-only">Published</dt>
                          <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                            <time dateTime={article.date}>
                              {formatDate(article.date)}
                            </time>
                          </dd>
                          <dt className="sr-only">Author</dt>
                          <dd className="mt-6 flex gap-x-4">
                            <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                              <Image
                                alt=""
                                {...article.author.image}
                                className="h-12 w-12 object-cover grayscale"
                              />
                            </div>
                            <div className="text-sm text-neutral-950">
                              <div className="font-semibold">
                                {article.author.name}
                              </div>
                              <div>{article.author.role}</div>
                            </div>
                          </dd>
                        </dl>
                        <p className="mt-6 max-w-2xl text-base text-neutral-600">
                          {article.description}
                        </p>
                        <Button
                          href={article.href}
                          aria-label={`Read more: ${article.title}`}
                          className="mt-8"
                        >
                          Read more
                        </Button>
                      </div>
                    </div>
                  </Border>
                </article>
              </FadeIn>
            ))}
        </div>
      </Container>
    </>
  )
}
