import { ArrowRight } from 'lucide-react'

interface RecruitmentBannerProps {
  onNavigate: () => void
}

export function RecruitmentBanner({ onNavigate }: RecruitmentBannerProps) {
  return (
    <button
      type="button"
      onClick={onNavigate}
      className="home-stagger flex w-full items-center justify-between gap-4 border-y border-[#E2E8F0] bg-white/70 px-1 py-3 text-left transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64748B]"
      style={{ '--delay': '0ms' } as React.CSSProperties}
    >
      <span className="flex min-w-0 items-center gap-4">
          <span className="font-mono text-[10px] text-[#94A3B8]">NOTICE</span>
          <span>
          <span className="block text-xs font-medium text-[#64748B]">Recruitment</span>
          <span className="block truncate text-sm font-medium text-[#475569]">모집 안내 Placeholder · 추후 업데이트 예정입니다.</span>
        </span>
      </span>
      <ArrowRight className="shrink-0 text-[#475569]" size={18} aria-hidden="true" />
    </button>
  )
}
