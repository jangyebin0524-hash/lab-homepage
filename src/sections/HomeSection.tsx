import type { SectionId } from '../types/content'
import { MedicalHeroVisual } from '../components/MedicalVisuals'
import { SectionWrapper } from '../components/SectionWrapper'
import { siteInfo } from '../data/siteInfo'

interface HomeSectionProps {
  onNavigate: (id: SectionId) => void
}

const researchAreas = [
  {
    title: 'Medical Artificial Intelligence',
    description: 'Developing intelligent methods that support the analysis and interpretation of complex medical information.',
  },
  {
    title: 'Biomedical Data Analytics',
    description: 'Studying clinical and biomedical data to identify meaningful patterns and improve data-informed healthcare research.',
  },
  {
    title: 'Digital Healthcare Systems',
    description: 'Designing digital systems and services that support patients, healthcare professionals, and medical organizations.',
  },
  {
    title: 'Biomedical Signal Processing',
    description: 'Analyzing physiological signals to extract useful information for health monitoring and clinical decision support.',
  },
]

export function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <SectionWrapper id="home" index="01" title="Home" tone="home" hideHeading className="min-h-[calc(100vh-4rem)]">
      <div className="grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
        <div className="home-stagger relative min-w-0 pb-6" style={{ '--delay': '120ms' } as React.CSSProperties}>
          <div className="relative flex items-start gap-3 text-[10px] font-medium uppercase leading-5 tracking-[0.08em] text-[#64748B] sm:text-xs">
            <span className="mt-2.5 h-px w-12 shrink-0 bg-[#CBD5E1]" aria-hidden="true" />
            <div className="min-w-0">
              <p>{siteInfo.university.en}</p>
              <p className="mt-0.5 break-normal">
                {siteInfo.college.en} · {siteInfo.department.en}
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm font-semibold text-[#475569]">{siteInfo.lab.en}</p>
          <h1 className="relative mt-4 max-w-[15ch] break-normal text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-[#1F2937] sm:text-5xl lg:text-6xl">
            Advancing Healthcare through Data and Intelligent Systems
          </h1>
          <p className="relative mt-6 max-w-xl text-base leading-8 text-[#64748B] sm:text-lg">
            We explore how medical data, artificial intelligence, and digital technologies can support more reliable, accessible, and human-centered healthcare.
          </p>
          <div className="relative mt-9 flex flex-wrap gap-3">
            <a
              href="#research"
              onClick={(event) => {
                event.preventDefault()
                onNavigate('research')
              }}
              className="rounded-xl bg-[#475569] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#334155] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64748B] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Explore Our Research
            </a>
            <a
              href="#people"
              onClick={(event) => {
                event.preventDefault()
                onNavigate('people')
              }}
              className="rounded-xl border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-semibold text-[#475569] transition-colors hover:bg-[#F1F5F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64748B] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Meet Our Team
            </a>
          </div>
        </div>

        <div className="home-stagger min-w-0" style={{ '--delay': '220ms' } as React.CSSProperties}>
          <MedicalHeroVisual />
        </div>
      </div>

      <section className="home-stagger mt-16 border-y border-[#CBD5E1] py-10 sm:py-12" style={{ '--delay': '320ms' } as React.CSSProperties} aria-labelledby="home-research-focus">
        <div className="max-w-3xl">
          <h2 id="home-research-focus" className="text-3xl font-semibold tracking-[-0.02em] text-[#1F2937] sm:text-4xl">
            Research Focus
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#64748B]">
            Our research connects healthcare needs with data-driven and intelligent technologies to develop practical solutions for medical environments.
          </p>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {researchAreas.map((area, index) => (
            <article className="border-t border-[#E2E8F0] pt-5" key={area.title}>
              <div className="flex items-start gap-4">
                <span className="mt-1 shrink-0 font-mono text-xs text-[#94A3B8]">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold text-[#1F2937]">{area.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#64748B]">{area.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-stagger mt-16 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16" style={{ '--delay': '420ms' } as React.CSSProperties} aria-labelledby="home-introduction">
        <div>
          <p className="text-xs font-medium text-[#64748B]">Introduction</p>
          <h2 id="home-introduction" className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#1F2937] sm:text-4xl">
            Research with Clinical Relevance
          </h2>
        </div>
        <div className="max-w-2xl border-t border-[#CBD5E1] pt-6">
          <p className="text-base leading-8 text-[#475569]">
            We aim to bridge technology and healthcare by conducting research that is technically rigorous, clinically meaningful, and applicable to real-world medical challenges.
          </p>
          <p className="mt-5 text-base leading-8 text-[#64748B]">
            Our work brings together perspectives from healthcare, data science, artificial intelligence, and information systems.
          </p>
          <a
            href="#about"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('about')
            }}
            className="mt-7 inline-flex border-b border-[#94A3B8] pb-1 text-sm font-semibold text-[#475569] transition-colors hover:border-[#475569] hover:text-[#1F2937] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64748B] focus-visible:ring-offset-4"
          >
            About the Lab
          </a>
        </div>
      </section>
    </SectionWrapper>
  )
}
