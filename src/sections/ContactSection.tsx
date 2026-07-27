import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'
import { contact } from '../data/contact'

const contactRows = [
  { label: 'E-mail', value: contact.email },
  { label: 'Office', value: contact.location },
  { label: 'Address', value: '' },
]

export function ContactSection() {
  return (
    <SectionWrapper id="contact" index="10" title="Contact">
      <div className="grid border-y border-[#CBD5E1] lg:grid-cols-[0.9fr_1.1fr]">
        <AnimatedSection className="h-full">
          <div className="h-full py-8 lg:pr-12">
            <p className="text-sm font-medium text-[#64748B]">Contact information</p>
            <h3 className="mt-2 text-xl font-semibold text-[#1F2937]">Contact information Placeholder</h3>
            <dl className="mt-7 divide-y divide-[#E2E8F0] border-t border-[#E2E8F0]">
              {contactRows.map(({ label, value }) => (
                <div className="grid grid-cols-[90px_1fr] items-center gap-3 py-4 text-sm" key={label}>
                  <dt className="text-[#64748B]">{label}</dt>
                  <dd className="font-medium text-[#1F2937]">{value || 'Placeholder'}</dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimatedSection>
        <AnimatedSection className="h-full">
          <div className="flex min-h-72 h-full flex-col justify-between border-t border-[#E2E8F0] py-8 lg:border-l lg:border-t-0 lg:pl-12">
            <div>
              <p className="text-sm font-medium text-[#64748B]">Location</p>
              <h3 className="mt-2 text-xl font-semibold text-[#1F2937]">Map Placeholder</h3>
              <p className="mt-3 text-sm leading-7 text-[#64748B]">지도와 방문 안내가 추후 업데이트될 예정입니다.</p>
            </div>
            <div className="mt-10 flex min-h-32 items-center justify-center border border-dashed border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#94A3B8]">
              Map area Placeholder
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
