import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageUCLAExtension from '@/images/education/ucla-extension.jpg'
import imageUCLA from '@/images/education/ucla.jpg'
import imageVSD from '@/images/education/vsd.jpg'
import imageUSC from '@/images/education/usc.jpg'
import imageIF from '@/images/experience/impact-finance.jpg'
import imageEpic from '@/images/experience/epic.jpg'
import imageCitrine from '@/images/experience/citrine.jpg'
import imageNanoarmor from '@/images/experience/nanoarmor.jpg'
import imageAccenture from '@/images/experience/accenture.jpg'
import imageLLNL from '@/images/experience/llnl.jpg'
import imageClimateTech from '@/images/interests/climate-tech.jpg'
import imageSoftwareDev from '@/images/interests/software-development.jpg'
import imageChemistry from '@/images/interests/chemistry.jpg'
import imageBlockchain from '@/images/interests/blockchain.jpg'
import imageImmersiveWorlds from '@/images/interests/immersive-worlds.jpg'
import imageArtificialIntelligence from '@/images/interests/artificial-intelligence.jpg'
import imageSnowboarding from '@/images/interests/snowboarding.jpg'
import image3dDesign from '@/images/interests/3d-design.jpg'
import imageEconomicSystems from '@/images/interests/economic-systems.jpg'
import { loadArticles } from '@/lib/mdx'

function Values() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Core values"
        title="Forward-looking technology development"
        invert
      ></SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Sustainability" invert>
            Balancing our innate pursuit of innovation with the critical
            responsibility of safeguarding the planet&apos;s future.
          </GridListItem>
          <GridListItem title="Inclusivity" invert>
            Crafting solutions that speak to, and for, everyone, ensuring that
            our digital world is built as diverse as our physical one.
          </GridListItem>
          <GridListItem title="Adaptability" invert>
            Operating to solve today&apos;s challenges while staying nimble
            enough to evolve with tomorrow&apos;s unforeseen demands.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const interests = [
  {
    title: 'Work Experience',
    examples: [
      {
        name: 'Impact Finance',
        role: 'Co-Founder / CEO',
        image: { src: imageIF },
      },
      {
        name: 'Epic Advanced Materials',
        role: 'Head of Technology',
        image: { src: imageEpic },
      },
      {
        name: 'Citrine Informatics',
        role: 'Project Manager',
        image: { src: imageCitrine },
      },
      {
        name: 'Nanoarmor',
        role: 'Materials Engineer',
        image: { src: imageNanoarmor },
      },
      {
        name: 'Accenture',
        role: 'Technology Consultant',
        image: { src: imageAccenture },
      },
      {
        name: 'Lawrence Livermore Lab',
        role: 'Graduate Researcher',
        image: { src: imageLLNL },
      },
    ],
  },
  {
    title: 'Education',
    examples: [
      {
        name: 'PhD Climate Venture Science',
        role: "Venture Science Doctorate, '26",
        image: { src: imageVSD },
      },
      {
        name: 'Blockchain Technology Management',
        role: "UCLA Extension '21",
        image: { src: imageUCLAExtension },
      },
      {
        name: 'MS Computational Materials Science',
        role: "UCLA '18",
        image: { src: imageUCLA },
      },
      {
        name: 'BS Chemical Engineering',
        role: "USC '16",
        image: { src: imageUSC },
      },
    ],
  },
  {
    title: 'Interests',
    examples: [
      {
        name: 'Software development',
        role: '',
        image: { src: imageSoftwareDev },
      },
      {
        name: 'Climate tech',
        role: '',
        image: { src: imageClimateTech },
      },
      {
        name: 'Chemistry',
        role: '',
        image: { src: imageChemistry },
      },
      {
        name: 'Blockchain',
        role: '',
        image: { src: imageBlockchain },
      },
      {
        name: 'Artificial intelligence',
        role: '',
        image: { src: imageArtificialIntelligence },
      },
      {
        name: 'Immersive worlds',
        role: '',
        image: { src: imageImmersiveWorlds },
      },
      {
        name: 'Economic systems',
        role: '',
        image: { src: imageEconomicSystems },
      },
      {
        name: '3D design',
        role: '',
        image: { src: image3dDesign },
      },
      {
        name: 'Snowboarding',
        role: '',
        image: { src: imageSnowboarding },
      },
    ],
  },
]

function Interests() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {interests.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.examples.map((example) => (
                    <li key={example.name}>
                      <FadeIn>
                        <div className="group relative  rounded-lg bg-neutral-100">
                          <div className="absolute right-0 top-0 h-full w-full rounded-lg bg-gradient-to-tr from-emerald-400 to-white transition-transform duration-200 ease-linear group-hover:-translate-x-2 group-hover:translate-y-2" />
                          <Image
                            alt=""
                            {...example.image}
                            className="h-96 w-full rounded-lg object-cover grayscale group-hover:grayscale-0"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end rounded-lg bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {example.name}
                            </p>
                            <p className="mt-2 text-sm text-emerald-400">
                              {example.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About me',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About me" title="A climate-first technologist">
        <p>
          I&apos;m an ambitious and entrepreneurial-minded PhD student
          specializing in Climate Venture Science, with a strong foundation in
          materials science, process design, software development, and
          scientific applications of AI/ML.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            I have a natural inclination towards early stage start-ups and I
            enjoy getting involved in projects while they exist only on a
            whiteboard. I am a proud generalist and I love looking into
            contrarian or unconventional sources to find new innovative
            solutions. Previously, I was the founder of Impact Finance, where we
            developed and supported cryptoeconomic systems for directing funding
            towards community-led scientific research.
          </p>
          <p>
            🌱 The next stages of my career will be heavily guided by my pursuit
            of innovative solutions to address the urgent challenges posed by
            climate change.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="8+" label="years professional experience" />
          <StatListItem
            value="Ph.D."
            label="Climate Venture Science, VSD '26"
          />
          <StatListItem value="M.S." label="Materials Science, UCLA '18" />
        </StatList>
      </Container>

      <Values />

      <Interests />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Recent articles"
        intro="I enjoy writing short-form informational content about climate tech, entrepreneurship, blockchain, AI, and other digital technologies."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
