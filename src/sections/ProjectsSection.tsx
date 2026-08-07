import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'
import { projects } from '../data/projects'

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" index="06" title="Projects">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-medium text-[#475569]">Research Projects</p>
        <p className="mt-2 text-sm leading-7 text-[#64748B]">Research projects and implemented technical outcomes.</p>
      </div>
      <div className="border-t border-[#CBD5E1]">
        {projects.map((project, index) => (
          <AnimatedSection key={project.id}>
            <article className="grid gap-6 border-b border-[#E2E8F0] py-8 lg:grid-cols-[80px_0.9fr_1.1fr] lg:gap-10">
              <span className="font-mono text-xs text-[#94A3B8]">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p className="text-xs capitalize text-[#64748B]">{project.status}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#1F2937]">{project.title}</h3>
              </div>
              <dl className="divide-y divide-[#E2E8F0] text-sm">
                {[
                  { label: 'Research Goal', value: project.description },
                  { label: 'Technology', value: project.technology },
                  { label: 'Result', value: project.result },
                ].map(({ label, value }) => (
                  <div className="grid grid-cols-[105px_1fr] gap-3 py-3" key={label}>
                    <dt className="text-[#64748B]">{label}</dt>
                    <dd className="font-medium leading-6 text-[#1F2937]">{value}</dd>
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
