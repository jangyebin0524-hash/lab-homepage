import { AnimatedSection } from '../components/AnimatedSection'
import { EmptyState } from '../components/EmptyState'
import { SectionWrapper } from '../components/SectionWrapper'

const publicationSlots = ['publication-slot-01', 'publication-slot-02', 'publication-slot-03']

export function PublicationsSection() {
  return (
    <SectionWrapper id="publications" index="05" title="Publications" tone="muted">
      <div className="mb-10 grid gap-7 border-b border-[#CBD5E1] pb-7 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#475569]">Selected Papers</p>
          <p className="mt-2 text-sm leading-7 text-[#64748B]">논문과 연구 성과에 대한 소개가 추후 추가될 예정입니다.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {['Year Filter Placeholder', 'Research Area Filter Placeholder'].map((label) => (
            <div className="min-w-48 border-b border-[#CBD5E1] px-1 py-3 text-sm text-[#64748B]" key={label}>
              <span className="mb-1 block text-xs text-[#94A3B8]">Filter</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#CBD5E1]">
        {publicationSlots.map((slot, index) => (
          <AnimatedSection key={slot}>
            <article className="grid gap-4 border-b border-[#E2E8F0] py-7 sm:grid-cols-[100px_1fr] lg:grid-cols-[120px_1fr_180px] lg:gap-8">
              <div>
                <span className="font-mono text-xs text-[#94A3B8]">0{index + 1}</span>
                <p className="mt-2 text-sm font-medium text-[#475569]">Year Placeholder</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1F2937]">Paper Title Placeholder</h3>
                <p className="mt-2 text-sm text-[#64748B]">Journal / Conference Placeholder</p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#64748B]">Short summary Placeholder. 추후 내용이 추가될 예정입니다.</p>
              </div>
              <p className="text-xs text-[#94A3B8] lg:text-right">View detail Placeholder</p>
            </article>
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-6">
        <EmptyState title="Publication archive Placeholder" />
      </div>
    </SectionWrapper>
  )
}
