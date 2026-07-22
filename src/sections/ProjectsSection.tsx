import { CheckCircle2, FileOutput, Timer } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { PlaceholderCard } from '../components/PlaceholderCard'
import { SectionWrapper } from '../components/SectionWrapper'
import { projects } from '../data/projects'

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" index="06" title="Projects" eyebrow="Projects">
      <div className="mb-9 max-w-2xl border-l-2 border-[#333333] pl-5">
        <p className="text-sm leading-7 text-[#666666]">연구 과제와 기술 개발 항목이 추후 추가될 예정입니다.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <AnimatedSection><PlaceholderCard icon={Timer} title="Ongoing Projects" description={projects.length ? 'Content will be added here.' : undefined} /></AnimatedSection>
        <AnimatedSection><PlaceholderCard icon={CheckCircle2} title="Completed Projects" /></AnimatedSection>
        <AnimatedSection><PlaceholderCard icon={FileOutput} title="Related Results" /></AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
