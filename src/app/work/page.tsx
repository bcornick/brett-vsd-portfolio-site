import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { type PastProject, type MDXEntry, loadPastProjects } from '@/lib/mdx'

function PastProjects({
  pastProjects,
}: {
  pastProjects: Array<MDXEntry<PastProject>>
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Recent Projects
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {pastProjects.map((pastProject) => (
          <FadeIn key={pastProject.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={pastProject.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {pastProject.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {pastProject.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={pastProject.date}>
                        {formatDate(pastProject.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={pastProject.href}>{pastProject.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {pastProject.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={pastProject.href}
                      aria-label={`See project details: ${pastProject.client}`}
                    >
                      Project details
                    </Button>
                  </div>
                  {pastProject.testimonial && (
                    <Blockquote
                      author={pastProject.testimonial.author}
                      className="mt-12"
                    >
                      {pastProject.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

// function Skills() {
//   return (
//     <Container className="mt-24 sm:mt-32 lg:mt-40">
//       <FadeIn>
//         <h2 className="font-display text-2xl font-semibold text-neutral-950">
//           Technical skills used
//         </h2>
//       </FadeIn>
//       <FadeInStagger className="mt-10" faster>
//         <Border as={FadeIn} />
//         <ul
//           role="list"
//           className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
//         >
//           {skills.slice(0, 7).map(([skill, logo, url]) => (
//             <li key={skill as string} className="group">
//               <FadeIn className="overflow-hidden">
//                 <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
//                   <Link href={url as string} rel="noreferrer" target="_blank">
//                     <Image src={logo} alt={skill as string} unoptimized />
//                   </Link>
//                 </Border>
//               </FadeIn>
//             </li>
//           ))}
//         </ul>
//       </FadeInStagger>
//     </Container>
//   )
// }

export const metadata: Metadata = {
  title: 'Project Portfolio',
  description:
    'Building at the intersection of physical science x digital design.',
}

export default async function Work() {
  let pastProjects = await loadPastProjects()

  return (
    <>
      <PageIntro
        eyebrow="Project Portfolio"
        title="Physical science x digital design"
      >
        <p>
          I enjoy finding combinatorial solutions to big problems, integrating
          the latest digital and physical technologies to craft enjoyable
          experiences that benefit the public good. Reach out if you&apos;d like
          to learn more about any projects in my portfolio.
        </p>
      </PageIntro>

      <PastProjects pastProjects={pastProjects} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: '', affiliation: '' }}
      >
        Lorem ipsum dolar.
      </Testimonial> */}

      {/* <Skills /> */}

      <ContactSection />
    </>
  )
}
