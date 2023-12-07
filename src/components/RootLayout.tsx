'use client'

import { createContext, useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { SocialMedia } from '@/components/SocialMedia'
import logoB from '@/images/logoB.svg'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement>
  invert?: boolean
}) {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Home" className="flex gap-2">
          <Image src={logoB} alt="Brett Cornick" width={50} height={50} />
          <svg
            width="200"
            height="40"
            viewBox="0 0 884 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`hidden sm:block ${
              invert ? 'fill-white' : 'fill-black'
            }`}
          >
            <path
              d="M0.00388188 92V6.5289H65.5317C68.539 6.5289 71.2694 7.28073 73.7227 8.78439C76.2552 10.288 78.2732 12.3061 79.7769 14.8386C81.2806 17.2919 82.0324 20.0223 82.0324 23.0296V39.7677C82.0324 40.7965 81.9533 41.7857 81.795 42.7354C81.6367 43.6851 81.3597 44.5952 80.964 45.4657C82.3094 47.286 83.3778 49.1853 84.1692 51.1638C85.0397 53.1423 85.475 55.1208 85.475 57.0993V75.4993C85.475 78.5066 84.7232 81.2765 83.2195 83.809C81.7158 86.2624 79.6978 88.2409 77.1653 89.7445C74.6328 91.2482 71.8629 92 68.8556 92H0.00388188ZM17.0981 76.2116H68.1433C68.539 76.2116 68.8952 76.0929 69.2117 75.8555C69.5283 75.5389 69.6866 75.1828 69.6866 74.7871V57.8116C69.6866 57.4159 69.5283 57.0993 69.2117 56.8619C68.8952 56.5453 68.539 56.387 68.1433 56.387H17.0981C16.7024 56.387 16.3463 56.5453 16.0297 56.8619C15.7923 57.0993 15.6736 57.4159 15.6736 57.8116V74.7871C15.6736 75.1828 15.7923 75.5389 16.0297 75.8555C16.3463 76.0929 16.7024 76.2116 17.0981 76.2116ZM17.0981 40.5986H64.8195C65.2152 40.5986 65.5317 40.4799 65.7691 40.2425C66.0066 39.9259 66.1253 39.5698 66.1253 39.1741V23.7418C66.1253 23.3461 66.0066 23.0296 65.7691 22.7922C65.5317 22.4756 65.2152 22.3173 64.8195 22.3173H17.0981C16.7024 22.3173 16.3463 22.4756 16.0297 22.7922C15.7923 23.0296 15.6736 23.3461 15.6736 23.7418V39.1741C15.6736 39.5698 15.7923 39.9259 16.0297 40.2425C16.3463 40.4799 16.7024 40.5986 17.0981 40.5986ZM97.9432 92V39.5302C97.9432 36.5229 98.6951 33.7926 100.199 31.3393C101.702 28.8859 103.681 26.9074 106.134 25.4038C108.667 23.9001 111.397 23.1483 114.325 23.1483H152.55V38.6993H114.919C114.523 38.6993 114.167 38.8576 113.85 39.1741C113.613 39.4115 113.494 39.7281 113.494 40.1238V92H97.9432ZM177.039 92C174.032 92 171.302 91.2482 168.848 89.7445C166.395 88.2409 164.416 86.2624 162.913 83.809C161.409 81.3557 160.657 78.6254 160.657 75.618V39.5302C160.657 36.5229 161.409 33.7926 162.913 31.3393C164.416 28.8859 166.395 26.9074 168.848 25.4038C171.302 23.9001 174.032 23.1483 177.039 23.1483H214.195C217.203 23.1483 219.933 23.9001 222.386 25.4038C224.919 26.9074 226.897 28.8859 228.322 31.3393C229.826 33.7926 230.577 36.5229 230.577 39.5302V65.409H176.208V75.0245C176.208 75.4202 176.327 75.7763 176.564 76.0929C176.881 76.3303 177.237 76.449 177.633 76.449H230.577V92H177.039ZM176.208 51.4012H215.026V40.1238C215.026 39.7281 214.868 39.4115 214.552 39.1741C214.314 38.8576 213.998 38.6993 213.602 38.6993H177.633C177.237 38.6993 176.881 38.8576 176.564 39.1741C176.327 39.4115 176.208 39.7281 176.208 40.1238V51.4012ZM259.469 92C256.462 92 253.732 91.2482 251.278 89.7445C248.825 88.2409 246.846 86.2624 245.343 83.809C243.839 81.3557 243.087 78.6254 243.087 75.618V2.01793H258.638V23.1483H285.467V38.6993H258.638V75.0245C258.638 75.4202 258.757 75.7763 258.994 76.0929C259.311 76.3303 259.667 76.449 260.063 76.449H285.467V92H259.469ZM312.332 92C309.325 92 306.595 91.2482 304.141 89.7445C301.688 88.2409 299.709 86.2624 298.206 83.809C296.702 81.3557 295.95 78.6254 295.95 75.618V2.01793H311.501V23.1483H338.33V38.6993H311.501V75.0245C311.501 75.4202 311.62 75.7763 311.857 76.0929C312.174 76.3303 312.53 76.449 312.926 76.449H338.33V92H312.332ZM401.144 92C398.137 92 395.367 91.2482 392.834 89.7445C390.381 88.2409 388.402 86.2624 386.899 83.809C385.395 81.2765 384.643 78.5066 384.643 75.4993V23.0296C384.643 20.0223 385.395 17.2919 386.899 14.8386C388.402 12.3061 390.381 10.288 392.834 8.78439C395.367 7.28073 398.137 6.5289 401.144 6.5289H469.877V22.3173H404.468C403.202 22.3173 402.173 22.6734 401.381 23.3857C400.669 24.098 400.313 25.1268 400.313 26.4722V72.0567C400.313 73.323 400.669 74.3518 401.381 75.1432C402.173 75.8555 403.202 76.2116 404.468 76.2116H469.877V92H401.144ZM498.043 92C495.035 92 492.305 91.2482 489.852 89.7445C487.398 88.2409 485.42 86.2624 483.916 83.809C482.413 81.3557 481.661 78.6254 481.661 75.618V39.5302C481.661 36.5229 482.413 33.7926 483.916 31.3393C485.42 28.8859 487.398 26.9074 489.852 25.4038C492.305 23.9001 495.035 23.1483 498.043 23.1483H535.199C538.206 23.1483 540.937 23.9001 543.39 25.4038C545.922 26.9074 547.901 28.8859 549.325 31.3393C550.829 33.7926 551.581 36.5229 551.581 39.5302V75.618C551.581 78.6254 550.829 81.3557 549.325 83.809C547.901 86.2624 545.962 88.2409 543.509 89.7445C541.055 91.2482 538.285 92 535.199 92H498.043ZM498.636 76.449H534.605C535.001 76.449 535.318 76.3303 535.555 76.0929C535.872 75.7763 536.03 75.4202 536.03 75.0245V40.1238C536.03 39.7281 535.872 39.4115 535.555 39.1741C535.318 38.8576 535.001 38.6993 534.605 38.6993H498.636C498.241 38.6993 497.884 38.8576 497.568 39.1741C497.33 39.4115 497.212 39.7281 497.212 40.1238V75.0245C497.212 75.4202 497.33 75.7763 497.568 76.0929C497.884 76.3303 498.241 76.449 498.636 76.449ZM561.422 92V39.5302C561.422 36.5229 562.174 33.7926 563.677 31.3393C565.181 28.8859 567.159 26.9074 569.613 25.4038C572.145 23.9001 574.876 23.1483 577.804 23.1483H616.028V38.6993H578.397C578.002 38.6993 577.645 38.8576 577.329 39.1741C577.091 39.4115 576.973 39.7281 576.973 40.1238V92H561.422ZM625.303 92V23.1483H678.842C681.849 23.1483 684.579 23.9001 687.033 25.4038C689.565 26.9074 691.543 28.8859 692.968 31.3393C694.472 33.7926 695.224 36.5229 695.224 39.5302V92H679.673V40.1238C679.673 39.7281 679.514 39.4115 679.198 39.1741C678.96 38.8576 678.644 38.6993 678.248 38.6993H642.279C641.883 38.6993 641.527 38.8576 641.211 39.1741C640.973 39.4115 640.854 39.7281 640.854 40.1238V92H625.303ZM707.722 92V23.1483H723.273V92H707.722ZM707.722 16.2631V0.593408H723.273V16.2631H707.722ZM750.649 92C747.642 92 744.911 91.2482 742.458 89.7445C740.005 88.2409 738.026 86.2624 736.522 83.809C735.019 81.3557 734.267 78.6254 734.267 75.618V39.5302C734.267 36.5229 735.019 33.7926 736.522 31.3393C738.026 28.8859 740.005 26.9074 742.458 25.4038C744.911 23.9001 747.642 23.1483 750.649 23.1483H804.068V38.6993H751.242C750.847 38.6993 750.491 38.8576 750.174 39.1741C749.937 39.4115 749.818 39.7281 749.818 40.1238V75.0245C749.818 75.4202 749.937 75.7763 750.174 76.0929C750.491 76.3303 750.847 76.449 751.242 76.449H804.187V92H750.649ZM814.149 92V0.593408H829.7V49.7393H841.928L866.501 23.1483H883.12V27.4218L855.698 57.5741L883.001 87.7264V92H866.501L841.928 65.409H829.7V92H814.149Z"
              fill="inherit"
            />
          </svg>
        </Link>
        <div className="flex items-center gap-x-8">
          <Button href="/contact" invert={invert}>
            Contact
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10',
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-white group-hover:fill-neutral-200'
                  : 'fill-neutral-950 group-hover:fill-neutral-700',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 transition even:mt-px hover:text-emerald-400 sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-emerald-950 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}

function Navigation() {
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/about">About Me</NavigationItem>
        <NavigationItem href="/work">Projects</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/vsd">Venture Science</NavigationItem>
        <NavigationItem href="/media">Media</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef<React.ElementRef<'button'>>(null)
  let closeRef = useRef<React.ElementRef<'button'>>(null)
  let navRef = useRef<React.ElementRef<'div'>>(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded)
              window.setTimeout(
                () => closeRef.current?.focus({ preventScroll: true }),
              )
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(
                    () => openRef.current?.focus({ preventScroll: true }),
                  )
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="pb-16 pt-10">
                  <h2 className="font-display text-base font-semibold text-white">
                    Follow me
                  </h2>
                  <SocialMedia className="mt-6" invert />
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-emerald-100 stroke-emerald-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_70%)]"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
