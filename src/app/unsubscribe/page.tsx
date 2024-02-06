'use client'

import Link from 'next/link'
// import { useSearchParams } from 'next/navigation'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
// import { NewsletterForm } from '@/components/Footer'

export default function NotFound() {
  // const searchParams = useSearchParams()
  // const overrideEmail = searchParams.get('email')?.toString()

  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="flex max-w-xl flex-col items-center text-center">
        <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
          Unsubscribe
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
          Sorry to see you go!
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          Submit your email address below to unsubscribe from all emails.
        </p>

        {/* <NewsletterForm action="unsubscribe" override={overrideEmail} /> */}

        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          Back to home page
        </Link>
      </FadeIn>
    </Container>
  )
}
