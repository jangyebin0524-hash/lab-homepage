import { ArrowRight } from 'lucide-react'

interface RecruitmentBannerProps {
  onNavigate: () => void
}

export function RecruitmentBanner({ onNavigate }: RecruitmentBannerProps) {
  return (
    <button
      type="button"
      onClick={onNavigate}
      className="home-stagger flex w-full items-center justify-between gap-4 border-y border-[#E2E2E2] bg-white/60 px-1 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333333]"
      style={{ '--delay': '0ms' } as React.CSSProperties}
    >
      <span className="flex min-w-0 items-center gap-4">
        <span className="font-mono text-[10px] font-semibold text-[#8A8A8A]">NOTICE</span>
        <span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#333333]">Recruitment</span>
          <span className="block truncate text-sm font-medium text-[#666666]">모집 안내 Placeholder · 추후 업데이트 예정입니다.</span>
        </span>
      </span>
      <ArrowRight className="shrink-0 text-[#333333]" size={18} aria-hidden="true" />
    </button>
  )
}
