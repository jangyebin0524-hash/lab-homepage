import type { SectionId } from '../types/content'
import { MedicalDataFlow, MedicalHeroVisual, MedicalRecordCard } from '../components/MedicalVisuals'
import { RecruitmentBanner } from '../components/RecruitmentBanner'
import { SectionWrapper } from '../components/SectionWrapper'

interface HomeSectionProps {
  onNavigate: (id: SectionId) => void
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <SectionWrapper id="home" index="01" title="Home" tone="home" hideHeading className="min-h-[calc(100vh-5rem)]">
      <RecruitmentBanner onNavigate={() => onNavigate('join-us')} />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div className="home-stagger relative min-w-0 pb-6" style={{ '--delay': '120ms' } as React.CSSProperties}>
          <div className="relative flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6F93A6]">
            <span className="h-px w-12 bg-[#9DB9C8]" /> Light Futuristic Medical AI Lab
          </div>
          <h1 className="relative mt-7 max-w-4xl break-words text-5xl font-semibold leading-[1.08] text-[#1F2937] sm:text-6xl lg:text-7xl">
            Lab Name Placeholder
          </h1>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
            Department Placeholder · University Placeholder
          </p>
          <p className="mt-6 max-w-full break-words text-lg font-medium leading-8 text-[#0F3A5C] sm:max-w-2xl sm:text-2xl">
            Hero Title Placeholder
          </p>
          <p className="relative mt-5 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
            의료 AI 및 의료 IT 연구 소개 문구가 추후 추가될 예정입니다.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {['Research Keyword Placeholder 01', 'Research Keyword Placeholder 02', 'Research Keyword Placeholder 03'].map((keyword) => (
              <span className="rounded-full border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-1.5 text-xs font-semibold text-[#0F3A5C]" key={keyword}>
                {keyword}
              </span>
            ))}
          </div>
          <div className="relative mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('research')}
              className="rounded-full bg-[#0F3A5C] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#102F4C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F93A6] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Research Placeholder
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="rounded-full border border-[#CBD5E1] bg-white/80 px-5 py-3 text-sm font-semibold text-[#0F3A5C] transition-colors hover:bg-[#EAF3F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F93A6] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Contact Placeholder
            </button>
          </div>
        </div>

        <div className="home-stagger min-w-0" style={{ '--delay': '220ms' } as React.CSSProperties}>
          <MedicalHeroVisual />
        </div>
      </div>

      <div className="home-stagger mt-14 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]" style={{ '--delay': '320ms' } as React.CSSProperties}>
        <article className="interactive-card technical-grid flex min-h-80 flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-sm sm:p-9">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6F93A6]">Mission Placeholder</p>
            <p className="mt-8 max-w-xl text-2xl font-medium leading-snug text-[#1F2937] sm:text-3xl">Research mission will be added here.</p>
          </div>
          <p className="mt-12 border-t border-[#E2E8F0] pt-5 text-sm leading-7 text-[#64748B]">연구실의 목표와 방향성이 추후 추가될 예정입니다.</p>
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

      <div className="home-stagger mt-8" style={{ '--delay': '420ms' } as React.CSSProperties}>
        <MedicalDataFlow />
      </div>

      <div className="home-stagger mt-8 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94A3B8]" style={{ '--delay': '520ms' } as React.CSSProperties}>
        Content status · Placeholder
      </div>
    </SectionWrapper>
  )
}
