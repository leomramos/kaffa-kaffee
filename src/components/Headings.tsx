import { cn } from '#/utils'

export function SectionHeading({
  className = '',
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <h2
      className={cn(
        'text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl',
        className
      )}
    >
      {children}
    </h2>
  )
}
