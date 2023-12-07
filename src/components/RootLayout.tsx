'use client'

import { createContext, useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { SocialMedia } from '@/components/SocialMedia'

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
        <Link href="/" aria-label="Home">
          <svg
            width="253"
            height="40"
            viewBox="0 0 1147 179"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={invert ? 'fill-white' : 'fill-black'}
          >
            <path
              d="M262.004 134V48.5289H327.532C330.539 48.5289 333.269 49.2807 335.723 50.7844C338.255 52.288 340.273 54.3061 341.777 56.8386C343.281 59.2919 344.032 62.0223 344.032 65.0296V81.7677C344.032 82.7965 343.953 83.7857 343.795 84.7354C343.637 85.6851 343.36 86.5952 342.964 87.4657C344.309 89.286 345.378 91.1853 346.169 93.1638C347.04 95.1423 347.475 97.1208 347.475 99.0993V117.499C347.475 120.507 346.723 123.277 345.219 125.809C343.716 128.262 341.698 130.241 339.165 131.745C336.633 133.248 333.863 134 330.856 134H262.004ZM279.098 118.212H330.143C330.539 118.212 330.895 118.093 331.212 117.855C331.528 117.539 331.687 117.183 331.687 116.787V99.8116C331.687 99.4159 331.528 99.0993 331.212 98.8619C330.895 98.5453 330.539 98.387 330.143 98.387H279.098C278.702 98.387 278.346 98.5453 278.03 98.8619C277.792 99.0993 277.674 99.4159 277.674 99.8116V116.787C277.674 117.183 277.792 117.539 278.03 117.855C278.346 118.093 278.702 118.212 279.098 118.212ZM279.098 82.5986H326.819C327.215 82.5986 327.532 82.4799 327.769 82.2425C328.007 81.9259 328.125 81.5698 328.125 81.1741V65.7418C328.125 65.3461 328.007 65.0296 327.769 64.7922C327.532 64.4756 327.215 64.3173 326.819 64.3173H279.098C278.702 64.3173 278.346 64.4756 278.03 64.7922C277.792 65.0296 277.674 65.3461 277.674 65.7418V81.1741C277.674 81.5698 277.792 81.9259 278.03 82.2425C278.346 82.4799 278.702 82.5986 279.098 82.5986ZM359.943 134V81.5302C359.943 78.5229 360.695 75.7926 362.199 73.3393C363.702 70.8859 365.681 68.9074 368.134 67.4038C370.667 65.9001 373.397 65.1483 376.325 65.1483H414.55V80.6993H376.919C376.523 80.6993 376.167 80.8576 375.85 81.1741C375.613 81.4115 375.494 81.7281 375.494 82.1238V134H359.943ZM439.039 134C436.032 134 433.302 133.248 430.848 131.745C428.395 130.241 426.416 128.262 424.913 125.809C423.409 123.356 422.657 120.625 422.657 117.618V81.5302C422.657 78.5229 423.409 75.7926 424.913 73.3393C426.416 70.8859 428.395 68.9074 430.848 67.4038C433.302 65.9001 436.032 65.1483 439.039 65.1483H476.195C479.203 65.1483 481.933 65.9001 484.386 67.4038C486.919 68.9074 488.897 70.8859 490.322 73.3393C491.826 75.7926 492.577 78.5229 492.577 81.5302V107.409H438.208V117.024C438.208 117.42 438.327 117.776 438.564 118.093C438.881 118.33 439.237 118.449 439.633 118.449H492.577V134H439.039ZM438.208 93.4012H477.026V82.1238C477.026 81.7281 476.868 81.4115 476.552 81.1741C476.314 80.8576 475.998 80.6993 475.602 80.6993H439.633C439.237 80.6993 438.881 80.8576 438.564 81.1741C438.327 81.4115 438.208 81.7281 438.208 82.1238V93.4012ZM521.469 134C518.462 134 515.732 133.248 513.278 131.745C510.825 130.241 508.846 128.262 507.343 125.809C505.839 123.356 505.087 120.625 505.087 117.618V44.0179H520.638V65.1483H547.467V80.6993H520.638V117.024C520.638 117.42 520.757 117.776 520.994 118.093C521.311 118.33 521.667 118.449 522.063 118.449H547.467V134H521.469ZM574.332 134C571.325 134 568.595 133.248 566.141 131.745C563.688 130.241 561.709 128.262 560.206 125.809C558.702 123.356 557.95 120.625 557.95 117.618V44.0179H573.501V65.1483H600.33V80.6993H573.501V117.024C573.501 117.42 573.62 117.776 573.857 118.093C574.174 118.33 574.53 118.449 574.926 118.449H600.33V134H574.332ZM663.144 134C660.137 134 657.367 133.248 654.834 131.745C652.381 130.241 650.402 128.262 648.899 125.809C647.395 123.277 646.643 120.507 646.643 117.499V65.0296C646.643 62.0223 647.395 59.2919 648.899 56.8386C650.402 54.3061 652.381 52.288 654.834 50.7844C657.367 49.2807 660.137 48.5289 663.144 48.5289H731.877V64.3173H666.468C665.202 64.3173 664.173 64.6734 663.381 65.3857C662.669 66.098 662.313 67.1268 662.313 68.4722V114.057C662.313 115.323 662.669 116.352 663.381 117.143C664.173 117.855 665.202 118.212 666.468 118.212H731.877V134H663.144ZM760.043 134C757.035 134 754.305 133.248 751.852 131.745C749.398 130.241 747.42 128.262 745.916 125.809C744.413 123.356 743.661 120.625 743.661 117.618V81.5302C743.661 78.5229 744.413 75.7926 745.916 73.3393C747.42 70.8859 749.398 68.9074 751.852 67.4038C754.305 65.9001 757.035 65.1483 760.043 65.1483H797.199C800.206 65.1483 802.937 65.9001 805.39 67.4038C807.922 68.9074 809.901 70.8859 811.325 73.3393C812.829 75.7926 813.581 78.5229 813.581 81.5302V117.618C813.581 120.625 812.829 123.356 811.325 125.809C809.901 128.262 807.962 130.241 805.509 131.745C803.055 133.248 800.285 134 797.199 134H760.043ZM760.636 118.449H796.605C797.001 118.449 797.318 118.33 797.555 118.093C797.872 117.776 798.03 117.42 798.03 117.024V82.1238C798.03 81.7281 797.872 81.4115 797.555 81.1741C797.318 80.8576 797.001 80.6993 796.605 80.6993H760.636C760.241 80.6993 759.884 80.8576 759.568 81.1741C759.33 81.4115 759.212 81.7281 759.212 82.1238V117.024C759.212 117.42 759.33 117.776 759.568 118.093C759.884 118.33 760.241 118.449 760.636 118.449ZM823.422 134V81.5302C823.422 78.5229 824.174 75.7926 825.677 73.3393C827.181 70.8859 829.159 68.9074 831.613 67.4038C834.145 65.9001 836.876 65.1483 839.804 65.1483H878.028V80.6993H840.397C840.002 80.6993 839.645 80.8576 839.329 81.1741C839.091 81.4115 838.973 81.7281 838.973 82.1238V134H823.422ZM887.303 134V65.1483H940.842C943.849 65.1483 946.579 65.9001 949.033 67.4038C951.565 68.9074 953.543 70.8859 954.968 73.3393C956.472 75.7926 957.224 78.5229 957.224 81.5302V134H941.673V82.1238C941.673 81.7281 941.514 81.4115 941.198 81.1741C940.96 80.8576 940.644 80.6993 940.248 80.6993H904.279C903.883 80.6993 903.527 80.8576 903.211 81.1741C902.973 81.4115 902.854 81.7281 902.854 82.1238V134H887.303ZM969.722 134V65.1483H985.273V134H969.722ZM969.722 58.2631V42.5934H985.273V58.2631H969.722ZM1012.65 134C1009.64 134 1006.91 133.248 1004.46 131.745C1002 130.241 1000.03 128.262 998.522 125.809C997.019 123.356 996.267 120.625 996.267 117.618V81.5302C996.267 78.5229 997.019 75.7926 998.522 73.3393C1000.03 70.8859 1002 68.9074 1004.46 67.4038C1006.91 65.9001 1009.64 65.1483 1012.65 65.1483H1066.07V80.6993H1013.24C1012.85 80.6993 1012.49 80.8576 1012.17 81.1741C1011.94 81.4115 1011.82 81.7281 1011.82 82.1238V117.024C1011.82 117.42 1011.94 117.776 1012.17 118.093C1012.49 118.33 1012.85 118.449 1013.24 118.449H1066.19V134H1012.65ZM1076.15 134V42.5934H1091.7V91.7393H1103.93L1128.5 65.1483H1145.12V69.4218L1117.7 99.5741L1145 129.726V134H1128.5L1103.93 107.409H1091.7V134H1076.15Z"
              fill="inherit"
            />
            <g mask="url(#mask0_287_83)">
              <path
                d="M56.0756 8.92922C57.8326 3.60023 62.8106 0 68.4218 0H210.966C219.839 0 226.104 8.69168 223.3 17.1093L172.323 170.109C170.554 175.419 165.586 179 159.99 179H17.9748C9.11932 179 2.85559 170.339 5.62856 161.929L56.0756 8.92922Z"
                fill="url(#paint0_linear_287_83)"
              />
              <path
                d="M146.123 84.6947C157.953 88.8148 164.38 95.8587 165.404 105.826C166.321 114.747 163.576 122.504 157.17 129.095C148.644 137.882 136.325 143.104 120.212 144.759C108.242 145.989 96.9252 144.852 86.2623 141.348C75.8362 137.911 67.597 132.479 61.5444 125.052C57.1728 119.66 54.7976 115.12 54.4189 111.434C54.2739 110.023 55.9706 108.629 59.5089 107.254C63.7287 112.064 70.7388 115.828 80.5391 118.547C83.0137 114.429 86.3237 108.593 90.469 101.037C94.6143 93.4823 97.8513 87.6073 100.18 83.4125C102.504 79.1721 104.845 75.0911 107.201 71.1693C112.427 62.4912 117.058 55.8522 121.092 51.252C122.318 49.7463 124.384 49.488 127.291 50.4772C128.052 50.721 128.681 51.0243 129.178 51.3872C125.794 55.5986 121.477 63.7233 116.228 75.7613C120.518 76.3324 124.234 76.4567 127.374 76.134C130.515 75.8114 133.598 75.1497 136.622 74.149C139.643 73.1028 142.357 71.766 144.766 70.1387C150.324 66.486 152.874 62.4294 152.415 57.9689C151.522 49.2756 144.285 43.9708 130.703 42.0545C125.379 41.2676 120.123 41.1407 114.934 41.6738C109.791 42.2022 104.981 43.0643 100.504 44.2602C96.0228 45.4105 92.0842 46.9191 88.6883 48.7858C81.2011 52.9127 77.7709 58.0256 78.3975 64.1246C78.9259 69.2678 81.2817 73.3953 85.465 76.5071C81.7768 81.3476 78.7037 83.8941 76.2459 84.1466C73.424 84.4365 70.6275 83.183 67.8564 80.386C65.0304 77.5027 63.4257 74.1949 63.0423 70.4627C62.6588 66.7305 63.0959 63.3739 64.3535 60.393C65.6566 57.4074 67.5386 54.6843 69.9995 52.2237C72.4558 49.7176 75.352 47.4652 78.6883 45.4666C82.0701 43.4634 85.6848 41.7121 89.5324 40.2129C97.0046 37.2835 103.813 35.5031 109.958 34.8718C116.102 34.2405 121.251 33.9876 125.403 34.1129C129.596 34.188 133.615 34.5801 137.46 35.289C141.304 35.9979 144.903 37.0079 148.258 38.3191C151.612 39.6304 154.587 41.2795 157.183 43.2666C162.631 47.4904 165.693 52.9022 166.371 59.5018C166.914 64.7815 165.193 69.7419 161.208 74.3828C157.646 78.6584 152.617 82.0957 146.123 84.6947ZM96.78 121.501C102.213 122.001 106.568 122.082 109.845 121.746C113.122 121.409 115.891 121.055 118.153 120.685C120.41 120.269 122.821 119.561 125.386 118.562C127.997 117.558 130.19 116.298 131.966 114.781C135.863 111.529 137.56 107.445 137.055 102.53C136.564 97.7506 133.726 94.0865 128.543 91.5374C123.797 89.2192 117.883 88.286 110.8 88.7377C109.588 91.714 108.376 94.6902 107.164 97.6664C105.952 100.643 104.756 103.548 103.575 106.383C101.06 112.345 98.7948 117.384 96.78 121.501Z"
                fill="black"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_287_83"
                x1="114.5"
                y1="0"
                x2="114.5"
                y2="179"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6EE7B7" />
                <stop offset="1" stopColor="#34D399" />
              </linearGradient>
            </defs>
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
