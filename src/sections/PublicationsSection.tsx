import { FileText, Filter, Search } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { EmptyState } from '../components/EmptyState'
import { SectionWrapper } from '../components/SectionWrapper'

const publicationSlots = ['publication-slot-01', 'publication-slot-02', 'publication-slot-03']

export function PublicationsSection() {
  return (
    <SectionWrapper id="publications" index="05" title="Publications" eyebrow="Publications" tone="muted">
      <div className="mb-9 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="max-w-2xl border-l-2 border-[#6F93A6] pl-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6F93A6]">Selected Papers</p>
          <p className="mt-2 text-sm leading-7 text-[#64748B]">논문과 연구 성과에 대한 소개가 추후 추가될 예정입니다.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: Filter, label: 'Year Filter Placeholder' },
            { icon: Search, label: 'Research Area Filter Placeholder' },
          ].map(({ icon: Icon, label }) => (
            <div className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-medium text-[#64748B]" key={label}>
              <Icon className="text-[#6F93A6]" size={16} aria-hidden="true" />
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {publicationSlots.map((slot) => (
          <AnimatedSection className="h-full" key={slot}>
            <article className="interactive-card h-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
              <div className="imaging-grid flex aspect-[4/3] items-center justify-center border-b border-[#E2E8F0] bg-[#F8FAFC]">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#0F3A5C] shadow-sm">
                  <FileText size={24} aria-hidden="true" />
                </span>
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#EAF3F8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0F3A5C]">Year Placeholder</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">Journal Placeholder</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1F2937]">Paper Title Placeholder</h3>
                <p className="mt-3 text-sm leading-7 text-[#64748B]">Short summary Placeholder. 추후 내용이 추가될 예정입니다.</p>
                <button
                  type="button"
                  className="mt-6 rounded-full border border-[#CBD5E1] px-4 py-2 text-xs font-semibold text-[#0F3A5C] transition-colors hover:bg-[#EAF3F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F93A6]"
                >
                  View Detail Placeholder
                </button>
              </div>
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
