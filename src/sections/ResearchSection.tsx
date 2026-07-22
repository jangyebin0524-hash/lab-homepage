import { Activity } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'

const researchSlots = ['01', '02', '03']

export function ResearchSection() {
  return (
    <SectionWrapper id="research" index="03" title="Research" eyebrow="Technologies" tone="soft">
      <div className="mb-7 flex items-end justify-between gap-5">
        <p className="max-w-2xl text-sm leading-7 text-[#666666]">연구 분야와 기술 영역에 대한 소개가 추후 추가될 예정입니다.</p>
        <span className="inline-flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#333333]" aria-hidden="true">
          Swipe <span className="h-px w-8 bg-[#333333]" />
        </span>
      </div>
      <div
        className="subtle-scrollbar min-w-0 max-w-full touch-pan-x overflow-x-auto overflow-y-hidden overscroll-x-contain pb-5 pt-1"
        role="region"
        aria-label="연구 분야 카드 목록"
        tabIndex={0}
      >
        <div className="flex min-w-max gap-5 pr-8 sm:gap-6">
          {researchSlots.map((number) => (
            <AnimatedSection className="w-[280px] shrink-0 md:w-[360px]" key={number}>
              <article className="interactive-card flex min-h-80 h-full w-full flex-col rounded-2xl border border-[#E2E2E2] bg-white p-6 shadow-sm md:p-7">
                <div className="flex items-center justify-between border-b border-[#E2E2E2] pb-5">
                  <span className="font-mono text-sm font-semibold text-[#333333]">{number}</span>
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#EEEEEE] text-[#333333]">
                    <Activity size={16} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A8A8A]">Technology Placeholder</p>
                <h3 className="mt-2 text-xl font-semibold text-[#222222]">Title Placeholder</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#666666]">Short description Placeholder. 추후 내용이 추가될 예정입니다.</p>
                <div className="mt-8 border-t border-[#E2E2E2] pt-4 text-xs font-medium text-[#666666]">Keywords Placeholder</div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
