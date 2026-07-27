import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'

const projectSlots = [
  { number: '01', title: 'Project Title Placeholder 01' },
  { number: '02', title: 'Project Title Placeholder 02' },
  { number: '03', title: 'Project Title Placeholder 03' },
]

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" index="06" title="Projects">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-medium text-[#475569]">Research Projects Placeholder</p>
        <p className="mt-2 text-sm leading-7 text-[#64748B]">연구 과제와 기술 개발 항목이 추후 추가될 예정입니다.</p>
      </div>
      <div className="border-t border-[#CBD5E1]">
        {projectSlots.map(({ number, title }) => (
          <AnimatedSection key={title}>
            <article className="grid gap-6 border-b border-[#E2E8F0] py-8 lg:grid-cols-[80px_0.9fr_1.1fr] lg:gap-10">
              <span className="font-mono text-xs text-[#94A3B8]">{number}</span>
              <div>
                <p className="text-xs text-[#64748B]">Project Placeholder</p>
                <h3 className="mt-2 text-xl font-semibold text-[#1F2937]">{title}</h3>
              </div>
              <dl className="divide-y divide-[#E2E8F0] text-sm">
                {['Research Goal', 'Technology', 'Result'].map((label) => (
                  <div className="grid grid-cols-[105px_1fr] gap-3 py-3" key={label}>
                    <dt className="text-[#64748B]">{label}</dt>
                    <dd className="font-medium text-[#1F2937]">Placeholder</dd>
                  </div>
                ))}
              </dl>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}
