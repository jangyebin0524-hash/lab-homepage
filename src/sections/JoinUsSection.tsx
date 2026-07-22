import { ArrowRight, CircleHelp, ClipboardCheck, UsersRound } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { PlaceholderCard } from '../components/PlaceholderCard'
import { SectionWrapper } from '../components/SectionWrapper'
import { joinInfo } from '../data/join'

interface JoinUsSectionProps {
  onContact: () => void
}

export function JoinUsSection({ onContact }: JoinUsSectionProps) {
  return (
    <SectionWrapper id="join-us" index="09" title="Join Us" eyebrow="Recruit" tone="join">
      <div className="mb-9 flex flex-col justify-between gap-6 border-y border-[#DADADA] py-7 sm:flex-row sm:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#333333]">Recruitment Notice</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#666666]">모집 여부와 세부 일정은 정해지지 않았으며, 안내 내용은 추후 업데이트 예정입니다.</p>
        </div>
        <button
          type="button"
          onClick={onContact}
          className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#333333] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#333333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333333] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F7]"
        >
          Contact <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <AnimatedSection><PlaceholderCard icon={UsersRound} title="Recruitment Target Placeholder" description={joinInfo.target || undefined} /></AnimatedSection>
        <AnimatedSection><PlaceholderCard icon={ClipboardCheck} title="Application Method Placeholder" description={joinInfo.applicationMethod || undefined} /></AnimatedSection>
        <AnimatedSection><PlaceholderCard icon={CircleHelp} title="FAQ Placeholder" description={joinInfo.faq || undefined} /></AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
