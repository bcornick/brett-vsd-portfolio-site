import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

import { RootLayout } from '@/components/RootLayout'

import { Analytics } from '@vercel/analytics/next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Brett Cornick',
    default: 'Brett Cornick',
  },
  metadataBase: new URL('https://brettcornick.com/'),
  openGraph: {
    title: 'Brett Cornick',
    description:
      'Brett is a climate-first technologist with a strong foundation in materials science, process design, software development, and AI/automation.',
    url: 'https://brettcornick.com',
    siteName: 'Brett Cornick Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brett Cornick',
    description:
      'Brett is a climate-first technologist with a strong foundation in materials science, process design, software development, and AI/automation.',
    creator: '@brett_cornick',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'font-display': 'swap',
    'next-head-count': '0',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <Analytics />
      </body>
    </html>
  )
}
