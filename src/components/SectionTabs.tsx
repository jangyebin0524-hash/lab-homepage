import { useEffect, useRef } from 'react'
import { navigation } from '../data/navigation'
import { cn } from '../lib/utils'
import type { SectionId } from '../types/content'

interface SectionTabsProps {
  activeSection: SectionId
  onSelect: (id: SectionId) => void
}

const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function SectionTabs({ activeSection, onSelect }: SectionTabsProps) {
  const tabRefs = useRef<Partial<Record<SectionId, HTMLButtonElement | null>>>({})

  useEffect(() => {
    tabRefs.current[activeSection]?.scrollIntoView({
      behavior: reducedMotion() ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [activeSection])

  return (
    <div className="border-b border-[#E2E2E2] bg-[#F2F2F2]/80">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-8">
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#666666]">Sections</p>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A8A8A] sm:block">Swipe to explore</span>
        </div>
        <nav
          className="subtle-scrollbar max-w-full touch-pan-x overflow-x-auto overflow-y-hidden overscroll-x-contain pb-2"
          aria-label="섹션 탭"
        >
          <div className="flex min-w-max flex-nowrap gap-2 pr-5 whitespace-nowrap" role="tablist" aria-label="연구실 홈페이지 섹션">
            {navigation.map(({ id, label }) => {
              const active = activeSection === id

              return (
                <button
                  key={id}
                  ref={(element) => { tabRefs.current[id] = element }}
                  id={`${id}-tab`}
                  type="button"
                  role="tab"
                  aria-controls={id}
                  aria-selected={active}
                  onClick={() => onSelect(id)}
                  className={cn(
                    'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333333] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F7]',
                    active
                      ? 'border-[#333333] bg-[#333333] text-white shadow-sm'
                      : 'border-[#E2E2E2] bg-white text-[#666666] hover:bg-[#EEEEEE] hover:text-[#222222]',
                  )}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}
