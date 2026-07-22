import { ExternalLink, Lightbulb } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { EmptyState } from '../components/EmptyState'
import { PlaceholderCard } from '../components/PlaceholderCard'
import { SectionWrapper } from '../components/SectionWrapper'

const publicationSlots = ['publication-slot-01', 'publication-slot-02']

export function PublicationsSection() {
  return (
    <SectionWrapper id="publications" index="05" title="Publications" eyebrow="Publications" tone="muted">
      <div className="mb-9 max-w-2xl border-l-2 border-[#333333] pl-5">
        <p className="text-sm leading-7 text-[#666666]">논문과 연구 성과에 대한 소개가 추후 추가될 예정입니다.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {publicationSlots.map((slot) => (
          <AnimatedSection className="h-full" key={slot}>
            <div className="h-full rounded-2xl border border-[#E2E2E2] bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between border-b border-[#E2E2E2] pb-4">
                <h3 className="text-2xl font-semibold text-[#222222]">Year Placeholder</h3>
                <span className="font-mono text-[10px] uppercase text-[#8A8A8A]">Records Placeholder</span>
              </div>
              <EmptyState title="Publication list Placeholder" />
            </div>
          </AnimatedSection>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <AnimatedSection><PlaceholderCard icon={Lightbulb} title="Patent List Placeholder" /></AnimatedSection>
        <AnimatedSection><PlaceholderCard icon={ExternalLink} title="External Links Placeholder" /></AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
