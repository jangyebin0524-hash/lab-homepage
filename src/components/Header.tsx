import { HeartPulse } from 'lucide-react'
import type { SectionId } from '../types/content'

interface HeaderProps {
  onNavigate: (id: SectionId) => void
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="h-20 border-b border-[#E2E2E2] bg-[#F7F7F7]/95">
      <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 md:px-8">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-[#E2E2E2] bg-white text-[#333333] shadow-sm">
            <HeartPulse size={18} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-[#222222]">Lab Name Placeholder</span>
            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.14em] text-[#666666]">Medical IT Research Lab</span>
          </span>
        </button>
      </div>
    </header>
  )
}
