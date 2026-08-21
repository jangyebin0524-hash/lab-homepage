import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'
import { gallery } from '../data/gallery'

export function GallerySection() {
  return (
    <SectionWrapper id="gallery" index="08" title="Gallery" eyebrow="Lab activities">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item) => (
          <AnimatedSection className="h-full" key={item.id}>
            <article className="surface-card h-full overflow-hidden">
              <div className="aspect-video overflow-hidden border-b border-[#E2E8F0] bg-[#F8FAFC]">
                <img
                  src={`${import.meta.env.BASE_URL}${item.image}`}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-[#E2E8F0] p-5">
                <p className="text-xs text-[#94A3B8]">{item.date}</p>
                <h3 className="mt-2 text-base font-semibold text-[#1F2937]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">{item.description}</p>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
      <p className="mt-5 text-right text-xs text-[#94A3B8]">{gallery.length} activity records</p>
    </SectionWrapper>
  )
}
