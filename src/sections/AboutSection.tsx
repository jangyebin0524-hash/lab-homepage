import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'

const outlineItems = [
  { number: '01', title: 'Mission', description: '연구실 목표가 추후 추가될 예정입니다.' },
  { number: '02', title: 'Vision', description: '연구실 비전이 추후 추가될 예정입니다.' },
  { number: '03', title: 'Research Direction', description: '주요 연구 방향이 추후 추가될 예정입니다.' },
]

const profileFields = ['Lab Name', 'Department', 'University', 'Principal Investigator', 'Research Area', 'Office', 'E-mail']

export function AboutSection() {
  return (
    <SectionWrapper id="about" index="02" title="About" eyebrow="Lab overview">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="border-t border-[#CBD5E1]">
          {outlineItems.map((item) => (
            <AnimatedSection key={item.number}>
              <article className="border-b border-[#E2E8F0] py-7">
                <div className="flex gap-5">
                  <span className="font-mono text-xs text-[#475569]">{item.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1F2937]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#64748B]">{item.description}</p>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <aside className="border-y border-[#CBD5E1] py-7">
            <p className="text-xs font-medium text-[#64748B]">Lab profile</p>
            <h3 className="mt-2 text-xl font-semibold text-[#1F2937]">Lab Profile Placeholder</h3>
            <dl className="mt-6 divide-y divide-[#E2E8F0]">
              {profileFields.map((label) => (
                <div className="grid grid-cols-[120px_1fr] gap-4 py-3 text-sm" key={label}>
                  <dt className="text-[#64748B]">{label}</dt>
                  <dd className="font-medium text-[#1F2937]">Placeholder</dd>
                </div>
              ))}
            </dl>
          </aside>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
