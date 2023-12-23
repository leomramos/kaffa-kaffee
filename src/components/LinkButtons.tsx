import { cn } from '#/utils'
import Link from 'next/link'

const defaultClass =
  'rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500'

export function LinkButton({
  href,
  className = '',
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className={cn(defaultClass, className)}>
      {children}
    </Link>
  )
}

export function ExternalLinkButton({
  href,
  rel = 'external nofollow noreferrer',
  target = '_blank',
  className = '',
  children,
}: {
  href: string
  rel?: string
  target?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      rel={rel}
      target={target}
      className={cn(defaultClass, className)}
    >
      {children}
    </a>
  )
}
