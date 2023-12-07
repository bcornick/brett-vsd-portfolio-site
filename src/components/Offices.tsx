import clsx from 'clsx'
import Link from 'next/link'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="LinkedIn" invert={invert}>
          <Link
            href="https://www.linkedin.com/in/brettcornick/"
            target="_blank"
            rel="noreferrer"
          >
            in/brettcornick
          </Link>
        </Office>
      </li>
      <li>
        <Office name="X (Twitter)" invert={invert}>
          <Link
            href="https://twitter.com/brett_cornick"
            target="_blank"
            rel="noreferrer"
          >
            @brett_cornick
          </Link>
        </Office>
      </li>
    </ul>
  )
}
