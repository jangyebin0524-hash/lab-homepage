import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import { cn } from '../lib/utils'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className={cn('section-reveal', isInView && 'is-visible', className)}>
      {children}
    </div>
  )
}
