import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'
import { resources } from '../data/resources'

const slots = [
  'Research Materials Placeholder',
  'Datasets Placeholder',
  'Code Repositories Placeholder',
  'Learning Resources Placeholder',
  'Templates Placeholder',
]

export function ResourcesSection() {
  return (
    <SectionWrapper id="resources" index="11" title="Resources" tone="muted">
      <div className="border-t border-[#CBD5E1]">
        {resources.length > 0 ? resources.map((resource, index) => (
          <AnimatedSection key={resource.id}>
            <a
              className="group grid gap-3 border-b border-[#E2E8F0] py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64748B] sm:grid-cols-[80px_1fr_180px] sm:items-center"
              href={resource.url}
            >
              <span className="font-mono text-xs text-[#94A3B8]">0{index + 1}</span>
              <span>
                <span className="block text-base font-semibold text-[#1F2937] group-hover:text-[#475569]">{resource.title}</span>
                <span className="mt-1 block text-sm text-[#64748B]">{resource.description}</span>
              </span>
              <span className="text-xs text-[#94A3B8] sm:text-right">{resource.category}</span>
            </a>
          </AnimatedSection>
        )) : slots.map((title, index) => (
          <AnimatedSection key={title}>
            <div className="grid gap-3 border-b border-[#E2E8F0] py-6 sm:grid-cols-[80px_1fr_180px] sm:items-center">
              <span className="font-mono text-xs text-[#94A3B8]">0{index + 1}</span>
              <span>
                <span className="block text-base font-semibold text-[#1F2937]">{title}</span>
                <span className="mt-1 block text-sm text-[#64748B]">추후 내용이 추가될 예정입니다.</span>
              </span>
              <span className="text-xs text-[#94A3B8] sm:text-right">Resource Placeholder</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <p className="mt-6 text-right text-xs text-[#94A3B8]">{resources.length} resource records</p>
    </SectionWrapper>
  )
}
