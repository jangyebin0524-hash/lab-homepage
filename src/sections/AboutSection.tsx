import { AnimatedSection } from '../components/AnimatedSection'
import { MedicalRecordCard } from '../components/MedicalVisuals'
import { SectionWrapper } from '../components/SectionWrapper'

const outlineItems = [
  { number: '01', title: 'Mission', description: '연구실 목표가 추후 추가될 예정입니다.' },
  { number: '02', title: 'Vision', description: '연구실 비전이 추후 추가될 예정입니다.' },
  { number: '03', title: 'Research Direction', description: '주요 연구 방향이 추후 추가될 예정입니다.' },
]

export function AboutSection() {
  return (
    <SectionWrapper id="about" index="02" title="About" eyebrow="Outline">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="border-t border-[#DADADA]">
          {outlineItems.map((item) => (
            <AnimatedSection key={item.number}>
              <article className="border-b border-[#E2E2E2] py-7">
                <div className="flex gap-5">
                  <span className="font-mono text-xs text-[#333333]">{item.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-[#222222]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#666666]">{item.description}</p>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <MedicalRecordCard
            label="Lab Profile"
            title="Lab Profile Placeholder"
            fields={[
              { label: 'Lab Name' },
              { label: 'Department' },
              { label: 'University' },
              { label: 'Principal Investigator' },
              { label: 'Research Area' },
              { label: 'Office' },
              { label: 'E-mail' },
            ]}
          />
        </AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
