import type { SectionId } from '../types/content'
import { MedicalBackdrop, MedicalDataFlow, MedicalRecordCard } from '../components/MedicalVisuals'
import { RecruitmentBanner } from '../components/RecruitmentBanner'
import { SectionWrapper } from '../components/SectionWrapper'

interface HomeSectionProps {
  onNavigate: (id: SectionId) => void
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <SectionWrapper id="home" index="01" title="Home" tone="home" hideHeading className="min-h-[calc(100vh-5rem)]">
      <RecruitmentBanner onNavigate={() => onNavigate('join-us')} />

      <div className="home-stagger relative mt-16 max-w-6xl overflow-hidden pb-6" style={{ '--delay': '120ms' } as React.CSSProperties}>
        <MedicalBackdrop />
        <div className="relative flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#333333]">
          <span className="h-px w-12 bg-[#333333]" /> Medical IT Research Lab
        </div>
        <h1 className="relative mt-7 max-w-4xl text-5xl font-semibold leading-[1.08] text-[#222222] sm:text-6xl lg:text-7xl">
          Lab Name Placeholder
        </h1>
        <p className="relative mt-7 max-w-2xl text-base leading-8 text-[#666666] sm:text-lg">
          연구실 소개 문구가 추후 추가될 예정입니다.
        </p>
        <div className="relative mt-9 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onNavigate('research')}
            className="rounded-full bg-[#333333] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#333333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333333] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F7]"
          >
            Research Placeholder
          </button>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="rounded-full border border-[#DADADA] bg-white/70 px-5 py-3 text-sm font-semibold text-[#333333] transition-colors hover:bg-[#EEEEEE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333333] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F7]"
          >
            Contact Placeholder
          </button>
        </div>
      </div>

      <div className="home-stagger mt-14 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]" style={{ '--delay': '240ms' } as React.CSSProperties}>
        <article className="interactive-card flex min-h-80 flex-col justify-between rounded-2xl border border-[#333333]/20 bg-[#333333] p-7 text-white shadow-sm sm:p-9">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EEEEEE]">Mission</p>
            <p className="mt-8 max-w-xl text-2xl font-medium leading-snug sm:text-3xl">Research mission will be added here.</p>
          </div>
          <p className="mt-12 border-t border-white/20 pt-5 text-sm leading-7 text-[#F2F2F2]">연구실의 목표와 방향성이 추후 추가될 예정입니다.</p>
        </article>
        <MedicalRecordCard
          label="Lab Information"
          title="Profile Placeholder"
          fields={[
            { label: 'Lab Name' },
            { label: 'Department' },
            { label: 'University' },
            { label: 'Principal Investigator' },
            { label: 'Research Area' },
          ]}
        />
      </div>

      <div className="home-stagger mt-8" style={{ '--delay': '360ms' } as React.CSSProperties}>
        <MedicalDataFlow />
      </div>

      <div className="home-stagger mt-8 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A8A8A]" style={{ '--delay': '480ms' } as React.CSSProperties}>
        Content status · Placeholder
      </div>
    </SectionWrapper>
  )
}
