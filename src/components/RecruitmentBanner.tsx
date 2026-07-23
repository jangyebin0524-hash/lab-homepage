import { ArrowRight } from 'lucide-react'

interface RecruitmentBannerProps {
  onNavigate: () => void
}

export function RecruitmentBanner({ onNavigate }: RecruitmentBannerProps) {
  return (
    <button
      type="button"
      onClick={onNavigate}
      className="home-stagger flex w-full items-center justify-between gap-4 border-y border-[#E2E8F0] bg-white/70 px-1 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F93A6]"
      style={{ '--delay': '0ms' } as React.CSSProperties}
    >
      <span className="flex min-w-0 items-center gap-4">
        <span className="font-mono text-[10px] font-semibold text-[#94A3B8]">NOTICE</span>
        <span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6F93A6]">Recruitment</span>
          <span className="block truncate text-sm font-medium text-[#64748B]">모집 안내 Placeholder · 추후 업데이트 예정입니다.</span>
        </span>
      </span>
      <ArrowRight className="shrink-0 text-[#0F3A5C]" size={18} aria-hidden="true" />
    </button>
  )
}
