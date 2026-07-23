import { HeartPulse, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation } from '../data/navigation'
import { cn } from '../lib/utils'
import type { SectionId } from '../types/content'

interface HeaderProps {
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [activeSection])

  const handleNavigate = (id: SectionId) => {
    onNavigate(id)
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/90 shadow-[0_8px_30px_rgb(15_58_92_/_0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 md:px-8">
        <button
          type="button"
          onClick={() => handleNavigate('home')}
          className="flex min-w-0 max-w-[calc(100%-3.75rem)] items-center gap-3 overflow-hidden rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F93A6]"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] text-[#0F3A5C] shadow-sm">
            <HeartPulse size={18} aria-hidden="true" />
          </span>
          <span className="min-w-0 overflow-hidden">
            <span className="block truncate text-sm font-semibold text-[#1F2937]">Lab Name Placeholder</span>
            <span className="mt-0.5 block truncate text-[9px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">Department / University Placeholder</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="주요 섹션">
          {navigation.map(({ id, label }) => {
            const active = activeSection === id

            return (
              <button
                key={id}
                type="button"
                onClick={() => handleNavigate(id)}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'rounded-full px-3 py-2 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F93A6] focus-visible:ring-offset-2',
                  active
                    ? 'bg-[#0F3A5C] text-white shadow-[0_6px_18px_rgb(15_58_92_/_0.14)]'
                    : 'text-[#64748B] hover:bg-[#EAF3F8] hover:text-[#0F3A5C]',
                )}
              >
                {label}
              </button>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#0F3A5C] shadow-sm transition-colors hover:bg-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F93A6] lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {mobileOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-navigation" className="border-t border-[#E2E8F0] bg-white px-4 py-3 lg:hidden" aria-label="모바일 섹션">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {navigation.map(({ id, label }) => {
              const active = activeSection === id

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleNavigate(id)}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-xl border px-3 py-2 text-left text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F93A6]',
                    active
                      ? 'border-[#0F3A5C] bg-[#0F3A5C] text-white'
                      : 'border-[#E2E8F0] bg-[#F8FAFC] text-[#64748B] hover:bg-[#EAF3F8] hover:text-[#0F3A5C]',
                  )}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
