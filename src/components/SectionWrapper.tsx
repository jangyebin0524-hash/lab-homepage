import { Children } from 'react'
import type { ReactNode } from 'react'
import type { SectionId } from '../types/content'
import { cn } from '../lib/utils'
import { AnimatedSection } from './AnimatedSection'

type SectionTone = 'home' | 'white' | 'soft' | 'muted' | 'join'

interface SectionWrapperProps {
  id: SectionId
  index: string
  title: string
  eyebrow?: string
  tone?: SectionTone
  children: ReactNode
  className?: string
  hideHeading?: boolean
}

const tones: Record<SectionTone, string> = {
  home: 'medical-home-band',
  white: 'bg-[#F7F7F7]',
  soft: 'bg-[#F2F2F2]',
  muted: 'bg-[#F2F2F2]',
  join: 'bg-[#F2F2F2]',
}

export function SectionWrapper({
  id,
  index,
  title,
  eyebrow,
  tone = 'white',
  children,
  className,
  hideHeading = false,
}: SectionWrapperProps) {
  const headingId = `${id}-title`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('relative scroll-mt-6 overflow-hidden py-16 sm:py-20 lg:py-24', tones[tone], className)}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <AnimatedSection>
          <header className={hideHeading ? 'sr-only' : 'mb-10 sm:mb-14'}>
            {!hideHeading && (
              <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#333333]">
                <span className="font-mono text-[#8A8A8A]">{index}</span>
                <span className="h-px w-10 bg-[#333333]" />
                <span>{eyebrow || 'Lab Interface'}</span>
              </div>
            )}
            <h2 id={headingId} className="text-3xl font-semibold leading-tight text-[#222222] sm:text-4xl">{title}</h2>
          </header>
        </AnimatedSection>
        {Children.map(children, (child) => (
          <AnimatedSection className="min-w-0">
            {child}
          </AnimatedSection>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#E2E2E2]" aria-hidden="true" />
    </section>
  )
}
