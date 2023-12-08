import { type Metadata } from 'next'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import logoDSV from '@/images/vsd/logoDSV.png'
import logoWoolf from '@/images/vsd/logoWoolf.png'
import { Button } from '@/components/Button'
import splineStill3 from '@/images/splines/vsd-year-3.jpg'
import splineStill2 from '@/images/splines/vsd-year-2.jpg'
import splineStill1 from '@/images/splines/vsd-year-1.jpg'

function Section({
  title,
  image,
  altImage,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  altImage: StaticImageData
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              altSrc={altImage}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-emerald-600 before:content-['Year_'] after:text-emerald-600 after:content-[counter(section)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Scope() {
  return (
    <Section
      title="Investigate"
      image={{
        src: 'https://prod.spline.design/6kiGmm4yj8CzrzOc/scene.splinecode',
      }}
      altImage={splineStill1}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          During the first year of VSD, candidates familiarize themselves with a
          given industry, map the landscape, and{' '}
          <strong className="font-semibold text-neutral-950">
            identify areas of opportunity
          </strong>{' '}
          for high-impact venture creation. In a deliberate process called
          Scoping, candidates identify the optimal solution to a given problem,
          perform lab work to develop hypotheses, and contact partner research
          groups for further experimentation.
        </p>
        <p>
          Course work focuses on building the research skills and fundamental
          venture-creation knowledge that will position candidates for success
          throughout the remainder of the program and beyond.
        </p>
      </div>

      <h3 className="mt-6 font-display text-base font-semibold text-neutral-950">
        Courses
      </h3>
      <TagList className="mt-4">
        <TagListItem>Intro to Scoping</TagListItem>
        <TagListItem>Complex Decision Making</TagListItem>
        <TagListItem>Venture Science Finance</TagListItem>
        <TagListItem>Stochastic Studio</TagListItem>
        <TagListItem>Feasibility & Technoeconomics</TagListItem>
        <TagListItem>Business Modelling</TagListItem>
        <TagListItem>Customer Discovery</TagListItem>
        <TagListItem>Narrative Design & Storytelling</TagListItem>
      </TagList>

      <h3 className="mt-8 font-display text-base font-semibold text-neutral-950">
        Work sample
      </h3>
      <GridList className="mt-4">
        <GridListItem
          title="Automations for deep tech entrepreneurs"
          className="col-span-3"
        >
          I designed and built 20+ digital workflow automations tailored towards
          deep tech entrepreneurs. <br />
          <em>Course: Stochastic Studio</em>
          <div className="mt-4 flex">
            <Button
              href="/work/stochastic-studio"
              aria-label={`See project details: automations for deep tech entrepreneurs`}
            >
              Project details
            </Button>
          </div>
        </GridListItem>
      </GridList>
    </Section>
  )
}

function Experiment() {
  return (
    <Section
      title="Experiment"
      image={{
        src: 'https://prod.spline.design/uObiRBk00xFXapJk/scene.splinecode',
        shape: 1,
      }}
      altImage={splineStill2}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The second year is focused on invention. Candidates further develop
          their initial hypotheses, working within leading research groups to{' '}
          <strong className="font-semibold text-neutral-950">
            prove the technology
          </strong>{' '}
          against state-of-the-art and then validate it through technoeconomic
          analysis.
        </p>
      </div>

      <h3 className="mt-8 font-display text-base font-semibold text-neutral-950">
        Work sample
      </h3>
      <GridList className="mt-4">
        <GridListItem title="Coming soon" className="col-span-4">
          Check back in Fall 2024.
        </GridListItem>
      </GridList>
    </Section>
  )
}

function Build() {
  return (
    <Section
      title="Build"
      image={{
        src: 'https://prod.spline.design/xjFFsJb18-etSjJ5/scene.splinecode',
        shape: 2,
      }}
      altImage={splineStill3}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The goal for the third year is venture creation, building further on
          the research from the previous two years, to{' '}
          <strong className="font-semibold text-neutral-950">
            develop a scalable technology
          </strong>
          , capable of product market fit. Having validated the technology,
          candidates work with experienced venture partners to build a
          complementary team and a rock-solid investment case, before engaging
          with some of the 400+ investors that DSV co-invests alongside.
        </p>
        <p>
          Upon graduating, all intellectual property is transferred into the new
          venture, which the candidate continues to lead as a co-founder.
        </p>
      </div>

      <h3 className="mt-8 font-display text-base font-semibold text-neutral-950">
        Work sample
      </h3>
      <GridList className="mt-4">
        <GridListItem title="Coming soon" className="col-span-4">
          Check back in Fall 2025.
        </GridListItem>
      </GridList>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-emerald-100 stroke-emerald-950/5 [mask-image:linear-gradient(to_bottom_left,white_30%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow="About VSD" title="Reinventing the PhD">
        <p>
          The Venture Science Doctorate (VSD) is a 3-year, fully-funded,
          sector-agnostic PhD program provided by Deep Science Ventures College
          at Woolf, a Global Higher Education Institution.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <FadeIn className="order-1">
            <Link
              href="https://deepscienceventures.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={logoDSV}
                alt="Deep Science Ventures"
                width={250}
                height={150}
                className="m-auto"
              />
            </Link>
          </FadeIn>
          <FadeIn className="order-2 lg:order-4">
            <Link
              href="https://woolf.university/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={logoWoolf}
                alt="Woolf University"
                width={250}
                height={150}
                className="m-auto"
              />
            </Link>
          </FadeIn>
          <GridListItem
            title="Proven methodology"
            className="order-3 lg:order-2"
          >
            The VSD program is run on the same innovation model that underpins
            Deep Science Ventures, which has attracted over $100 million in
            total venture funding.
          </GridListItem>
          <GridListItem title="Deep expertise" className="order-4 lg:order-3">
            Leaders of transformational change at the highest levels of their
            sector are strategically guiding, supporting, and publicly
            championing the VSD program.
          </GridListItem>
          <GridListItem title="Venture-led science" className="order-5">
            VSD candidates target the most important questions in their sector,
            then launch research-based companies to deliver impact, not just
            knowledge.
          </GridListItem>
          <GridListItem title="Global inclusivity" className="order-6">
            The VSD program was created with inclusivity at its core, with the
            goal of attracting people into the world of venture-creation that
            would not otherwise do so.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Venture Science',
  description:
    'Brett is a current student in the inaugural cohort of the Venture Science Doctorate by Deep Science Ventures.',
}

export default function VSD() {
  return (
    <>
      <PageIntro
        eyebrow="Climate Venture Science"
        title="Translational venture-first research"
        removeMotion
      >
        <p>
          I&apos;m a current student in the inaugural cohort of the{' '}
          <Link
            href="https://deepscienceventures.com/venture-science-doctorate"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:opacity-75"
          >
            Venture Science Doctorate
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              className="mb-4 ml-1 inline opacity-75"
            >
              <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
            </svg>
          </Link>{' '}
          program through Deep Science Ventures, where I am building the
          technical and professional skills required to launch my own successful
          deep-tech start-up in the climate space. Expected graduation in 2026.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Scope />
        <Experiment />
        <Build />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
