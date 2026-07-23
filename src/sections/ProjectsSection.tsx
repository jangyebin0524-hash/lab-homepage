import { Cpu, Layers3, LineChart } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'

const projectSlots = [
  { icon: Cpu, title: 'Project Title Placeholder 01' },
  { icon: Layers3, title: 'Project Title Placeholder 02' },
  { icon: LineChart, title: 'Project Title Placeholder 03' },
]

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" index="06" title="Projects" eyebrow="Projects">
      <div className="mb-9 max-w-2xl border-l-2 border-[#6F93A6] pl-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6F93A6]">Research Projects Placeholder</p>
        <p className="text-sm leading-7 text-[#64748B]">연구 과제와 기술 개발 항목이 추후 추가될 예정입니다.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {projectSlots.map(({ icon: Icon, title }) => (
          <AnimatedSection className="h-full" key={title}>
            <article className="interactive-card h-full rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#EAF3F8] text-[#0F3A5C]">
                <Icon size={19} aria-hidden="true" />
              </span>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6F93A6]">Project Card</p>
              <h3 className="mt-2 text-lg font-semibold text-[#1F2937]">{title}</h3>
              <dl className="mt-5 divide-y divide-[#E2E8F0] text-sm">
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
