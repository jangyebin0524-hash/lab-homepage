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
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimatedSection className="h-full">
          <div className="h-full rounded-2xl border border-[#E2E2E2] bg-white p-6 shadow-sm sm:p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#333333]">Contact Information</p>
            <h3 className="mt-2 text-xl font-semibold text-[#222222]">Contact information Placeholder</h3>
            <dl className="mt-7 divide-y divide-[#E2E2E2] border-t border-[#E2E2E2]">
              {contactRows.map(({ icon: Icon, label, value }) => (
                <div className="grid grid-cols-[40px_90px_1fr] items-center gap-3 py-4 text-sm" key={label}>
                  <Icon className="text-[#8A8A8A]" size={17} aria-hidden="true" />
                  <dt className="text-[#666666]">{label}</dt>
                  <dd className="font-medium text-[#222222]">{value || 'Placeholder'}</dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimatedSection>
        <AnimatedSection className="h-full">
          <div className="imaging-grid flex min-h-80 h-full flex-col items-center justify-center rounded-2xl border border-[#E2E2E2] bg-[#F2F2F2] text-center">
            <Map className="text-[#8A8A8A]" size={27} aria-hidden="true" />
            <p className="mt-4 text-sm font-semibold text-[#222222]">Map Placeholder</p>
            <p className="mt-2 text-xs text-[#666666]">추후 업데이트 예정입니다.</p>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
