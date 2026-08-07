import { AnimatedSection } from '../components/AnimatedSection'
import { SectionWrapper } from '../components/SectionWrapper'
import { publications } from '../data/publications'

export function PublicationsSection() {
  const sortedPublications = [...publications].sort((a, b) => b.year - a.year)

  return (
    <SectionWrapper id="publications" index="05" title="Publications" tone="muted">
      <div className="mb-10 grid gap-7 border-b border-[#CBD5E1] pb-7 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#475569]">Selected Papers</p>
          <p className="mt-2 text-sm leading-7 text-[#64748B]">Research papers, manuscripts, and patents since 2025.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {['2025–2026', 'All Research Areas'].map((label) => (
            <div className="min-w-48 border-b border-[#CBD5E1] px-1 py-3 text-sm text-[#64748B]" key={label}>
              <span className="mb-1 block text-xs text-[#94A3B8]">Filter</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#CBD5E1]">
        {sortedPublications.map((publication, index) => (
          <AnimatedSection key={publication.id}>
            <article className="grid gap-4 border-b border-[#E2E8F0] py-7 sm:grid-cols-[100px_1fr] lg:grid-cols-[120px_1fr_180px] lg:gap-8">
              <div>
                <span className="font-mono text-xs text-[#94A3B8]">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-2 text-sm font-medium text-[#475569]">{publication.year}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1F2937]">{publication.title}</h3>
                <p className="mt-2 text-sm text-[#64748B]">
                  {publication.venue}
                  {publication.authors.length > 0 && ` · ${publication.authors.join(', ')}`}
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#64748B]">
                  {publication.englishSummary || publication.koreanSummary}
                </p>
              </div>
              <div className="text-xs text-[#94A3B8] lg:text-right">
                <p>{publication.researchArea}</p>
                {publication.links[0] && (
                  <a
                    className="mt-3 inline-block text-[#475569] underline decoration-[#CBD5E1] underline-offset-4"
                    href={publication.links[0]}
                  >
                    View publication
                  </a>
                )}
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  )
}
