import { BookOpen, Braces, Database, FileBox, GraduationCap } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { PlaceholderCard } from '../components/PlaceholderCard'
import { SectionWrapper } from '../components/SectionWrapper'

const slots = [
  { icon: BookOpen, title: 'Research Materials Placeholder' },
  { icon: Database, title: 'Datasets Placeholder' },
  { icon: Braces, title: 'Code Repositories Placeholder' },
  { icon: GraduationCap, title: 'Learning Resources Placeholder' },
  { icon: FileBox, title: 'Templates Placeholder' },
]

export function ResourcesSection() {
  return (
    <SectionWrapper id="resources" index="11" title="Resources" eyebrow="Resources" tone="muted">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {slots.map(({ icon, title }) => (
          <AnimatedSection key={title}>
            <PlaceholderCard icon={icon} title={title} />
          </AnimatedSection>
        ))}
      </div>
      <p className="mt-6 text-right font-mono text-[10px] uppercase tracking-[0.12em] text-[#94A3B8]">Resource records Placeholder</p>
    </SectionWrapper>
  )
}
