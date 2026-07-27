import type { SectionId } from '../types/content'
import { MedicalDataFlow, MedicalHeroVisual } from '../components/MedicalVisuals'
import { RecruitmentBanner } from '../components/RecruitmentBanner'
import { SectionWrapper } from '../components/SectionWrapper'

interface HomeSectionProps {
  onNavigate: (id: SectionId) => void
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  const labFields = ['Lab Name', 'Department', 'University', 'Principal Investigator', 'Research Area']

  return (
    <SectionWrapper id="home" index="01" title="Home" tone="home" hideHeading className="min-h-[calc(100vh-4rem)]">
      <RecruitmentBanner onNavigate={() => onNavigate('join-us')} />

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
        <div className="home-stagger relative min-w-0 pb-6" style={{ '--delay': '120ms' } as React.CSSProperties}>
          <div className="relative flex items-center gap-3 text-xs font-medium text-[#64748B]">
            <span className="h-px w-12 bg-[#CBD5E1]" /> Medical IT · AI Research Lab
          </div>
          <h1 className="relative mt-7 max-w-4xl break-words text-5xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#1F2937] sm:text-6xl">
            Lab Name Placeholder
          </h1>
          <p className="mt-4 text-sm text-[#64748B]">
            Department Placeholder · University Placeholder
          </p>
          <p className="mt-6 max-w-full break-words text-lg font-medium leading-8 text-[#475569] sm:max-w-2xl sm:text-2xl">
            Hero Title Placeholder
          </p>
          <p className="relative mt-5 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
            의료 AI 및 의료 IT 연구 소개 문구가 추후 추가될 예정입니다.
          </p>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#64748B]">
            {['Research Keyword Placeholder 01', 'Research Keyword Placeholder 02', 'Research Keyword Placeholder 03'].map((keyword, index) => (
              <li className="flex items-center gap-2" key={keyword}>
                <span className="font-mono text-[10px] text-[#94A3B8]">0{index + 1}</span>
                <span>{keyword}</span>
              </li>
            ))}
          </ul>
          <div className="relative mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('research')}
              className="rounded-xl bg-[#475569] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#334155] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64748B] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Research Placeholder
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="rounded-xl border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-semibold text-[#475569] transition-colors hover:bg-[#F1F5F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64748B] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Contact Placeholder
            </button>
          </div>
        </div>

        <div className="home-stagger min-w-0" style={{ '--delay': '220ms' } as React.CSSProperties}>
          <MedicalHeroVisual />
        </div>
      </div>

      <div className="home-stagger mt-16 grid border-y border-[#CBD5E1] lg:grid-cols-[1.08fr_0.92fr]" style={{ '--delay': '320ms' } as React.CSSProperties}>
        <article className="flex flex-col justify-between py-8 pr-0 lg:border-r lg:border-[#E2E8F0] lg:pr-12">
          <div>
            <p className="text-xs font-medium text-[#64748B]">Mission Placeholder</p>
            <p className="mt-6 max-w-xl text-2xl font-medium leading-snug text-[#1F2937] sm:text-3xl">Research mission will be added here.</p>
          </div>
          <p className="mt-10 max-w-xl text-sm leading-7 text-[#64748B]">연구실의 목표와 방향성이 추후 추가될 예정입니다.</p>
        </article>
        <div className="border-t border-[#E2E8F0] py-8 lg:border-l-0 lg:border-t-0 lg:pl-12">
          <p className="text-xs font-medium text-[#64748B]">Lab information</p>
          <h2 className="mt-2 text-lg font-semibold text-[#1F2937]">Profile Placeholder</h2>
          <dl className="mt-5 divide-y divide-[#E2E8F0]">
            {labFields.map((label) => (
              <div className="grid grid-cols-[120px_1fr] gap-4 py-3 text-sm" key={label}>
                <dt className="text-[#64748B]">{label}</dt>
                <dd className="font-medium text-[#1F2937]">Placeholder</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="home-stagger mt-8" style={{ '--delay': '420ms' } as React.CSSProperties}>
        <MedicalDataFlow />
      </div>

      <div className="home-stagger mt-8 text-xs text-[#94A3B8]" style={{ '--delay': '520ms' } as React.CSSProperties}>
        Content status · Placeholder
      </div>
    </SectionWrapper>
  )
}
