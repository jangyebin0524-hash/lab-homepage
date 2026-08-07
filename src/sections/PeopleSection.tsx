import { UserRound } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { MedicalRecordCard } from '../components/MedicalVisuals'
import { SectionWrapper } from '../components/SectionWrapper'
import { people, professor } from '../data/people'
import { siteInfo } from '../data/siteInfo'

const undergraduateResearchers = people.filter((person) => person.group === 'undergraduate-researchers')

export function PeopleSection() {
  return (
    <SectionWrapper id="people" index="04" title="People" eyebrow="Research team">
      <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-7">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[#64748B]">Professor</p>
            <h3 className="mt-2 text-xl font-semibold text-[#1F2937]">{professor.name.en}</h3>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-[300px_minmax(0,1fr)]">
          <AnimatedSection className="h-full">
            <div className="flex h-full aspect-[4/5] min-h-72 flex-col items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white text-center">
              <span className="grid h-20 w-20 place-items-center rounded-2xl bg-[#F1F5F9] text-[#475569]">
                <UserRound size={30} aria-hidden="true" />
              </span>
              <p className="mt-5 text-sm font-semibold text-[#1F2937]">Profile image pending</p>
              <p className="mt-2 text-xs text-[#64748B]">Actual photo has not been provided.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection className="h-full">
            <MedicalRecordCard
              label="Researcher Profile"
              title={professor.name.en}
              fields={[
                { label: 'Korean Name', value: professor.name.ko },
                { label: 'English Name', value: professor.name.en },
                { label: 'Role', value: professor.role.en },
                { label: 'Department', value: siteInfo.department.en },
                { label: 'Affiliation', value: `${siteInfo.college.en}, ${siteInfo.university.en}` },
                {
                  label: 'Korean Affiliation',
                  value: `${siteInfo.university.ko} ${siteInfo.college.ko} ${siteInfo.department.ko}`,
                },
                { label: 'E-mail', value: professor.email, href: `mailto:${professor.email}` },
                { label: 'Tel', value: professor.phone, href: `tel:${professor.phone}` },
                { label: 'Office', value: professor.office },
              ]}
            />
          </AnimatedSection>
        </div>
      </div>

      <div className="mt-12">
        <div>
          <p className="text-xs font-medium text-[#64748B]">Students</p>
          <h3 className="mt-2 text-xl font-semibold text-[#1F2937]">Undergraduate Researchers</h3>
        </div>

        <div
          data-scroll-area="undergraduate-researchers"
          className="subtle-scrollbar mt-5 min-w-0 max-w-full touch-pan-x overflow-x-auto overflow-y-hidden overscroll-x-contain pb-5 pt-1"
          role="region"
          aria-label="Undergraduate researcher card list"
          tabIndex={0}
        >
          <div className="flex min-w-max items-stretch gap-5 pr-8 sm:gap-6">
            {undergraduateResearchers.map((person) => (
              <AnimatedSection className="h-auto w-[280px] shrink-0 md:w-[320px]" key={person.id}>
                <article
                  data-card="undergraduate-researcher"
                  className="surface-card interactive-card flex min-h-64 h-full flex-col items-center justify-center overflow-hidden p-6 text-center"
                >
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={`${person.nameEn ?? person.nameKo} profile`}
                      className="h-20 w-20 shrink-0 rounded-2xl bg-[#F1F5F9] object-cover"
                    />
                  ) : (
                    <span className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-[#F1F5F9] text-[#475569]">
                      <UserRound size={30} aria-hidden="true" />
                    </span>
                  )}
                  <div className="mt-5 min-w-0 max-w-full">
                    <p className="break-words text-base font-semibold text-[#1F2937]">{person.nameKo}</p>
                    {person.nameEn && <p className="mt-1 text-xs text-[#64748B]">{person.nameEn}</p>}
                    <p className="mt-3 text-xs font-medium text-[#475569]">{person.role}</p>
                    {person.departmentEn && <p className="mt-2 text-xs text-[#64748B]">{person.departmentEn}</p>}
                    {person.email && (
                      <a
                        href={`mailto:${person.email}`}
                        className="email-link mt-3 text-xs text-[#475569] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64748B]"
                      >
                        {person.email}
                      </a>
                    )}
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
