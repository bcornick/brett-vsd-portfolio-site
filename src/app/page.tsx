import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { skills } from '@/lib/sharedVariables'
import brett from '@/images/brett-portrait.png'
import splineStill from '@/images/splines/portfolio-main.jpg'

import { type PastProject, type MDXEntry, loadPastProjects } from '@/lib/mdx'

function Skills() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Technical proficiency in
          </h2>
          <div className="h-px flex-auto bg-emerald-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2  gap-x-10 gap-y-20 lg:grid-cols-4"
          >
            {skills.map(([skill, logo, url]) => (
              <li
                key={skill as string}
                className="flex items-center justify-center"
              >
                <FadeIn>
                  {(url as string).length > 0 ? (
                    <Link href={url as string} rel="noreferrer" target="_blank">
                      <Image
                        src={logo}
                        alt={skill as string}
                        unoptimized
                        width={150}
                        height={100}
                      />
                    </Link>
                  ) : (
                    <Image
                      src={logo}
                      alt={skill as string}
                      unoptimized
                      width={150}
                      height={100}
                    />
                  )}
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function PastProjects({
  pastProjects,
}: {
  pastProjects: Array<MDXEntry<PastProject>>
}) {
  return (
    <>
      <SectionIntro title="Recent projects" className="mt-24 sm:mt-32 lg:mt-40">
        <p>
          I build modern tools to improve the way we communicate, cooperate, and
          innovate.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pastProjects.map((pastProject) => (
            <FadeIn key={pastProject.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-emerald-50 sm:p-8">
                <h3>
                  <Link href={pastProject.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={pastProject.logo}
                      alt={pastProject.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={pastProject.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {pastProject.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{pastProject.client}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {pastProject.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {pastProject.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Expertise() {
  return (
    <>
      <SectionIntro
        eyebrow="Expertise"
        title="Technology-driven approaches towards solving human problems"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          I enjoy finding combinatorial solutions that incorporate my varied
          skill set, focusing on the intersection of physical science{' '}
          <strong>x</strong> digital design.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src="https://prod.spline.design/pTC6UHuIL00bD5KX/scene.splinecode"
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
                altSrc={splineStill}
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Computational materials science">
              Nearly any engineering problem could be solved through the use of
              better materials. My graduate degree in materials science gives me
              a keen understanding of the extent and limits of physical
              possibility.
            </ListItem>
            <ListItem title="Systems & process design">
              Systems and processes run the world around us. My background in
              chemical and process engineering enables me to efficiently
              streamline human and technical systems, ensuring they are not only
              effective but also sustainable.
            </ListItem>
            <ListItem title="Digital design & development">
              Effectively communicating complex ideas demands creativity. I am
              passionate about building enjoyable digital experiences that can
              close the chasm between the lab bench and the outside world.
            </ListItem>
            <ListItem title="Automation & AI">
              Artificial intelligence presents a new paradigm. My project
              portfolio demonstrates my ability to adapt to this quickly
              evolving technology and my creativity in its implementation.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Brett is a climate-first technologist with a strong foundation in materials science, process design, software development, and AI/automation.',
}

export default async function Home() {
  let pastProjects = (await loadPastProjects()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <Image
          src={brett}
          alt="brett"
          width={450}
          height={450}
          className="absolute left-[69vw] top-12 -z-10 hidden [filter:saturate(1.25)] lg:block xl:left-[65vw]"
          priority
        />
        <FadeIn className="max-w-3xl" removeMotion>
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-900 [text-wrap:balance] sm:text-6xl lg:text-7xl">
            Developer, scientist, entrepreneur, optimist
          </h1>
          <p className="mt-6 text-xl text-neutral-800">
            I am a <strong>climate-first technologist</strong> with a strong
            foundation in materials science, process design, software
            development, and automation. My professional life is guided by my
            pursuit of innovative solutions to address the urgent challenges
            posed by climate change.
          </p>
        </FadeIn>
      </Container>

      <Skills />

      <PastProjects pastProjects={pastProjects} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{
          name: 'Aaron Appleton',
          affiliation:
            'Head of Venture Science Doctorate Programme at Deep Science Ventures',
        }}
      >
        Brett is a model PhD candidate, thoroughly exemplifying the core traits
        that make for a successful deep tech founder -- creativity, first
        principles thinking, problem solving, ambition, resilience, and empathy.
      </Testimonial>

      <Expertise />

      <ContactSection />
    </>
  )
}
