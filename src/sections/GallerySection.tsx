import { Image as ImageIcon } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'

export function GallerySection() {
  return (
    <SectionWrapper id="gallery" index="08" title="Gallery" eyebrow="Gallery">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <AnimatedSection className="h-full" key={index}>
            <article className="interactive-card h-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
              <div className="flex aspect-[4/3] items-center justify-center bg-[#F8FAFC] text-center">
                <div>
                  <ImageIcon className="mx-auto text-[#94A3B8]" size={26} aria-hidden="true" />
                  <p className="mt-3 text-xs font-medium text-[#64748B]">Image Placeholder</p>
                </div>
              </div>
              <div className="border-t border-[#E2E8F0] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">Date Placeholder</p>
                <h3 className="mt-2 text-base font-semibold text-[#1F2937]">Event Title Placeholder</h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">Description Placeholder</p>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
      <p className="mt-5 text-right text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">Gallery records Placeholder</p>
    </SectionWrapper>
  )
}
