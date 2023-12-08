import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Brett Cornick',
    default: 'Brett Cornick',
  },
  openGraph: {
    title: 'Brett Cornick',
    description:
      'Brett is a climate-first technologist with a strong foundation in materials science, process design, software development, and AI/automation.',
    url: 'https://brettcornick.com',
    siteName: 'Brett Cornick Portfolio',
    images: [
      {
        url: 'https://imgur.com/a/xoSXl2F',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brett Cornick',
    description:
      'Brett is a climate-first technologist with a strong foundation in materials science, process design, software development, and AI/automation.',
    creator: '@brett_cornick',
    images: ['https://imgur.com/a/xoSXl2F'],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
