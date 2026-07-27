import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'

const researchSlots: {
  number: string
  title: string
  topics: string[]
}[] = [
  {
    number: '01',
    title: 'Research Area Placeholder 01',
    topics: ['Topic Placeholder A', 'Topic Placeholder B', 'Topic Placeholder C'],
  },
  {
    number: '02',
    title: 'Research Area Placeholder 02',
    topics: ['Topic Placeholder A', 'Topic Placeholder B', 'Topic Placeholder C'],
  },
  {
    number: '03',
    title: 'Research Area Placeholder 03',
    topics: ['Topic Placeholder A', 'Topic Placeholder B', 'Topic Placeholder C'],
  },
  {
    number: '04',
    title: 'Research Area Placeholder 04',
    topics: ['Topic Placeholder A', 'Topic Placeholder B', 'Topic Placeholder C'],
  },
]

export function ResearchSection() {
  return (
    <SectionWrapper id="research" index="03" title="Research" tone="soft">
      <div className="mb-7 flex items-end justify-between gap-5">
        <div>
          <p className="text-sm font-medium text-[#475569]">Research Areas Placeholder</p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[#64748B]">연구 분야 소개가 추후 추가될 예정입니다.</p>
        </div>
          <span className="inline-flex shrink-0 items-center gap-2 text-xs text-[#64748B]" aria-hidden="true">
          Swipe <span className="h-px w-8 bg-[#64748B]" />
        </span>
      </div>
      <div
        data-scroll-area="research-cards"
        className="subtle-scrollbar min-w-0 max-w-full touch-pan-x overflow-x-auto overflow-y-hidden overscroll-x-contain pb-5 pt-1"
        role="region"
        aria-label="연구 분야 카드 목록"
        tabIndex={0}
      >
        <div className="flex min-w-max gap-5 pr-8 sm:gap-6">
          {researchSlots.map(({ number, title, topics }) => (
            <AnimatedSection className="w-[280px] shrink-0 md:w-[360px]" key={number}>
              <article data-card="research" className="surface-card interactive-card flex min-h-72 h-full w-full flex-col p-6 md:p-7">
                <div className="flex items-center gap-4 border-b border-[#E2E8F0] pb-5">
                  <span className="font-mono text-sm font-semibold text-[#475569]">{number}</span>
                  <span className="h-px flex-1 bg-[#E2E8F0]" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#1F2937]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#64748B]">Short description Placeholder. 추후 내용이 추가될 예정입니다.</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-[#64748B]">
                  {topics.map((topic) => (
                    <li className="flex gap-2" key={topic}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#64748B]" aria-hidden="true" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
