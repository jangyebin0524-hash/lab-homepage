import { UserRound } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { MedicalRecordCard } from '../components/MedicalVisuals'
import { SectionWrapper } from '../components/SectionWrapper'
import { people } from '../data/people'

const groups = [
  { id: 'current-members', label: 'Current Members' },
  { id: 'graduate-students', label: 'Graduate Students' },
  { id: 'undergraduate-researchers', label: 'Undergraduate Researchers' },
  { id: 'alumni', label: 'Alumni' },
] as const

function ProfilePlaceholder() {
  return (
    <div className="p-5">
      <div className="flex items-center gap-4 border-b border-[#E2E8F0] pb-5">
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-[#F8FAFC] text-[#94A3B8]">
          <UserRound size={25} aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-[#1F2937]">Korean Name Placeholder</p>
          <p className="mt-1 text-xs text-[#64748B]">English Name Placeholder</p>
        </div>
      </div>
      <dl className="divide-y divide-[#E2E8F0] text-xs">
        {['Department', 'Role', 'Public Email', 'Achievements'].map((label) => (
          <div className="grid grid-cols-[90px_1fr] gap-3 py-3" key={label}>
            <dt className="text-[#64748B]">{label}</dt>
            <dd className="font-medium text-[#1F2937]">Placeholder</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function PeopleSection() {
  return (
    <SectionWrapper id="people" index="04" title="People" eyebrow="Research Team">
      <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 shadow-sm sm:p-7">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6F93A6]">Professor</p>
            <h3 className="mt-2 text-xl font-semibold text-[#1F2937]">Principal Investigator Placeholder</h3>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#94A3B8]">Profile</span>
        </div>
        <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
          <AnimatedSection className="h-full">
            <div className="flex h-full aspect-[4/5] min-h-72 flex-col items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white text-center">
              <span className="grid h-20 w-20 place-items-center rounded-2xl bg-[#EAF3F8] text-[#0F3A5C]">
                <UserRound size={30} aria-hidden="true" />
              </span>
              <p className="mt-5 text-sm font-semibold text-[#1F2937]">Profile Image Placeholder</p>
              <p className="mt-2 text-xs text-[#64748B]">추후 업데이트 예정입니다.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection className="h-full">
            <MedicalRecordCard
              label="Researcher Profile"
              title="Professor Profile Placeholder"
              fields={[
                { label: 'Korean Name' },
                { label: 'English Name' },
                { label: 'Department' },
                { label: 'Role' },
                { label: 'Affiliation' },
                { label: 'Research Interest' },
              ]}
            />
          </AnimatedSection>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-[#1F2937]">Member Groups</h3>
            <p className="mt-2 text-xs leading-5 text-[#64748B]">그룹을 좌우로 넘겨 확인할 수 있습니다.</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0F3A5C]" aria-hidden="true">
            Swipe <span className="h-px w-8 bg-[#6F93A6]" />
          </span>
        </div>
        <div
          data-scroll-area="member-groups"
          className="subtle-scrollbar mt-5 min-w-0 max-w-full touch-pan-x overflow-x-auto overflow-y-hidden overscroll-x-contain pb-5 pt-1"
          role="region"
          aria-label="구성원 그룹 목록"
          tabIndex={0}
        >
          <div className="flex min-w-max gap-5 pr-8 sm:gap-6">
            {groups.map((group) => {
              const groupMembers = people.filter((person) => person.group === group.id)

              return (
                <AnimatedSection className="w-[300px] shrink-0 md:w-[380px]" key={group.id}>
                  <article data-card="member-group" className="interactive-card h-full w-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
                    <header className="flex items-center justify-between gap-4 border-b border-[#E2E8F0] px-5 py-4">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-[#1F2937]">{group.label}</p>
                        <p className="mt-1 font-mono text-[10px] uppercase text-[#94A3B8]">Members Placeholder</p>
                      </div>
                      <span className="rounded-full bg-[#EAF3F8] px-2.5 py-1 font-mono text-[10px] text-[#0F3A5C]">Group</span>
                    </header>

                    <div className="space-y-4">
                      {groupMembers.length === 0 ? (
                        <ProfilePlaceholder />
                      ) : (
                        groupMembers.map((person) => (
                          <div className="border-b border-[#E2E8F0] p-5 last:border-b-0" key={person.id}>
                            <p className="text-sm font-semibold text-[#1F2937]">{person.name}</p>
                            <p className="mt-1 text-xs text-[#64748B]">{person.title}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
