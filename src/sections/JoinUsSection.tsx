import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'
import { joinInfo } from '../data/join'

interface JoinUsSectionProps {
  onContact: () => void
}

export function JoinUsSection({ onContact }: JoinUsSectionProps) {
  const joinSlots = [
    { number: '01', title: 'Recruitment Target Placeholder', description: joinInfo.target },
    { number: '02', title: 'Application Method Placeholder', description: joinInfo.applicationMethod },
    { number: '03', title: 'FAQ Placeholder', description: joinInfo.faq },
  ]

  return (
    <SectionWrapper id="join-us" index="09" title="Join Us" eyebrow="Recruitment" tone="join">
      <div className="mb-9 flex flex-col justify-between gap-6 border-y border-[#CBD5E1] py-7 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-[#475569]">Recruitment Notice</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#64748B]">모집 여부와 세부 일정은 정해지지 않았으며, 안내 내용은 추후 업데이트 예정입니다.</p>
        </div>
        <button
          type="button"
          onClick={onContact}
          className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#475569] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#334155] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64748B] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Contact <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
      <div className="grid border-t border-[#CBD5E1] md:grid-cols-3">
        {joinSlots.map(({ number, title, description }, index) => (
          <AnimatedSection className="h-full" key={title}>
            <article className={`h-full border-b border-[#E2E8F0] py-7 md:px-7 ${index > 0 ? 'md:border-l' : ''}`}>
              <span className="font-mono text-xs text-[#94A3B8]">{number}</span>
              <h3 className="mt-5 text-lg font-semibold text-[#1F2937]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#64748B]">{description || '추후 내용이 추가될 예정입니다.'}</p>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}
