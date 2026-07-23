import { Mail, Map, MapPin } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'
import { contact } from '../data/contact'

const contactRows = [
  { icon: Mail, label: 'E-mail', value: contact.email },
  { icon: MapPin, label: 'Office', value: contact.location },
  { icon: MapPin, label: 'Address', value: '' },
]

export function ContactSection() {
  return (
    <SectionWrapper id="contact" index="10" title="Contact" eyebrow="Contact">
      <div className="grid overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
        <AnimatedSection className="h-full">
          <div className="h-full p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6F93A6]">Contact Information</p>
            <h3 className="mt-2 text-xl font-semibold text-[#1F2937]">Contact information Placeholder</h3>
            <dl className="mt-7 divide-y divide-[#E2E8F0] border-t border-[#E2E8F0]">
              {contactRows.map(({ icon: Icon, label, value }) => (
                <div className="grid grid-cols-[40px_90px_1fr] items-center gap-3 py-4 text-sm" key={label}>
                  <Icon className="text-[#6F93A6]" size={17} aria-hidden="true" />
                  <dt className="text-[#64748B]">{label}</dt>
                  <dd className="font-medium text-[#1F2937]">{value || 'Placeholder'}</dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimatedSection>
        <AnimatedSection className="h-full">
          <div className="technical-grid flex min-h-80 h-full flex-col items-center justify-center border-t border-[#E2E8F0] bg-[#F8FAFC] text-center lg:border-l lg:border-t-0">
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-[#CBD5E1] bg-white text-[#0F3A5C] shadow-sm">
              <Map size={25} aria-hidden="true" />
            </span>
            <p className="mt-4 text-sm font-semibold text-[#1F2937]">Map Placeholder</p>
            <p className="mt-2 text-xs text-[#64748B]">추후 업데이트 예정입니다.</p>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
