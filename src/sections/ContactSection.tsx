import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'
import { contact } from '../data/contact'
import { professor } from '../data/people'
import { siteInfo } from '../data/siteInfo'

const contactRows = [
  { label: 'E-mail', value: professor.email, href: `mailto:${professor.email}` },
  { label: 'Tel', value: professor.phone, href: `tel:${professor.phone}` },
  { label: 'Department', value: siteInfo.department.en },
  { label: 'Affiliation', value: `${siteInfo.college.en}, ${siteInfo.university.en}` },
]

export function ContactSection() {
  return (
    <SectionWrapper id="contact" index="10" title="Contact">
      <div className="grid border-y border-[#CBD5E1] lg:grid-cols-[0.9fr_1.1fr]">
        <AnimatedSection className="h-full">
          <div className="h-full py-8 lg:pr-12">
            <p className="text-sm font-medium text-[#64748B]">Contact information</p>
            <h3 className="mt-2 text-xl font-semibold text-[#1F2937]">{siteInfo.lab.en}</h3>
            <dl className="mt-7 divide-y divide-[#E2E8F0] border-t border-[#E2E8F0]">
              {contactRows.map(({ label, value, href }) => (
                <div className="grid grid-cols-[90px_minmax(0,1fr)] items-center gap-3 py-4 text-sm" key={label}>
                  <dt className="text-[#64748B]">{label}</dt>
                  <dd className="min-w-0 break-words font-medium text-[#1F2937]">
                    {href ? (
                      <a
                        href={href}
                        className="email-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64748B]"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimatedSection>
        <AnimatedSection className="h-full">
          <div className="flex min-h-72 h-full flex-col justify-between border-t border-[#E2E8F0] py-8 lg:border-l lg:border-t-0 lg:pl-12">
            <div>
              <p className="text-sm font-medium text-[#64748B]">Location</p>
              <h3 className="mt-2 text-xl font-semibold text-[#1F2937]">{contact.location}</h3>
            </div>
            <div className="relative mt-10 min-h-64 overflow-hidden border border-[#CBD5E1] bg-[#F8FAFC]">
              <iframe
                title="Map showing Inje University Seongsan Hall"
                src={contact.mapUrl}
                className="min-h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
